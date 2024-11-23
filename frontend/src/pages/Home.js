import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
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
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import video from '../assets/video.mp4'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const navigate = useNavigate(); // Hook para redirigir a otras páginas
  const [message, setMessage] = useState('');

  // Configuración del carrusel
  const settings = {
    dots: true, // Indicadores en el carrusel
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen por vez
    slidesToScroll: 1, // Scroll de una imagen a la vez
    autoplay: true, // Activar auto-desplazamiento
    autoplaySpeed: 5000, // Tiempo entre imágenes (5 segundos)
    pauseOnHover: true, // Pausar cuando el mouse está encima
  };

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

{/* Apartado de Servicios */}
<div className="services-section">
  <h2 className="section-title">Nuestros Servicios</h2>
  <p className="section-subtitle">Explora nuestras soluciones en potabilización de agua.</p>
  <div className="services-grid">
    {/* Tarjeta 1 */}
    <div className="service-card">
      <div className="service-img-container">
        <img src={img1} alt="Servicio 1" className="service-img" />
        <div className="service-title-overlay">
          <h3 className="service-title">Purificación de Agua</h3>
        </div>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div className="service-card">
      <div className="service-img-container">
        <img src={img1} alt="Servicio 2" className="service-img" />
        <div className="service-title-overlay">
          <h3 className="service-title">Tratamiento de Residuos</h3>
        </div>
      </div>
    </div>

    {/* Tarjeta 3 */}
    <div className="service-card">
      <div className="service-img-container">
        <img src={img1} alt="Servicio 3" className="service-img" />
        <div className="service-title-overlay">
          <h3 className="service-title">Distribución Sostenible</h3>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Línea divisoria con efecto especial */}
<div className="divider">
  <div className="line"></div>
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
            
          </div>
        </div>
      </div>
      <div className="container">
      {/* Línea divisoria */}
      <div className="divider">
        <div className="line"></div>
      </div>

      {/* Carrusel */}
      <div className="carousel-section">
        <h2 className="carousel-title">Galería Multimedia</h2>
        <Slider {...settings}>
          {/* Imagen 1 */}
          <div>
            <img src={img1} alt="Imagen 1" className="carousel-img" />
          </div>
          {/* Imagen 2 */}
          <div>
            <img src={img2} alt="Imagen 2" className="carousel-img" />
          </div>
          {/* Imagen 3 */}
          <div>
            <img src={img3} alt="Imagen 3" className="carousel-img" />
          </div>
          {/* Video */}
          <div>
            <video
              className="carousel-video"
              controls
              onEnded={(e) => {
                // Regresa al inicio del carrusel cuando el video termina
                e.target.currentTime = 0;
              }}
            >
              <source src={video} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        </Slider>
      </div>
    </div>
    </div>

    
  );
};

export default Home;
