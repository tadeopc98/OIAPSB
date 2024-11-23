const express = require('express');
const router = express.Router();
const { getPdfList, getPdf } = require('../controllers/pdfControllerComprasPublicas');

router.get('/pdfsComprasPublicas', getPdfList);
router.get('/pdfsComprasPublicas/:id', getPdf);

module.exports = router;