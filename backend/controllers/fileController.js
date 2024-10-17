// backend/controllers/fileController.js
const files = require('../models/files');

exports.getAllFiles = (req, res) => {
  res.json(files); // Devolvemos la lista de archivos en formato JSON
};

exports.getFileById = (req, res) => {
  const fileId = parseInt(req.params.id);
  const file = files.find(f => f.id === fileId);

  if (file) {
    res.json(file);
  } else {
    res.status(404).json({ message: "Archivo no encontrado" });
  }
};
