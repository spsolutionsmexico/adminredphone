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

function listarRegsitrados(callback) {
    //conexion a fire base 
    var ref = db.ref(REF_ALTA);
    var arrUSR = [];
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

// ACTUALIZAR API ROUTES BELOW

app.get("/api/actualizar", function(req, res) {
    console.log("metodo de actualizacion de base de datos en server.js");
    listarRegsitrados(function(arrUSR) {
        console.log('listarRegsitrados arrUSR:', arrUSR);
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
                queryDB.forEach(function(row) {
                    console.log('fbid --> ', row.fbid);
                });
            });
            //---------insertar data 
            var textqryInsert = "INSERT INTO usuario (fbid,anonacimiento) values($1,$2)";
            var values = ['12348', '1990'];
            /*lib.insertardata(textqryInsert, values, function(textqryInsert, values, resDBI) {
                console.log('res obtenerdata: ', JSON.stringify(resDBI));
                let queryDBI = resDBI;
            });*/
            //------------------------------------
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