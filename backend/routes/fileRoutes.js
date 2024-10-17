// backend/routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

// Ruta para obtener todos los archivos
router.get('/files', fileController.getAllFiles);

// Ruta para obtener un archivo por su ID
router.get('/files/:id', fileController.getFileById);

module.exports = router;
