const { urlencoded } = require('express');
const express = require('express');
const app = express();
const PORT = 3333;
const routes = require('./src/routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor disponível em http://localhost:${PORT}`)
});