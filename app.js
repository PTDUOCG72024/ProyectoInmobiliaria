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

// Ruta para la user registration
app.get('/userRegistration', (req, res) => {
  res.sendFile(__dirname + '/public/pages/userRegistration.html');
});

// Ruta para recuperarContrasena
app.get('/recuperarContrasena', (req, res) => {
  res.sendFile(__dirname + '/public/pages/recuperarContrasena.html');
});

// Ruta para la página perfil
app.get('/perfil', (req, res) => {
  res.sendFile(__dirname + '/public/pages/perfil.html');
});

// Ruta para la página de inicio
app.get('/paginaInicio', (req, res) => {
  res.sendFile(__dirname + '/public/pages/paginaInicio.html');
});

// Ruta para la página de login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/pages/login.html');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
