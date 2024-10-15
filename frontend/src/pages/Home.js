import React, { useEffect, useState } from 'react';
import './Home.css';
import estatuto from '../assets/estatutos.png';
import ef from '../assets/ef.png'
import asm from '../assets/asamblea.png'
import obras from '../assets/obras.png'
import predios from '../assets/predios.png'
import comprasPublicas from '../assets/compraspublicas.png'
import prmociones from '../assets/promociones.png'
import encurso from '../assets/en-curso.png'
import maquinaria from '../assets/excavador.png'
import servicios from '../assets/servicio.png'

const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      

      {/*Estructura de "quienesSomos"*/}
      <div className=" bg-content">
        
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
        
      </div>

    
    

      {/* Estructura de la cuadrícula */}
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5"></div>
        <div className="row-span-5 col-start-5 row-start-1"></div>
        <div className="cards col-span-3 row-span-5 col-start-2 row-start-1">
          {/* Tarjetas dentro del div 11 */}
          <div className="row">
            {/* Primera tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={estatuto} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Estatutos</h5>
                  
                </div>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={ef} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Estados Financieros</h5>
                  
                </div>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={asm} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Asambleas</h5>
                  
                </div>
              </div>
            </div>
            {/* Cuarta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={obras} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Obras</h5>
                  
                </div>
              </div>
            </div>
            {/* Quinta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={predios} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Predios</h5>
                  
                </div>
              </div>
            </div>
            {/* Sexta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={comprasPublicas} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Compras Públicas</h5>
                  
                </div>
              </div>
            </div>
            {/* Septima tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={prmociones} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Promociones y descuentos</h5>
                  
                </div>
              </div>
            </div>
            {/* Octava tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={encurso} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Proyectos en curso</h5>
                  
                </div>
              </div>
            </div>
            {/* Novena tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={maquinaria} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Maquinaria y transporte</h5>
                  
                </div>
              </div>
            </div>
            {/* Decima tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card">
                <img 
                  src={servicios} 
                  alt="Estatutos" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">Servicios</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
