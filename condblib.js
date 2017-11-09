"use strict";
var bodyParser = require("body-parser");
const { Client } = require('pg');

class condblib {
    obtenerdata(query, callback) {
        //Connect to the database before starting the application server.
        console.log('Inicia obtenerdata');
        console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
        var client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        client.connect();
        console.log("Database connection ready");
        console.log('query: ', query);
        client.query(query, (err, resDB) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            console.log('res: STEP1--', JSON.stringify(resDB));
            for (let row of resDB.rows) {
                console.log(JSON.stringify(row));
            }
            let queryDB = resDB.rows;
            client.end();
            //return data base query 
            console.log("return data");
            callback(null, queryDB);
            //return queryDB;
        });
    }
    insertardata(query, values, callback) {
        //Connect to the database before starting the application server.
        console.log('Inicio insertardata ');
        //console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
        var client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        client.connect();
        console.log("Database connection ready");
        client.query(query, values, (err, resDB) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            console.log('res: STEP1--', JSON.stringify(resDB));
            client.end();
            //return data base query 
            console.log("Insert OK");
            callback(null, 'OK');
        });
    }
}

module.exports = {
    condblib: condblib,
}