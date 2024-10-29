import React, { useState, useEffect } from 'react';
import './Estatutos.css'; // Importamos los estilos CSS que son específicos para este componente
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Estatutos = () => {
    const [pdfs, setPdfs] = useState([]); // Estado para almacenar la lista de archivos PDF
    const [selectedPdf, setSelectedPdf] = useState(''); // Estado para almacenar el archivo PDF seleccionado
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // Obtener la lista de archivos PDF desde el backend
    useEffect(() => {
        fetch('http://localhost:3001/api/pdfs')  // Cambia esta URL si es necesario
            .then(response => response.json())
            .then(data => {
                setPdfs(data); // Guardamos los PDFs en el estado
                console.log("Lista de PDFs obtenida:", data); // Depuración
            })
            .catch(error => console.error('Error al obtener la lista de PDFs:', error));
    }, []);

    // Verifica que se selecciona el PDF y que la URL se genera correctamente
    const handlePdfSelection = (pdf) => {
        const pdfUrl = `http://localhost:3001/static/${pdf.ubicacion}`;
        setSelectedPdf(pdfUrl); // Actualizamos el estado con la URL completa del PDF
        console.log("PDF seleccionado:", pdfUrl); // Depuración de la URL completa
    };

    return (
        <div className="estatutos-container">
    {/* Nuevo contenedor que apila los sidebars */}
    <div className="estatutos-sidebars-container">
        {/* Primer sidebar */}
        <div className="estatutos-sidebar">
            <h5 className='estatutos-list-title'>Estatutos en archivos PDF por fecha</h5>
            <ul>
                {pdfs.map((pdf) => (
                    <li 
                        key={pdf.id} 
                        onClick={() => handlePdfSelection(pdf)} 
                        style={{ cursor: 'pointer' }}
                    >
                        {pdf.titulo}
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Segundo sidebar */}
        <div className="estatutos-sidebar2">
            <h5 className='estatutos-list-title'>Detalles de los archivos PDF´s</h5>

            <p className='estatutos-list-titleD'>Titulo de archivo:</p>
            <p className='estatutos-list-text'>Recibo de luz</p>

            <p className='estatutos-list-titleD'>Descripción de archivo:</p>
            <p className='estatutos-list-text'>Este recibo es del mes de Octubre</p>

            <p className='estatutos-list-titleD'>Fecha del archivo:</p>
            <p className='estatutos-list-text'>13/OCT/2024</p>

            <p className='estatutos-list-titleD'>Proyecto:</p>
            <p className='estatutos-list-text'>Página web</p>
        </div>
    </div>

    {/* Visor de PDF */}
    <div className="estatutos-viewer-container">
        {selectedPdf ? (
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '100%',
                    }}
                >
                    <Viewer
                        fileUrl={selectedPdf}
                        plugins={[defaultLayoutPluginInstance]}
                        initialPageScale={0.5}
                    />
                </div>
            </Worker>
        ) : (
            <p></p>
        )}
    </div>
</div>

    );
};

export default Estatutos;
