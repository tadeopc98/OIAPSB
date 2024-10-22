import React, { useState, useEffect } from 'react';
import './Estatutos.css'
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
        fetch('http://localhost:3001/api/pdfs')
            .then(response => response.json())
            .then(data => setPdfs(data))
            .catch(error => console.error('Error al obtener la lista de PDFs:', error));
    }, []);

    return (
        <div style={styles.container}>
            {/* Columna izquierda: Listado de PDFs */}
            <div style={styles.sidebar}>
                <h2 className='List'>Lista de PDFs</h2>
                <ul>
                    {pdfs.map((pdf) => (
                        <li key={pdf.id} onClick={() => setSelectedPdf(pdf.ubicacion)}>
                            {pdf.titulo}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Columna derecha: Visor de PDF */}
            <div style={styles.viewerContainer}>
                {selectedPdf ? (
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '100%',
                            }}
                        >
                            <Viewer
                                fileUrl={`http://localhost:3001/static/${selectedPdf}`} // Visor del PDF seleccionado
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

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    sidebar: {
        width: '30%',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        overflowY: 'auto',
    },
    viewerContainer: {
        width: '70%',
        padding: '20px',
    },
};

export default Estatutos;
