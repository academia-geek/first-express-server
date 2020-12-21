const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Heeeellooooo Geeks ;)!");
});

app.get("/json", function (req, res) {
  res.json({ hola: "Academia Geek - Backend bebelopers" });
});

app.listen(5057, function () {
  console.log("El servidor se encuentra activo");
});
