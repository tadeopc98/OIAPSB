// controllers/pdfController.js
const pdfList = require('../models/pdfList');

const getPdfList = (req, res) => {
    res.json(pdfList);
};

const getPdf = (req, res) => {
    const { id } = req.params;
    const pdf = pdfList.find(pdf => pdf.id === id);

    if (pdf) {
        res.sendFile(pdf.path, { root: './pdfs' }); // Suponiendo que los archivos están en una carpeta /pdfs
    } else {
        res.status(404).send('PDF not found');
    }
};

module.exports = { getPdfList, getPdf };
