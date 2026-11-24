const http = require("node:http");

const livros = [
    {"É assim que acaba": "Colleen Hoover", preco: 39.90},
    {"XYZ Bookstore": "Colleen", preco: 29.90},
];

console.log (livros);
console.log ("Catálogo com X livros: " + livros.length);


http.createServer((req , res) => {
    let corpo, status = 200;

   if (req.url === "/") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Bem-vindo a API da XYZ Bookstore!";
  }else if (req.url === "/livros") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de livros - " + JSON.stringify(livros);
  }else if (req.url === "/carrinho") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de carrinho - em construcao.";
  }else if (req.url === "/autores") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de autores - em construcao.";
  }else {
    status = 404;
    corpo = JSON.stringify({ erro: "rota inexistente" })

  }
   console.log("Pedido recebido em: " + req.url);
    res.writeHead(status, {"content-type": " application/json; charset=utf-8"});
    res.end("<h1>XYZ Bookstore</h1><p>" + corpo + "</p>");
  //console.log("Pedido recebido em: " + req.url);
}).listen(3000);


console.log("XYZ Bookstore no ar em http://localhost:3000/livros");
