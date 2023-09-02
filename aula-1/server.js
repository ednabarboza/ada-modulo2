// const http =  require('http')

// const server = http.createServer((req, res) => {
//    res.writeHead(200, {'Content-Type':'text/plain'}) 
//    res.end('Olá, mundo!')
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Meu servidor roda na porta ${PORT}`)
// })

const http =  require('http')

const server = http.createServer((req, res) => {
    //configuração do cabeçalho de cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', 86400);

   res.writeHead(200, {'Content-Type':'application/json'}) 
   res.end('{"teste": "teste}')
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Meu servidor roda em http://localhost:${PORT}`)
})

