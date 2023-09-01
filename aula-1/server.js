const http =  require('http')

const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type':'text/plain'}) 
   res.end('Olá, mundo!')
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Meu servidor roda na porta ${PORT}`)
})


