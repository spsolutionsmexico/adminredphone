var express = require("express");
var bodyParser = require("body-parser");
var condblib = require(__dirname + '/condblib');

//firebase 
var firebase = require('firebase');
//cofiguracion conexion firebase
var config = {
    apiKey: process.env.FBASE_APIKEY, //"AIzaSyCsVB58GbuUmkwSSv4WAlk3FOuU786IrEg",
    authDomain: process.env.AUTH_DOMAIN, //"cocacola-redphone.firebaseapp.com",
    databaseURL: process.env.DATABASE_URL, //"https://cocacola-redphone.firebaseio.com",
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
//});

// ACTUALIZAR API ROUTES BELOW

app.get("/api/actualizar", function(req, res) {
    console.log("metodo de actualizacion de base de datos en server.js");
    console.log("req: ", req);
    res.status(200).json('{"resultado":"OK"}');
});



// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}