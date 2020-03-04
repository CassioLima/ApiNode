// const http = require('http');

// const servidor = http.createServer((req, resp) =>{
//     resp.end('<h1>Servidor rodando...</h1>');
// });

// servidor.listen(3000);

const app = require('./src/config/custom-express');

app.listen(3000, ()=> { console.log('Servidor rodando na porta 3000')});