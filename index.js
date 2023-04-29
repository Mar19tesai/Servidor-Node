const express = require('express')
const { request } = require('http')
const app = express();
const port = 8080 

app.get('/',(req, res)=>{
    res.send('hello mundo')
})

app.listen(port, () =>{
    console.log('Servidor inciado com sucesso http://localhost:${port}')
})