module.exports = app => {
    const http = require('http');
    const fs = require('fs');
    var wget = require('node-wget');


    const { Pool } = require('pg')
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'root',
        database: 'covid',
        max: 20,
        idleTimeoutMillis: 300000,
        connectionTimeoutMillis: 200000,
        callbackWaitsForEmptyEventLoop: false
    })

    const csvtojson = async (req, res) => {

        wget({
            url: 'https://raw.githubusercontent.com/claytonfraga/covid19/master/all_world_forecast.csv',

            timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds
        },

            async function (error, response, body) {
                var resultJSON = [];
                if (error) {
                    console.log('--- error:');
                    console.log(error);            // error encountered
                } else {
                    var lines = body.split("\n");

                    var headers = lines[0].split(",");

                    for (var i = 1; i < lines.length - 1; i++) {

                        var obj = {};
                        var currentline = lines[i].split(",");

                        for (var j = 0; j < headers.length; j++) {
                            conver = headers[j].replace(/\"/g, '')
                            obj[conver] = currentline[j].replace(/\"/g, '')


                        }
                        //conver-> Nome dos campos
                        //currentline[j] -> INformaçoes dos campos
                        resultJSON.push(obj);
                    }
                }
                console.log('-----conectar')
                console.time('#for')
                await pool.connect()
                    .then(async (client) => {
                        for (var i = 0; i < resultJSON.length - 1; i++) {
                            let nomePais = resultJSON[i].country.replace(/\./g, ' ')
                            console.log('-----For', i)
                            /*  await client.query(`UPDATE pais SET regiao='${resultJSON[i].region}' WHERE nome='${nomePais}'`)
                                 .then(success => {
                                     console.log('Registro Atualizado')
                                 })
                                 .catch(async (error) => {
                                     await pool.end()
                                     console.log('Erro sql:', error)
                                     return res.status(400).send({ success: false, menssagem: error });
                                 }) */
                            //console.log('Pais:', nomePais)
                            await client.query(`SELECT idpais FROM pais WHERE nome= '${nomePais}'`)
                                .then(async (resultSQLP) => {
                                    await client.query(`SELECT COUNT(1) FROM casoscovid`)
                                        .then(async (resultSQLS) => {
                                            if (resultSQLS.rows[0].count <= 0) {
                                                await client.query(`INSERT INTO casoscovid(idnumcasos, idpais, dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista) VALUES (0, ${resultSQLP.rows[0].idpais}, '${resultJSON[i].dias}', ${resultJSON[i].casos_confirmados},${resultJSON[i].estimativa_mortes},${resultJSON[i].otimista},${resultJSON[i].casos_estimados},${resultJSON[i].pessimista})`)
                                                    .then(success => {
                                                        console.log('Tabela vazia um registro inserido')
                                                    })
                                                    .catch(async (error) => {
                                                        pool.end()
                                                        console.log('Erro sql:', error)
                                                        return res.status(400).send({ success: false, menssagem: error });
                                                    })
                                            } else {
                                                await client.query(`SELECT COUNT(1) FROM casoscovid WHERE dia='${resultJSON[i].dias}' AND idpais=${resultSQLP.rows[0].idpais}`)
                                                    .then(async (resultSQLT) => {
                                                        let casos_confirmados = isNaN(resultJSON[i].casos_confirmados) ? 0 : resultJSON[i].casos_confirmados
                                                        let estimativa_mortes = isNaN(resultJSON[i].estimativa_mortes) ? 0 : resultJSON[i].estimativa_mortes
                                                        if (resultSQLT.rows[0].count == 1) {
                                                            await client.query(`UPDATE casoscovid SET "casoConfirmado"=${casos_confirmados},"estimativaMorte"=${estimativa_mortes},otimista=${resultJSON[i].otimista},"casoEstimado"=${resultJSON[i].casos_estimados},pessimista=${resultJSON[i].pessimista} WHERE dia='${resultJSON[i].dias}' AND idpais=${resultSQLP.rows[0].idpais}`)
                                                                .then(success => {
                                                                    //console.log('Registro Atualizado')
                                                                })
                                                                .catch(async (error) => {
                                                                    pool.end()
                                                                    console.log('Erro sql:', error)
                                                                    return res.status(400).send({ success: false, menssagem: error });
                                                                })

                                                        } else {
                                                            await client.query(`SELECT MAX(idnumcasos) FROM casoscovid`)
                                                                .then(async (id) => {
                                                                    await client.query(`INSERT INTO casoscovid(idnumcasos, idpais, dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista) VALUES (${id.rows[0].max + 1}, ${resultSQLP.rows[0].idpais}, '${resultJSON[i].dias}',${casos_confirmados},${estimativa_mortes},${resultJSON[i].otimista},${resultJSON[i].casos_estimados},${resultJSON[i].pessimista})`)
                                                                        .then(sucess => {
                                                                            //console.log('Novo registro inserido')
                                                                        })
                                                                        .catch(async (error) => {
                                                                            pool.end()
                                                                            console.log('Erro sql INSERT casoscovid Novo registro:', error)
                                                                            return res.status(400).send({ success: false, menssagem: error });
                                                                        })
                                                                })
                                                                .catch(async (error) => {
                                                                    pool.end()
                                                                    console.log('Erro sql INSERT casoscovid Novo registro:', error)
                                                                    return res.status(400).send({ success: false, menssagem: error });
                                                                })
                                                        }
                                                    })
                                                    .catch(async (error) => {
                                                        pool.end()
                                                        console.log('Erro sql:', error)
                                                        return res.status(400).send({ success: false, menssagem: error });
                                                    })
                                            }
                                        })
                                        .catch(async (error) => {
                                            pool.end()
                                            console.log('Erro sql:', error)
                                            return res.status(400).send({ success: false, menssagem: error });
                                        })
                                })
                                .catch(async (error) => {
                                    pool.end()
                                    console.log('Erro sql em adiquirir nome:', error)
                                    return res.status(400).send({ success: false, menssagem: "Erro em adiquirir nome do pais" });
                                })
                        }
                        pool.end()
                        console.timeEnd('#for')
                        return res.status(200).send({ success: false });


                    })
                    .catch(error => {
                        pool.end()
                        console.error('Error acquiring client', error);
                        return res.status(400).send({ success: false });
                    })
                //console.timeEnd('#for')

            }
        );
    }

    const csvtojsonLogistico = async (req, res) => {

        wget({
            url: 'https://raw.githubusercontent.com/claytonfraga/covid19/master/logistic_all_world_forecast.csv',

            timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds
        },

            async function (error, response, body) {
                var resultJSON = [];
                if (error) {
                    console.log(error);
                    return res.status(400).send({ success: false, menssagem: error });          // error encountered
                } else {
                    var lines = body.split("\n");

                    var headers = lines[0].split(",");

                    for (var i = 1; i < lines.length - 1; i++) {

                        var obj = {};
                        var currentline = lines[i].split(",");

                        for (var j = 0; j < headers.length; j++) {
                            conver = headers[j].replace(/\"/g, '')
                            obj[conver] = currentline[j].replace(/\"/g, '')


                        }
                        //conver-> Nome dos campos
                        //currentline[j] -> INformaçoes dos campos
                        resultJSON.push(obj);
                    }
                }
                console.log('-----conectar')
                console.time('#for')
                await pool.connect()
                    .then(async (client) => {
                        for (var i = 0; i < resultJSON.length - 1; i++) {
                            console.log('---FOR', i)
                            let nomePais = resultJSON[i].country.replace(/\./g, ' ')
                            await client.query(`SELECT idpais FROM pais WHERE nome= '${nomePais}'`)
                                .then(async (resultSQLP) => {
                                    await client.query(`SELECT COUNT(1) FROM casoscovidlogistico`)
                                        .then(async (resultSQLS) => {
                                            if (resultSQLS.rows[0].count <= 0) {
                                                await client.query(`INSERT INTO casoscovidlogistico(idnumcasos, idpais, dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista) VALUES (0, ${resultSQLP.rows[0].idpais}, '${resultJSON[i].dias}', ${resultJSON[i].casos_confirmados},${resultJSON[i].estimativa_mortes},${resultJSON[i].otimista},${resultJSON[i].casos_estimados},${resultJSON[i].pessimista})`)
                                                    .then(success => {
                                                        console.log('Tabela vazia um registro inserido')
                                                    })
                                                    .catch(async (error) => {
                                                        pool.end()
                                                        console.log('Erro sql:', error)
                                                        return res.status(400).send({ success: false, menssagem: error });
                                                    })
                                            } else {
                                                await client.query(`SELECT COUNT(1) FROM casoscovidlogistico WHERE dia='${resultJSON[i].dias}' AND idpais=${resultSQLP.rows[0].idpais}`)
                                                    .then(async (resultSQLT) => {
                                                        let casos_confirmados = isNaN(resultJSON[i].casos_confirmados) ? 0 : resultJSON[i].casos_confirmados
                                                        let estimativa_mortes = isNaN(resultJSON[i].estimativa_mortes) ? 0 : resultJSON[i].estimativa_mortes
                                                        if (resultSQLT.rows[0].count == 1) {
                                                            await client.query(`UPDATE casoscovidlogistico SET "casoConfirmado"=${casos_confirmados},"estimativaMorte"=${estimativa_mortes},otimista=${resultJSON[i].otimista},"casoEstimado"=${resultJSON[i].casos_estimados},pessimista=${resultJSON[i].pessimista} WHERE dia='${resultJSON[i].dias}' AND idpais=${resultSQLP.rows[0].idpais}`)
                                                                .then(success => {
                                                                    //console.log('Registro Atualizado')
                                                                })
                                                                .catch(async (error) => {
                                                                    pool.end()
                                                                    console.log('Erro sql:', error)
                                                                    return res.status(400).send({ success: false, menssagem: error });
                                                                })

                                                        } else {
                                                            await client.query(`SELECT MAX(idnumcasos) FROM casoscovidlogistico`)
                                                                .then(async (id) => {
                                                                    await client.query(`INSERT INTO casoscovidlogistico(idnumcasos, idpais, dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista) VALUES (${id.rows[0].max + 1}, ${resultSQLP.rows[0].idpais}, '${resultJSON[i].dias}',${casos_confirmados},${estimativa_mortes},${resultJSON[i].otimista},${resultJSON[i].casos_estimados},${resultJSON[i].pessimista})`)
                                                                        .then(sucess => {
                                                                            //console.log('Novo registro inserido')
                                                                        })
                                                                        .catch(async (error) => {
                                                                            pool.end()
                                                                            console.log('Erro sql INSERT casoscovidlogistico Novo registro:', error)
                                                                            return res.status(400).send({ success: false, menssagem: error });
                                                                        })
                                                                })
                                                                .catch(async (error) => {
                                                                    pool.end()
                                                                    console.log('Erro sql INSERT casoscovid Novo registro:', error)
                                                                    return res.status(400).send({ success: false, menssagem: error });
                                                                })
                                                        }
                                                    })
                                                    .catch(async (error) => {
                                                        pool.end()
                                                        console.log('Erro sql:', error)
                                                        return res.status(400).send({ success: false, menssagem: error });
                                                    })
                                            }
                                        })
                                        .catch(async (error) => {
                                            pool.end()
                                            console.log('Erro sql:', error)
                                            return res.status(400).send({ success: false, menssagem: error });
                                        })
                                })
                                .catch(async (error) => {
                                    pool.end()
                                    console.log('Erro sql em adiquirir nome:', error)
                                    return res.status(400).send({ success: false, menssagem: "Erro em adiquirir nome do pais" });
                                })
                        }
                        console.timeEnd('#for')
                        pool.end()
                        return res.status(200).send({ success: true });

                    })
                    .catch(error => {
                        pool.end()
                        console.error('Error acquiring client', error);
                        return res.status(400).send({ success: false });
                    })
            }
        );
    }

    return { csvtojson, csvtojsonLogistico }
}