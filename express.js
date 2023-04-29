
const { response } = require('express')


const http = require('http');
const porta = 8080;
//const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>Seja bem vindo</h1>')

    } else if(req.url == '/ola'){
        res.write('<h1>mundo</h1>')
    } 
    res.end();
});

servidor.listen(porta,()=>{console.log('Servidor rodando')});  