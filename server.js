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
        console.log('------------------------------------');
        //---------insertar data 
        var textqryInsert = "INSERT INTO usuario (fbid,anonacimiento,codigo,sexo) values($1,$2)";
        var values = [registro.fb_id, registro.anonacimiento, registro.codigo, registro.sexo];
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



// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}