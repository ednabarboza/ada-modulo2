import * as http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World in TS");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});


