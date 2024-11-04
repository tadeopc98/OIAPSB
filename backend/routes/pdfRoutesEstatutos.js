const express = require('express');
const router = express.Router();
const { getPdfList, getPdf } = require('../controllers/pdfControllerEstatutos');

router.get('/pdfsEstatutos', getPdfList);
router.get('/pdfsEstatutos/:id', getPdf);

module.exports = router;
