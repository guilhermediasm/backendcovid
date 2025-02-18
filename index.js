const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Backend executando...')
    /* var interval = setInterval(function (str1, str2) {
        console.log('Time executando...')
        //app.api.entrega.csvtojson
       app.api.entrega.update
    }, 30000) */
    //clearInterval(interval)
})

