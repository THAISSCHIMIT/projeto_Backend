const http = require("node:http");

http.createServer((req , res) => {
    let corpo, status = 200;

   if (req.url === "/") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Bem-vindo a API da XYZ Bookstore!";
  }else if (req.url === "/livros") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de livros - em construcao.";
  }else if (req.url === "/carrinho") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de carrinho - em construcao.";
  }else if (req.url === "/autores") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de autores - em construcao.";
  }else {
    status = 404;
    corpo = "Endereco nao encontrado.";
    
  }
   console.log("Pedido recebido em: " + req.url);
    res.writeHead(status, {"content-type": "text/html; charset=utf-8"});
    res.end("<h1>XYZ Bookstore</h1><p>" + corpo + "</p>");
  //console.log("Pedido recebido em: " + req.url);
}).listen(3000);


console.log("XYZ Bookstore no ar em http://localhost:3000/livros");
