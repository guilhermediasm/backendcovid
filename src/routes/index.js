`use strict`;

const express = require('express');
const router = express.Router();
//const db = require('../../config/con')

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
    if (!req.body.pais) {
        return res.status(400).send({ erro: 'Dados incompletos' })
    }


    const pais = await db("pais").where("name", req.body.name).select('idpais', 'name', 'latitude', 'longitude'); // making a query to get all todos
    res.json({ pais });
});

module.exports = router;