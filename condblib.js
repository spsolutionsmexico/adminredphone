"use strict";
var bodyParser = require("body-parser");
const { Client } = require('pg');

class condblib {
    obtenerdata(query, callback) {
        //Connect to the database before starting the application server.
        console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
        var client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        client.connect();
        console.log("Database connection ready");
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
        })
    }
    insertardata(columnas, datos, callback) {
        //Connect to the database before starting the application server.
        console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
        var client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        client.connect();
        console.log("Database connection ready");
        client.query("INSERT INTO public.\"USUARIO\" (fbId) values($1)", ['123456'], (err, resDB) => {
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
}

module.exports = {
    condblib: condblib,
}