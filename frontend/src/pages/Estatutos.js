import React from 'react';
import './Estatutos.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Estatutos = () => {
    const pdfUrl = "http://localhost:3001/static/pdf2.pdf";

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={styles.container}>
            <div style={styles.viewerContainer}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                        }}
                    >
                        <Viewer
                            fileUrl={pdfUrl}
                            plugins={[defaultLayoutPluginInstance]} // Añadimos el plugin de layout
                            initialPageScale={0.5} // Escala inicial del PDF
                        />
                    </div>
                </Worker>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    viewerContainer: {
        width: '80%',
        height: '80%',
    },
    
};

export default Estatutos;
