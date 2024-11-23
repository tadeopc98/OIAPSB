import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Añadido para la navegación
import './Home.css';
import estatuto from '../assets/estatutos.png';
import ef from '../assets/ef.png';
import asm from '../assets/asamblea.png';
import obras from '../assets/obras.png';
import predios from '../assets/predios.png';
import comprasPublicas from '../assets/compraspublicas.png';
import prmociones from '../assets/promociones.png';
import encurso from '../assets/en-curso.png';
import maquinaria from '../assets/excavador.png';
import servicios from '../assets/servicio.png';

const Home = () => {
  const navigate = useNavigate(); // Hook para redirigir a otras páginas
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      {/*Estructura de "quienesSomos"*/}
      <div className="bg-content">
      <div className="columns-container">
    {/* Columna 1: Quiénes Somos */}
    <div className="column">
      <h2>¿Quiénes Somos?</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500...
      </p>
    </div>

    {/* Columna 2: Misión */}
    <div className="column">
      <h2>Misión</h2>
      <p>
        Nuestra misión es proporcionar soluciones innovadoras para mejorar la calidad de vida de las personas, apoyándonos en la sostenibilidad y la eficiencia.
      </p>
    </div>

    {/* Columna 3: Visión */}
    <div className="column">
      <h2>Visión</h2>
      <p>
        Ser líderes en el mercado, comprometidos con el desarrollo sostenible y el bienestar de las comunidades en las que operamos, buscando siempre la excelencia.
      </p>
    </div>
  </div>
</div>

      {/* Estructura de la cuadrícula */}
      <div className="container_grid grid grid-cols-5 grid-rows-5 gap-4 tarjets">
        <div className="row-span-5"></div>
        <div className="row-span-5 col-start-5 row-start-1"></div>
        <div className="cards col-span-3 row-span-5 col-start-2 row-start-1">
          {/* Tarjetas dentro del div 11 */}
          <div className="row">
            {/* Primera tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/estatutos')}>
                <img src={estatuto} alt="Estatutos" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Estatutos</h5>
                </div>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/estados-financieros')}>
                <img src={ef} alt="Estados Financieros" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Estados Financieros</h5>
                </div>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/asambleas')}>
                <img src={asm} alt="Asambleas" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Asambleas</h5>
                </div>
              </div>
            </div>
            {/* Cuarta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/obras')}>
                <img src={obras} alt="Obras" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Obras</h5>
                </div>
              </div>
            </div>
            {/* Quinta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/predios')}>
                <img src={predios} alt="Predios" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Predios</h5>
                </div>
              </div>
            </div>
            {/* Sexta tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/compras-publicas')}>
                <img src={comprasPublicas} alt="Compras Públicas" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Compras Públicas</h5>
                </div>
              </div>
            </div>
            {/* Séptima tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/promociones')}>
                <img src={prmociones} alt="Promociones" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Promociones y descuentos</h5>
                </div>
              </div>
            </div>
            {/* Octava tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/proyectos-en-curso')}>
                <img src={encurso} alt="Proyectos en curso" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Proyectos en curso</h5>
                </div>
              </div>
            </div>
            {/* Novena tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/maquinaria-transporte')}>
                <img src={maquinaria} alt="Maquinaria y transporte" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Maquinaria y transporte</h5>
                </div>
              </div>
            </div>
            {/* Décima tarjeta */}
            <div className="div_principal col-12 col-md-3 mb-3">
              <div className="card-item card" onClick={() => navigate('/servicios')}>
                <img src={servicios} alt="Servicios" className="card-img-top" />
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
