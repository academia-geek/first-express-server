const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hola Mundo PCJIC');
});

app.get('/json', function(req, res) {
    res.json({ hola: 'Media Técnica PCJIC' });
});

app.listen(5057, function() {
    console.log("El servidor se encuentra activo");
});
