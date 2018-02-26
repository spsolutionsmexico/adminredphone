"use strict";
"use async";
var bodyParser = require("body-parser");
const { Pool, Client } = require('pg');


class condblib {

    obtenerdata(query, callback) {

        //Connect to the database before starting the application server.
        console.log('Inicia obtenerdata');
        //Create database pool conection
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        //Await for pool connect
        (async() => {
            const client = await pool.connect()
            console.log("Database connection ready");
            console.log('query: ', query);

            //query executed
            try {
                await client.query('BEGIN')
                const { rows } = await client.query(query);
                await client.query('COMMIT');
                console.log('res: STEP1--', rows);
                for (let rows of rows.rows) {
                    console.log(JSON.stringify(rows));
                }

            } catch (e) {
                await client.query('ROLLBACK')
                throw e
            } finally {
                client.release()
            }
        })().catch(e => console.error(e.stack));
    }


    insertardata(query, values, callback) {
        //Connect to the database before starting the application server.
        console.log('Inicio insertardata ');
        //Create database pool conection
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        //Await for pool connect
        (async() => {
            const client = await pool.connect()
            console.log("Database connection ready");
            console.log("los valores que me pasan son:", values)
            console.log('query: ', query);

            //query executed
            try {
                await client.query('BEGIN')
                const { rows } = await client.query(query, values);
                await client.query('COMMIT');
                console.log('res: STEP1--', JSON.stringify(rows));
                for (let rows of rows.rows) {
                    console.log(JSON.stringify(rows));
                }

            } catch (e) {
                await client.query('ROLLBACK')
                throw e
            } finally {
                client.release()
            }
        })().catch(e => console.error(e.stack));
    }
}
module.exports = {
    condblib: condblib,
}