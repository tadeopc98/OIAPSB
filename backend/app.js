const express = require('express');
const cors = require('cors');
const path = require('path');
const pdfRoutes = require('./routes/pdfRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando');
});

// Middleware para servir archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'pdfs'))); // Carpeta donde se almacenan los PDFs

app.use('/api', pdfRoutes);

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});
