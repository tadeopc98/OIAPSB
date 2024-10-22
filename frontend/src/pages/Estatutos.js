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
            {/* Columna izquierda: Listado de PDFs */}
            <div className="estatutos-sidebar"> 
                <h2 className='estatutos-list-title'>Lista de PDFs</h2>
                <ul>
                    {pdfs.map((pdf) => (
                        <li 
                            key={pdf.id} 
                            onClick={() => handlePdfSelection(pdf)} // Llamamos a la función con la selección
                            style={{ cursor: 'pointer' }} // Añadimos un cursor pointer para indicar que es clickeable
                        >
                            {pdf.titulo}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Columna derecha: Visor de PDF */}
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
                                fileUrl={selectedPdf} // Usamos la URL generada por el estado
                                plugins={[defaultLayoutPluginInstance]} 
                                initialPageScale={0.5} // Escala inicial del PDF
                            />
                        </div>
                    </Worker>
                ) : (
                    <p>Selecciona un PDF para visualizarlo</p>
                )}
            </div>
        </div>
    );
};

export default Estatutos;
