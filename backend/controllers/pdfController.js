const pdfList = require('../models/pdfList');

const getPdfList = (req, res) => {
    res.json(pdfList);
};

const getPdf = (req, res) => {
    const { id } = req.params;
    const pdf = pdfList.find(pdf => pdf.id === id);

    if (pdf) {
        res.sendFile(pdf.path, { root: path.join(__dirname, '../pdfs') }); // Ajusta la raíz para que apunte a la carpeta de PDFs
    } else {
        res.status(404).send('PDF not found');
    }
};

module.exports = { getPdfList, getPdf };
