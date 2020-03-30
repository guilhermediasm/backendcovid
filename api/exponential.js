module.exports = app => {
    const { Pool } = require('pg')


    const entregaExponential = async (req, res) => {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'covid',
            callbackWaitsForEmptyEventLoop: false,
            max: 5000,    //maximum connection which postgresql or mysql can intiate
            min: 0,     //maximum connection which postgresql or mysql can intiate
            acquire: 200000, // time require to reconnect 
            idle: 200000, // get idle connection
            evict: 100000 // it actualy removes the idle connection 
        })
        var data = []
        await pool.connect()
            .then(async (client) => {
                await client.query(`SELECT idpais,nome,latitude,longitude,regiao FROM pais WHERE regiao IS NOT NULL ORDER BY idpais`)
                    .then(async (pais) => {
                        console.log('pais.rows.length', pais.rows.length)
                        for (i = 0; i < pais.rows.length; i++) {

                            idPais = pais.rows[i].idpais
                            nome = pais.rows[i].nome
                            regiao = pais.rows[i].regiao

                            var cases = []
                            await client.query(`SELECT dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista FROM casoscovid WHERE idpais=${pais.rows[i].idpais}  ORDER BY dia`)
                                .then(async (casos) => {

                                    for (j = 0; j < casos.rows.length; j++) {
                                        var day = new Date(casos.rows[j].dia)

                                        obj =
                                        {
                                            name: `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`,
                                            confirmed: casos.rows[j].casoConfirmado,
                                            //recovered:casos.rows[0].recuperados,
                                            //deaths:casos.rows[0].mortos,
                                            pessimistic: casos.rows[j].pessimista,
                                            optimistic: casos.rows[j].otimista,
                                            estimate_cases: casos.rows[j].casoEstimado,
                                            estimate_deaths: casos.rows[j].estimativaMorte
                                        }

                                        cases.push(obj)
                                    }
                                })
                                .catch(async (error) => {
                                    console.log('pais.rows[i]', i)
                                    console.log('Erro sql:', error)
                                    return res.status(400).send({ success: false, menssagem: error });
                                })
                            try {
                                data.push({
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: [
                                            pais.rows[i].longitude,
                                            pais.rows[i].latitude
                                        ]
                                    },
                                    properties: {
                                        idpais: pais.rows[i].idpais,
                                        name: pais.rows[i].nome,
                                        region: pais.rows[i].regiao,
                                        cases: cases
                                    }
                                })
                            } catch (error) {
                                data.push({
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: [
                                            0,
                                            0
                                        ]
                                    },
                                    properties: {
                                        name: "",
                                        region: "",
                                        cases: {}
                                    }
                                })
                            }

                        }
                        //console.log('Data', data)
                    })
                    .catch(async (error) => {
                        console.log('pais.rows[i]', i)
                        console.log('Erro sql:', error)
                        return res.status(400).send({ success: false, menssagem: error });
                    })
            })
        pool.end()
        return res.status(200).send(
            {
                success: true,
                data: data
            }
        );
    }


    const entregaExponentialRegiao = async (req, res) => {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'covid',
            callbackWaitsForEmptyEventLoop: false,
            max: 5000,    //maximum connection which postgresql or mysql can intiate
            min: 0,     //maximum connection which postgresql or mysql can intiate
            acquire: 200000, // time require to reconnect 
            idle: 200000, // get idle connection
            evict: 100000 // it actualy removes the idle connection 
        })
        var data = new Date();
        await pool.connect()
            .then(async (client) => {
                await client.query(`SELECT SUM(casoscovid."casoConfirmado") as casoConfirmado,pais.regiao FROM casoscovid INNER JOIN 
                pais ON casoscovid.idpais=pais.idpais WHERE casoscovid.dia='${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}' 
                GROUP BY pais.regiao
                ORDER BY pais.regiao`)
                    .then(async (pontos) => {
                        var data = []
                        for (i = 0; i < pontos.rows.length - 1; i++) {
                            data.push({
                                region: pontos.rows[i].regiao,
                                totalCasos: pontos.rows[i].casoconfirmado
                            })
                        }
                        return res.status(200).send(
                            {
                                success: true,
                                data: data
                            }
                        );
                    })
            })
    }

    const entregaExponentialDiaAtual = async (req, res) => {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'covid',
            callbackWaitsForEmptyEventLoop: false,
            max: 5000,    //maximum connection which postgresql or mysql can intiate
            min: 0,     //maximum connection which postgresql or mysql can intiate
            acquire: 200000, // time require to reconnect 
            idle: 200000, // get idle connection
            evict: 100000 // it actualy removes the idle connection 
        })
        var data = []
        await pool.connect()
            .then(async (client) => {
                var date = new Date();
                await client.query(`SELECT idpais,nome,latitude,longitude,regiao FROM pais WHERE regiao IS NOT NULL ORDER BY idpais`)
                    .then(async (pais) => {
                        for (i = 0; i < pais.rows.length; i++) {
                            idPais = pais.rows[i].idpais
                            nome = pais.rows[i].nome
                            regiao = pais.rows[i].regiao

                            await client.query(`SELECT dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista FROM casoscovid WHERE dia='${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}' AND idpais=${pais.rows[i].idpais}`)
                                .then(async (casos) => {
                                    for (j = 0; j < casos.rows.length; j++) {
                                        if (pais.rows[i] != undefined) {
                                            data.push({
                                                type: "Feature",
                                                geometry: {
                                                    type: "Point",
                                                    coordinates: [
                                                        pais.rows[i].longitude,
                                                        pais.rows[i].latitude
                                                    ]
                                                },
                                                properties: {
                                                    name: pais.rows[i].nome,
                                                    region: pais.rows[i].regiao,
                                                    day: `${date.getDate()}-0${date.getMonth() + 1}-${date.getFullYear()}`,
                                                    confirmed: casos.rows[j].casoConfirmado,
                                                    //recovered:casos.rows[0].recuperados,
                                                    //deaths:casos.rows[0].mortos,
                                                    pessimistic: casos.rows[j].pessimista,
                                                    optimistic: casos.rows[j].otimista,
                                                    estimate_cases: casos.rows[j].casoEstimado,
                                                    estimate_deaths: casos.rows[j].estimativaMorte
                                                }
                                            })
                                        }
                                    }
                                })
                                .catch(async (error) => {
                                    console.log('Erro sql:', error)
                                    return res.status(400).send({ success: false, menssagem: error });
                                })

                        }
                        //console.log('Data', data)


                    })
                    .catch(async (error) => {
                        console.log('Erro sql:', error)
                        return res.status(400).send({ success: false, menssagem: error });
                    })
            })
            .catch(async (err) => {
                console.log('Erro sql:', err)
                return res.status(400).send({ success: false, menssagem: err });
            })
        pool.end()
        return res.status(200).send(
            {
                success: true,
                data: data
            }
        );
    }

    const entregaExponentialDataSelecionada = async (req, res) => {

        const { startDate, endDate, idpais } = req.query
        try {
            const dateS = new Date(startDate)
            const dateE = new Date(endDate)

            const pool = new Pool({
                host: 'localhost',
                user: 'postgres',
                password: 'root',
                database: 'covid',
                callbackWaitsForEmptyEventLoop: false,
                max: 5000,    //maximum connection which postgresql or mysql can intiate
                min: 0,     //maximum connection which postgresql or mysql can intiate
                acquire: 200000, // time require to reconnect 
                idle: 200000, // get idle connection
                evict: 100000 // it actualy removes the idle connection 
            })
            await pool.connect()
                .then(async (client) => {
                    var cases = []
                    await client.query(`SELECT casoscovid.idpais, pais.latitude, pais.longitude, pais.nome, idnumcasos, dia, "casoConfirmado", "estimativaMorte", otimista, "casoEstimado", pessimista 
                FROM casoscovid INNER JOIN pais ON casoscovid.idpais=pais.idpais
                WHERE casoscovid.idpais = ${idpais} AND dia>='${dateS.getFullYear()}-${dateS.getMonth() + 1}-${dateS.getDate()}' AND dia<='${dateE.getFullYear()}-${dateE.getMonth() + 1}-${dateE.getDate()}'
                ORDER BY dia`)
                        .then(async (casos) => {
                            for (i = 0; i < casos.rows.length; i++) {
                                var date = new Date(casos.rows[i].dia);
                                obj = {
                                    name: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
                                    confirmed: casos.rows[i].casoConfirmado,
                                    //recovered:casos.rows[0].recuperados,
                                    //deaths:casos.rows[0].mortos,
                                    pessimistic: casos.rows[i].pessimista,
                                    optimistic: casos.rows[i].otimista,
                                    estimate_cases: casos.rows[i].casoEstimado,
                                    estimate_deaths: casos.rows[i].estimativaMorte
                                }
                                cases.push(obj)
                            }

                            return res.status(200).send(
                                {
                                    success: true,
                                    data: {
                                        type: "Feature",
                                        geometry: {
                                            type: "Point",
                                            coordinates: [
                                                casos.rows[0].longitude,
                                                casos.rows[0].latitude
                                            ]
                                        },
                                        properties: {
                                            idpais: casos.rows[0].idpais,
                                            name: casos.rows[0].nome,
                                            region: casos.rows[0].regiao,
                                            cases: cases
                                        }
                                    }

                                }
                            );
                        })
                })
        } catch (error) {
            return res.status(400).send(
                {
                    success: false,
                    menssagem: "Formato de data incorreto",
                    error
                }
            );
        }


    }



    return { entregaExponential, entregaExponentialRegiao, entregaExponentialDiaAtual, entregaExponentialDataSelecionada }
}