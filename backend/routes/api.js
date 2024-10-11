const express = require('express');
const router = express.Router();

// Ejemplo de una ruta GET
router.get('/example', (req, res) => {
    res.json({ message: 'API funcionando' });
});

module.exports = router;
