const http = require("node:http");


const livros = [
  {
    id: "sally-adventure-book",
    titulo: "As Aventuras de Sally",
    autor: "A. Writer",
    descricao: "Uma expedição que muda tudo.",
    preco: 39.9,
    genero: "Aventura"
  },
  {
    id: "dave-cooking-book",
    titulo: "A Cozinha do Dave",
    autor: "D. Chef",
    descricao: "Receitas para quem queimou a primeira.",
    preco: 29.5,
    genero: "Culinária"
  },
];


console.log (livros);
console.log ("Catálogo com X livros: " + livros.length);


http.createServer((req , res) => {
  const [caminho, query] = req.url.split("?");
  const params = new URLSearchParams(query || "");

    let corpo, status = 200;

   if (caminho === "/") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Bem-vindo a API da XYZ Bookstore!";

  }else if (caminho === "/livros") {
    console.log("Pedido recebido em: " + req.url);
    const autor = params.get("autor");
    const genero = params.get("genero");

    if (autor) {
        corpo = livros.filter(l =>
            l.autor.toLowerCase().includes(autor.toLowerCase())
        );

    }  if (genero) {
        corpo = corpo.filter(l =>
            l.genero.toLowerCase().includes(genero.toLowerCase())
        );


    } else {
        corpo = livros;
    }

  }else if (caminho.startsWith("/livros/")) {
    console.log("Pedido recebido em: " + req.url);

    const id = caminho.split("/")[2];

    const livroEncontrado = livros.find(livro => livro.id === id);

    if (livroEncontrado) {
        corpo = livroEncontrado;
    } else {
        status = 404;
        corpo = { erro: "Livro não encontrado" };
    }
  


  }else if (caminho === "/carrinho") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de carrinho - em construcao.";


  }else if (caminho === "/autores") {
    console.log("Pedido recebido em: " + req.url);
    corpo = "Rota de autores - em construcao.";


  }else {
    status = 200;
    corpo = JSON.stringify({ erro: "rota inexistente" })

  }
   console.log("Pedido recebido em: " + req.url);


    res.writeHead(200, {"content-type": " application/json; charset=utf-8"});
    res.end(JSON.stringify(corpo));
  //console.log("Pedido recebido em: " + req.url);
  }).listen(3000);


console.log("XYZ Bookstore no ar em http://localhost:3000/livros");
