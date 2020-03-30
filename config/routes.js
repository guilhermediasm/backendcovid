module.exports = app => {

   // app.get('/csvtojson', app.api.entrega.csvtojson)
  
   // app.get('/csvtojsonLogistico', app.api.entrega.csvtojsonLogistico)
    app.get('/selectDate',app.api.exponential.entregaExponentialDataSelecionada)
    app.get('/exponential_total', app.api.exponential.entregaExponential)
    app.get('/exponential_region', app.api.exponential.entregaExponentialRegiao)
    app.get('/exponential_total_atual', app.api.exponential.entregaExponentialDiaAtual)
}