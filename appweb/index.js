// index.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello", (req,res) => res.send("hello"));

app.get("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.query);
  res.send("<h1>Sucesso!</h1><a href='index.html'>voltar</a>");
});

app.listen(3000);
console.log("app online");