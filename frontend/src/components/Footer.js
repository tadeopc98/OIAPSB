import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import facebookLogo from '../assets/facebookLogo.png'

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
          <h3>Contactos</h3>
          <ul>
            <li className="normal-link"><Link to="https://www.facebook.com/profile.php?id=100083339401907" title='Visita nuestro Facebook'>
            <img src={facebookLogo} alt="Facebook Logo" className="footer-icon" />
            Organismo Independiente De Agua Potable San Buenaventura</Link></li>
            <li className="normal-link"><Link to="/telefonos">5540875021</Link></li>
            <li className="normal-link"><Link to="/correo">OIAPSB@outlook.com</Link></li>
            <li className="normal-link"><Link to="/direccion">Pensador Mexicano SN, San Buenaventura, Toluca, Mex.
            </Link></li>
            <li className="especial-link">
            Horario de atención:
            <br />
            Lunes / Viernes 9:00 am - 4:30 pm 
            <br />
            Sábado 9:00 am - 2:00 pm           </li>
          </ul>
        </div>
      </div>

      <p>&copy; 2024 Organismo Independiente de Agua Potable. San Buenaventura, Estado de México.</p>
    </footer>
  );
}

export default Footer;
