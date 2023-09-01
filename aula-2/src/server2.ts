// import * as http from "http";
// import * as fs from "fs";
// import * as path from "path";

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     const filePath = path.join(__dirname, '../public', 'index.html');

//     fs.readFile(filePath, 'utf8', (err, content) => {
//       if (err) {
//         res.writeHead(500);
//         res.end('Erro interno do servidor');
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1><p>Pagina nao encontrada</p></h1>');
//   }
// });

// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log('Rodando no servidor http://localhost:3001');
// });

import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    const caminho = path.join(__dirname, '../public', 'index.html');
    fs.readFile(caminho, 'utf-8', (erro, dado) => {
      if(erro){
        res.writeHead(500);
        res.end('Erro do servidor')
      }
      res.writeHead(200);
      res.end(dado);
    })
  }else{
    res.writeHead(404);
    res.end('Pagina não encontrada');

  }
})


const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`)
})

