import * as http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World in TS");

    //configuração do cabeçalho de cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', 86400);
  
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});


