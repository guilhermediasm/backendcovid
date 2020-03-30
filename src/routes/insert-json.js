`use strict`;

var fs = require("fs");
const express = require('express');
const router = express.Router();

const db = require("../../config/db"); // importing the db config


const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'covid',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

router.get('/', async (req, res, next) => {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }

        fs.readFile("./data.json", "utf8", function (err, data) {

            if (err) {
                return console.log("Erro ao ler arquivo");
            }

            var jsonData = JSON.parse(data); // faz o parse para json
            let i = 0;
            while (jsonData[i] != undefined) {

                client.query(
                    `INSERT INTO pais(idpais, nome, latitude, longitude)VALUES(${jsonData[i].id}, ${jsonData[i].name}, ${jsonData[i].latitude}, ${jsonData[i].longitude})`
                    , (err, result) => {
                        if (err) {
                            i = 200;
                            
                            return console.error('Error executing query', err.stack)
                        }
                        console.log(result)
                        i++;
                    });
            };
            res.json({ pais: "Fim" });
            //jsonData = Object.keys(jsonData[200]);
            //console.log(jsonData[0].name)
        });
    })
   
});






module.exports = router;