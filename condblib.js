"use strict";
var bodyParser = require("body-parser");
const { Client } = require('pg');

class condblib {
    /***killpg(callback) {
         console.log("Kill al conections to PG")
         query = "select pg_cancel_backend(pid) from pg_stat_activity where pid < > pg_backend_pid()"
     }***/


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
            client.end();
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
        console.log("los valores que me pasan son:", values)
        client.query(query, values, (err, resDB) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            console.log('res: Insert Data--', JSON.stringify(resDB));
            client.end();
            //return data base query 
            console.log("Insert OK");

            client.end();
            callback(null, 'OK');
        });
    }

}

module.exports = {
    condblib: condblib,
}