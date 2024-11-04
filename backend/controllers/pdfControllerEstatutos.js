const pdfList = require('../models/pdfListEstatutos');

const getPdfList = (req, res) => {
    res.json(pdfList);
};

const getPdf = (req, res) => {
    const { id } = req.params;
    //console.log("ID recibido:", id); // Muestra el id recibido

    // Asegúrate de que los tipos coincidan
    const pdf = pdfList.find(pdf => pdf.id === parseInt(id, 10)); // Cambia parseInt según el tipo de id en pdfList

    if (pdf) {
        //console.log("PDF encontrado:", pdf); // Depuración
        res.json(pdf);
    } else {
        //console.log("PDF no encontrado con el ID proporcionado.");
        res.status(404).send('PDF not found');
    }
};


module.exports = { getPdfList, getPdf };
