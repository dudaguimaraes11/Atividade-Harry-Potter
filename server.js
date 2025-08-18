import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();
const serverPort = 3000; 

app.use (express.json());

app.get("/", (req, res) => {
    res.send("<h1> Vamos de Harry Potter </h1>");
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});


app.listen(3000, () => {
    console.log(`🧙‍♂️ API dos Bruxos está no ar na porta 3000, http://localhost:${serverPort}`);
});
