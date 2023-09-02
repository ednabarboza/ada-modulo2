const http = require('http');
const fs = require('fs'); //para pegar arquivos (nativo do node)
const path = require('path');

const server = http.createServer((req, res) => {
  //configuração do cabeçalho de cors
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);

  if (req.url === '/') {
    const filePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1><p>Pagina nao encontrada</p></h1>');
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log('Rodando no servidor http://localhost:3001');
});