const express = require('express');
const router = express.Router();
const { getPdfList, getPdf } = require('../controllers/pdfControllerEstadosFinancieros');

router.get('/pdfsEstadosFinancieros', getPdfList);
router.get('/pdfsEstadosFinancieros/:id', getPdf);

module.exports = router;
