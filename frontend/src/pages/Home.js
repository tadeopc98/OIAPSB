import React, { useEffect, useState } from 'react';
import './Home.css'
import estatuto from '../assets/estatutos.webp';

const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      <h1>{message}</h1>
      <p>{message}</p>

      {/* Estructura de la cuadrícula */}
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5"></div>
        <div className="row-span-5 col-start-5 row-start-1"></div>
        <div className="cards col-span-3 row-span-5 col-start-2 row-start-1">
          {/* Tarjetas dentro del div 11 */}
          <div className="row">
            {/* Primera tarjeta */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card-item card">
                <img 
                  src={estatuto} 
                  alt="Estatutos" 
                  className="card-img-top" 
                  
                />
                <div className="card-body">
                  <h5 className="card-title">Estatutos</h5>
                  <button className="btn btn-primary">Ver más ...</button>
                </div>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card-item card">
                <img 
                  src="/path-to-image/estatutos-image.webp" 
                  alt="Estatutos" 
                  className="card-img-top" 
                  style={{ maxHeight: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Estatutos</h5>
                  <button className="btn btn-primary">Ver más ...</button>
                </div>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card-item card">
                <img 
                  src="/path-to-image/estatutos-image.webp" 
                  alt="Estatutos" 
                  className="card-img-top" 
                  style={{ maxHeight: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Estatutos</h5>
                  <button className="btn btn-primary">Ver más ...</button>
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
