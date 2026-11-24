const http = require("node:http");

http.createServer((req , res) => {
    res.writeHead(200, {"content-type": "text/plain; charset=utf-8"});
    res.end("<h1>XYZ Bookstore</h1><p>Livros de todas as categorias.</p>");
  //console.log("Pedido recebido em: " + req.url);
}).listen(3000);

console.log("XYZ Bookstore no ar em http://localhost:3000/livros");
