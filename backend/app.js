const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();

app.use(cors()); // Permitir peticiones del frontend
app.use(express.json()); // Parsear JSON

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando');
});

app.use('/api', apiRoutes); // Usa las rutas de la API

// Servidor corriendo en el puerto 3001
app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});
