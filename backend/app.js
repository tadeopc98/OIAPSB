const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');
const fileRoutes = require('./routes/fileRoutes');
const app = express();

app.use(cors()); // Permitir peticiones del frontend
app.use(express.json()); // Parsear JSON

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando');
});

// Middleware para servir archivos estáticos (los PDFs)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes); // Usa las rutas de la API
app.use('/api', fileRoutes);

// Servidor corriendo en el puerto 3001
app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});
