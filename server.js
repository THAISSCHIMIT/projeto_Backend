const http = require("node:http");

http.createServer((req) => {
  console.log("Pedido recebido em: " + req.url);
}).listen(3000);

console.log("XYZ Bookstore no ar em http://localhost:3000/livros");
