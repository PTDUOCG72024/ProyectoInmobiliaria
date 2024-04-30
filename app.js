const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/login.html');
});

// Ruta para la página de dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/pages/dashboard.html');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});