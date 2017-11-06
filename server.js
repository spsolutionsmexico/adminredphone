var express = require("express");
var bodyParser = require("body-parser");
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