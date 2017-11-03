var express = require("express");
var bodyParser = require("body-parser");
//const { Client } = require('pg');
var CONTACTS_COLLECTION = "contacts";
var condblib = require(__dirname + '/condblib');

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

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/contacts", function(req, res) {
    // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
    var textqry = 'select * from contacts';
    var lib = new condblib.condblib();
    lib.obtenerdata(textqry, function(textqry, resDB) {
        console.log('res obtenerdata: ', JSON.stringify(resDB));
        let queryDB = resDB;
        //return data base query 
        res.status(200).json(queryDB);
    });

});
app.get("/api/chartdemo", function(req, res) {
    // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
    var textqry = 'select * from ventas';
    var lib = new condblib.condblib();
    lib.obtenerdata(textqry, function(textqry, resDB) {
        console.log('res obtenerdata chart: ', JSON.stringify(resDB));
        let queryDB = resDB;
        //return data base query 
        res.status(200).json(queryDB);
    });
});

app.post("/api/contacts", function(req, res) {
    handleError(res, err.message, "Failed to create new contact.");
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/contacts/:id", function(req, res) {
    res.status(200).json('{"_id": "01","name": "usr","email": "usrmail","phone:" {"mobile": "555","work": "556"}}');
});

app.put("/api/contacts/:id", function(req, res) {
    res.status(200).json('{"_id": "01","name": "usr","email": "usrmail","phone:" {"mobile": "555","work": "556"}}');
});

app.delete("/api/contacts/:id", function(req, res) {
    res.status(200).json('{"_id": "01","name": "usr","email": "usrmail","phone:" {"mobile": "555","work": "556"}}');
});