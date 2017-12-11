var express = require("express");
var bodyParser = require("body-parser");
var condblib = require(__dirname + '/condblib');

//firebase 
var firebase = require('firebase');
//cofiguracion conexion firebase
var config = {
    apiKey: process.env.FBASE_APIKEY, //"AIzaSyCsVB58GbuUmkwSSv4WAlk3FOuU786IrEg",
    authDomain: process.env.AUTH_DOMAIN, //"cocacola-redphone.firebaseapp.com",
    databaseURL: process.env.FB_DB_URL, //"https://cocacola-redphone.firebaseio.com",
    projectId: process.env.PROJECT_ID, //"cocacola-redphone",
    storageBucket: "",
    messagingSenderId: process.env.MESSAGING_SERNDER_ID //"634647561747"
};
var defaultApp = firebase.initializeApp(config);
var db = firebase.database();
const REF_ALTA = process.env.REF_ALTA;
const REF_ALTA_DATA = process.env.REF_ALTA_DATA;
const REF_RETO = process.env.REF_RETO;


var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});
//funcion que consulta los retos en firebase
function listarRetos(arrRETO, callback) {
    arrRETO = [];
    var ref = db.ref(REF_RETO);
    ref.on("value", function(snap) {
        snap.forEach(function(childSnap) {
            var reg = childSnap.key;
            console.log('reg = ', reg);
            arrRETO.push(reg);
        })
        console.log('arrRETO.length: ', arrRETO.length);
        callback(null, arrRETO);
    });
}

//funcion que consulta respuestas a retos por id reto 
function listarRetoRespuesta(idreto, callback) {
    //conexion a fire base 
    arrRespuestas = [];
    var ref = db.ref(REF_RETO + idreto + '/respuestas/');
    ref.on("value", function(snap) {
        snap.forEach(function(childSnap) {
            var reg = childSnap.key
            console.log('registro en respuestas = ', reg);
            arrRespuestas.push(reg);
        })
        console.log('listarRetoRespuesta-arrRespuestas.length: ', arrRespuestas.length);
        callback(null, arrRespuestas);
    });

}

//funcion que consulta los ususrios que completaron reto en firebase 
function listarRetoTerminado(idreto, callback) {
    arrTerminados = [];
    var refCon = db.ref(REF_RETO + idreto + '/concluidas/');
    refCon.on("value", function(snap) {
        snap.forEach(function(childSnap) {
            var reg = childSnap.key
            console.log('registro en concludas = ', reg);
            arrTerminados.push(reg);
        })
        console.log('listarRetoTerminado-arrTerminados.length: ', arrTerminados.length);
        callback(null, arrTerminados);
    });

}

//funcion que consulta usuarios registrados en firebase 
function listarRegsitrados(arrUSR, callback) {
    //conexion a fire base 
    //console.log('param1: ', param1)
    arrUSR = [];
    var ref = db.ref(REF_ALTA);
    ref.on("value", function(snap) {
        snap.forEach(function(childSnap) {
            var reg = childSnap.val();
            console.log('registro= ', reg.fb_id);
            arrUSR.push(reg.fb_id);
        })
        console.log('arrUSR.length: ', arrUSR.length);
        callback(null, arrUSR);
    });

}
//metodo para insertar respuestas por reto en postgres 
function insertarRespuestaPG(idreto, fbid) {
    //obtener datos firebase 
    console.log('insertarRespuestaPG - idreto: ', idreto);
    console.log('insertarRespuestaPG - fbid: ', fbid);
    var refRespuesta = db.ref(REF_RETO + idreto + '/respuestas/' + fbid + '/');
    refRespuesta.on("value", function(snap) {
        snap.forEach(function(childSnap) {
            var contexto = childSnap.key;
            var valor = childSnap.val();
            if (contexto != 'fb_id') {
                //---------insertar data 
                var textqryInsertReto = "INSERT INTO respuesta (idreto,idpreguntaai,fbid,respuesta) values($1,$2,$3,$4)";
                var values = [idreto, contexto, fbid, valor];
                var lib = new condblib.condblib();
                lib.insertardata(textqryInsertReto, values, function(textqryInsertReto, values, resDBI) {
                    console.log('res obtenerdata: ', JSON.stringify(resDBI));
                });
            }
        })
    });
}

function insertarRETOpg(idreto) {
    //obtener datos firebase 
    console.log('recuperando datos del ususrio', idreto);
    var refreto = db.ref(REF_RETO + idreto + '/datos/');
    refreto.on("value", function(snap) {
        var registro = snap.val();
        console.log('registro.cantidadInvitados= ', registro.cantidadInvitados);
        console.log('registro.fechaEnvio= ', registro.fechaEnvio);
        console.log('registro.horaEnvio= ', registro.horaEnvio);
        console.log('registro.idReto= ', registro.idReto);
        console.log('------------------------------------');
        var tRero = new Date(registro.fechaEnvio);
        //---------insertar data 
        var textqryInsertReto = "INSERT INTO reto (idreto,horaenvio,cantidadinvitados,fechaenvio) values($1,$2,$3,$4)";
        var values = [registro.idReto, registro.horaEnvio, registro.cantidadInvitados, tRero];
        var lib = new condblib.condblib();
        lib.insertardata(textqryInsertReto, values, function(textqryInsertReto, values, resDBI) {
            console.log('res obtenerdata: ', JSON.stringify(resDBI));
        });
    });

}
var retoID;
//funcion que actializa la tabla de respiestas a los retos 
function actualizarRespuestas(idreto) {
    this.retoID = idreto;
    console.log('metodo update respuestas');
    listarRetoRespuesta(idreto, function(idreto, respuesta) {
        var arrRespuestas = respuesta;
        console.log('actualizarRespuestas-arrRespuestas.length: ', arrRespuestas.length);
        console.log('arrRespuestas: ', arrRespuestas);
        listarRetoTerminado(this.retoID, function(idretovar, respuesta2) {
            console.log('listarRetoTerminado respuesta2: ', respuesta2);
            var arrCompletados = respuesta2;
            console.log('actualizarRespuestas-arrCompletados.length: ', arrCompletados.length);
            console.log('arrCompletados: ', arrCompletados);
            //borrar los registros del reto para su actualizacion 
            var textqry = 'DELETE FROM respuesta WHERE idreto = \'' + this.retoID + '\'';
            var lib = new condblib.condblib();
            //---------consulta de prueba ---
            lib.obtenerdata(textqry, function(textqry, resDB) {
                console.log('res obtenerdata: ', JSON.stringify(resDB));

                for (var i = 0; i < arrRespuestas.length; i++) {
                    console.log('arrCompletados.indexOf(arrRespuestas en ', +i + ' -> ' + arrCompletados.indexOf(arrRespuestas[i]));
                    if (arrCompletados.indexOf(arrRespuestas[i]) >= 0) {
                        console.log('Insertar respuestas -> ', this.retoID + ' -> ' + arrRespuestas[i]);
                        insertarRespuestaPG(this.retoID, arrRespuestas[i]);
                    }
                }
            });

        });
    });
}
//funcion que inserta nuevos registros de ususrios en postgres 
function insertarUSRpg(idUSR) {
    //obtener datos firebase 
    console.log('recuperando datos del ususrio', idUSR);
    var ref = db.ref(REF_ALTA_DATA + idUSR);
    ref.on("value", function(snap) {
        var registro = snap.val();
        console.log('registro.fb_id= ', registro.fb_id);
        console.log('registro.anonacimiento= ', registro.anonacimiento);
        console.log('registro.codigo= ', registro.codigo);
        console.log('registro.sexo= ', registro.sexo);
        console.log('registro.fechaActualizacion= ', registro.fechaActualizacion);
        console.log('------------------------------------');
        var t = new Date(registro.fechaActualizacion);
        //---------insertar data 
        var textqryInsert = "INSERT INTO usuario (fbid,anonacimiento,codigo,sexo,fechaactualizacion) values($1,$2,$3,$4,$5)";
        var values = [registro.fb_id, registro.anonacimiento, registro.codigo, registro.sexo, t];
        var lib = new condblib.condblib();
        lib.insertardata(textqryInsert, values, function(textqryInsert, values, resDBI) {
            console.log('res obtenerdata: ', JSON.stringify(resDBI));
        });
    });
}
// ACTUALIZAR API ROUTES BELOW

app.get("/api/actualizar", function(req, res) {
    console.log("metodo de actualizacion de base de datos en server.js");
    var arrUSR = [];
    listarRegsitrados(arrUSR, function(arrUSR, respuesta) {
        //console.log('listarRegsitrados parametro1:', parametro1);
        console.log('listarRegsitrados respuesta:', respuesta);
        arrUSR = respuesta;
        //});
        //conexion a postgres 
        try {
            console.log('conectado a postgres');
            var textqry = 'SELECT * FROM usuario';
            var lib = new condblib.condblib();
            //---------consulta de prueba ---
            lib.obtenerdata(textqry, function(textqry, resDB) {
                console.log('res obtenerdata: ', JSON.stringify(resDB));
                let queryDB = resDB;
                console.log('arrUSR.length:', arrUSR.length);
                var arrUSRPost = [];
                queryDB.forEach(function(row) {
                    arrUSRPost.push(row.fbid);
                });
                for (var i = 0; i < arrUSR.length; i++) {
                    if (arrUSRPost.indexOf(arrUSR[i]) === -1) {
                        insertarUSRpg(arrUSR[i]);
                    }
                }
            });
        } catch (err) {
            console.log('err ', err);
        }
        res.status(200).json('{"resultado":"OK"}');
    });
});

app.get("/api/actualizar/reto/:id", function(req, res) {
    console.log('---Actualizar Reto---');
    var idreto = req.params.id.toLowerCase();
    console.log('-- idreto: ', idreto);

    var arrRetos = [];
    listarRetos(arrRetos, function(arrRetos, resp2) {
        console.log('ListarReto resp ', resp2);
        arrRetos = resp2;
        //conexion a postgres 
        try {
            if (arrRetos.indexOf(idreto) > -1) {
                console.log('Reto existe en Firebase');
                console.log('conectado a postgres');
                var textqry2 = 'SELECT idreto FROM reto';
                var lib = new condblib.condblib();
                //---------consulta de prueba ---
                lib.obtenerdata(textqry2, function(textqry2, resDB2) {
                    console.log('res obtenerdata: ', JSON.stringify(resDB2));
                    let queryDB2 = resDB2;
                    console.log('arrRetos.length', arrRetos.length);
                    var arrRetoPost = [];
                    queryDB2.forEach(function(row) {
                        arrRetoPost.push(row.idreto);
                    });
                    for (var j = 0; j < arrRetos.length; j++) {
                        if (arrRetoPost.indexOf(arrRetos[j]) === -1 && arrRetos[j] === idreto) {
                            console.log('Reto a insertar: ', arrRetos[j]);
                            insertarRETOpg(arrRetos[j]);
                        }
                    }
                    //actualizar respuestas 
                    actualizarRespuestas(idreto);
                });
            }
        } catch (err) {
            console.log('err ', err);
        }
        res.status(200).json('{"resultado":"OK"}');
    });
});


app.get("/api/retos", function(req, res) {
    // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
    var textqry = 'select * from reto';
    var lib = new condblib.condblib();
    lib.obtenerdata(textqry, function(textqry, resDB) {
        console.log('res obtenerdata: ', JSON.stringify(resDB));
        let queryDB = resDB;
        //return data base query 
        res.status(200).json(queryDB);
    });

});

app.get("/api/preguntas/:id", function(req, res) {

    var idreto = req.params.id.toLowerCase();
    console.log('-- idreto: ', idreto);

    var textqry = 'select DISTINCT ON (idpreguntaai) respuesta.idpreguntaai, plantillapregunta.descripcion from respuesta INNER JOIN plantillapregunta ON plantillapregunta.idpreguntaai = respuesta.idpreguntaai  where idreto=\'' + idreto + '\'';
    var lib = new condblib.condblib();
    lib.obtenerdata(textqry, function(textqry, resDB) {
        console.log('res obtenerdata: ', JSON.stringify(resDB));
        let queryDB = resDB;
        //return data base query 
        res.status(200).json(queryDB);
    });

});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}