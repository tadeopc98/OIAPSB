import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='gridContainer'>
        {/* Columna 1: Info Pag */}
        <div className='footer-column'>
          <h3>Info Pag</h3>
          <ul>
            <li><a href="#">¿Quiénes Somos?</a></li>
          </ul>
        </div>
        
        {/* Columna 2: Servicios */}
        <div className='footer-column'>
          <h3>Servicios</h3>
          <ul>
            <li><a href="#">Estatutos</a></li>
            <li><a href="#">Estados Financieros</a></li>
            <li><a href="#">Asambleas</a></li>
            <li><a href="#">Obras</a></li>
            <li><a href="#">Predios</a></li>
            <li><a href="#">Compras Públicas</a></li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto */}
        <div className='footer-column'>
          <h3>Contacto</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Teléfonos</a></li>
            <li><a href="#">Correo</a></li>
            <li><a href="#">Dirección / Horarios</a></li>
            <li><a href="#">Atención</a></li>
          </ul>
        </div>
      </div>

      <p>&copy; 2024 Organismo Independiente de Agua Potable. San Buenaventura, Estado de México.</p>
    </footer>
  );
}

export default Footer;
