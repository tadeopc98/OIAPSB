// routes/pdfRoutes.js
const express = require('express');
const router = express.Router();
const { getPdfList, getPdf } = require('../controllers/pdfController');

router.get('/pdfs', getPdfList);
router.get('/pdfs/:id', getPdf);

module.exports = router;
