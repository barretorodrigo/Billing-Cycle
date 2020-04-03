const port = 3000;

const bodyParser = require('body-parser');
const express = require('express'); //singleton: instância única
const server = express();
const allowCors = require('./cors');
const queryParse = require('express-query-int');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParse());

server.listen(port, function(){
    console.log(`Backend rodando na porta ${port}`);
})

module.exports = server;