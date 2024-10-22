import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='gridContainer'>
        {/* Columna 1: Info Pag */}
        <div className='footer-column'>
          <h3>Info Pag</h3>
          <ul>
            <li><Link to="/quienes-somos">¿Quiénes Somos?</Link></li>
          </ul>
        </div>
        
        {/* Columna 2: Servicios */}
        <div className='footer-column'>
          <h3>Servicios</h3>
          <ul>
            <li><Link to="/estatutos">Estatutos</Link></li>
            <li><Link to="/estados-financieros">Estados Financieros</Link></li>
            <li><Link to="/asambleas">Asambleas</Link></li>
            <li><Link to="/obras">Obras</Link></li>
            <li><Link to="/predios">Predios</Link></li>
            <li><Link to="/compras-publicas">Compras Públicas</Link></li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto */}
        <div className='footer-column'>
          <h3>Contacto</h3>
          <ul>
            <li><Link to="/facebook">Facebook</Link></li>
            <li><Link to="/telefonos">Teléfonos</Link></li>
            <li><Link to="/correo">Correo</Link></li>
            <li><Link to="/direccion-horarios">Dirección / Horarios</Link></li>
            <li><Link to="/atencion">Atención</Link></li>
          </ul>
        </div>
      </div>

      <p>&copy; 2024 Organismo Independiente de Agua Potable. San Buenaventura, Estado de México.</p>
    </footer>
  );
}

export default Footer;
