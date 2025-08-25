import express from "express";

//Adiciona essa linha para importar dados
import dados from "./src/data/dados.js"

const app = express();
app.use (express.json());

const { bruxos, casas, varinhas, animais, pocoes} = dados; 
const serverPort = 3000; 

// Rota principal GET para "/"
app.get("/", (req, res) => {
    res.send("<h1> Vamos de Harry Potter </h1>");
});

// Criar a rota usando bruxos 
app.get ("/bruxos", (req, res) => {
    res.status(200).json(bruxos)
})

// Rota GETById - Bruxos 
app.get("/dados/bruxos/:id", (req, res) => {
  //Capturar o id pela URL/LINK da solicitação
  const id = parseInt(req.params.id);
  const bruxo = bruxos.find((p) => p.id === id);

  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      mensagem: "Personagem não encontrado!"
    });
  }
});


// Criar rota usando casas 
app.get ("/casas", (req, res) => {
    res.status(200).json(casas)
})

// Rota GETById - Casas 
app.get("/dados/casas/:id", (req, res) => {
  //Capturar o id pela URL/LINK da solicitação
  const id = parseInt(req.params.id);
  const casa = casas.find((p) => p.id === id);

  if (casa) {
    res.status(200).json(casa);
  } else {
    res.status(404).json({
      mensagem: "Personagem não encontrado!"
    });
  }
});

// Criar rota usando varinhas 
app.get ("/varinhas", (req, res) => {
    res.status(200).json(varinhas)
})

// Rota GETById - Varinhas 
app.get("/dados/varinhas/:id", (req, res) => {
  //Capturar o id pela URL/LINK da solicitação
  const id = parseInt(req.params.id);
  const varinha = varinhas.find((p) => p.id === id);

  if (varinha) {
    res.status(200).json(varinha);
  } else {
    res.status(404).json({
      mensagem: "Personagem não encontrado!"
    });
  }
});

// Criar rota usando animais 
app.get ("/animais", (req, res) => {
    res.status(200).json(animais)
})

// Rota GETById - Animais 
app.get("/dados/animais/:id", (req, res) => {
  //Capturar o id pela URL/LINK da solicitação
  const id = parseInt(req.params.id);
  const animal = animais.find((p) => p.id === id);

  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).json({
      mensagem: "Personagem não encontrado!"
    });
  }
});

// Criar rota usando pocoes 
app.get ("/pocoes", (req, res) => {
    res.status(200).json(pocoes)
})

// Rota GETById - Poções 
app.get("/dados/pocoes/:id", (req, res) => {
  //Capturar o id pela URL/LINK da solicitação
  const id = parseInt(req.params.id);
  const pocao = pocoes.find((p) => p.id === id);

  if (pocao) {
    res.status(200).json(pocao);
  } else {
    res.status(404).json({
      mensagem: "Personagem não encontrado!"
    });
  }
});

app.listen(serverPort, () => {
    console.log(`🧙‍♂️ API dos Bruxos está no ar na porta 3000, http://localhost:${serverPort}`);
});
