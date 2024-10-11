const express = require('express');
const router = express.Router();

// Ejemplo de una ruta GET
router.get('/home', (req, res) => {
    res.json({ message: 'API funcionando en Home' });
});

router.get('/contact', (req, res) => {
    res.json({ message: 'API funcionando en pagina Contact' });
});

router.get('/acercaDe', (req, res) => {
    res.json({ message: 'API funcionando en pagina Acerca De' });
});

module.exports = router;
