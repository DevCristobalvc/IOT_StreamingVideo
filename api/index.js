const express = require('express');
const { createServer } = require('http');
const { Server } = require('ws');
const app = express();

const server = createServer(app);
const wss = new Server({ server });

// Configura tu aplicación Express y WebSocket aquí
app.use(express.static('src/public'));

// Ejemplo de configuración de WebSocket
wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  ws.on('message', (message) => {
    console.log('Recibido: %s', message);
    ws.send(`Echo: ${message}`);
  });
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

module.exports = (req, res) => {
  server.emit('request', req, res);
};
