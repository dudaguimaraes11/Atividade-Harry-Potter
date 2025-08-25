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

// Criar a rota usando ela 
app.get("/bruxos", (req, res) => {
    res.status(200).json(bruxos);
});

// Criar rota usando casas 
app.get ("/casas", (req, res) => {
    res.status(200).json(casas); 
})

// Criar rota usando varinhas 
app.get ("/varinhas", (req, res) => {
    res.status(200).json(varinhas); 
})

// Criar rota usando animais 
app.get ("/animais", (req, res) => {
    res.status(200).json(animais); 
})

// Criar rota usando pocoes 
app.get ("/pocoes", (req, res) => {
    res.status(200).json(pocoes); 
})

app.listen(serverPort, () => {
    console.log(`🧙‍♂️ API dos Bruxos está no ar na porta 3000, http://localhost:${serverPort}`);
});
