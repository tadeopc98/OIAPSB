import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import facebookLogo from '../assets/facebook-2.png';
import llamadaTelefonicaLogo from '../assets/llamadaTelefonicaLogo.png';
import correoElectronicoLogo from '../assets/correoElectronicoLogo.png'; 
import ubicacionLogo from '../assets/ubicacion.png';
import horariosLogo from '../assets/calendario.png';
import estatutosLogo from '../assets/estatutos.png';
import estadosFinancierosLogo from '../assets/ef.png'
import asambleasLogo from '../assets/asamblea.png';
import obrasLogo from '../assets/obras.png';
import prediosLogo from '../assets/predios.png';
import comprasPublicasLogo from '../assets/compraspublicas.png';


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
            <li><Link to="/estatutos">
            <img src={estatutosLogo} alt="estatutosLogo" className="footer-icon" />
            Estatutos</Link></li>
            <li><Link to="/estados-financieros">
            <img src={estadosFinancierosLogo} alt="estadosFinancierosLogo" className="footer-icon" />
            Estados Financieros</Link></li>
            <li><Link to="/asambleas">
            <img src={asambleasLogo} alt="asambleasLogo" className="footer-icon" />
            Asambleas</Link></li>
            <li><Link to="/obras">
            <img src={obrasLogo} alt="obrasLogo" className="footer-icon" />
            Obras</Link></li>
            <li><Link to="/predios">
            <img src={prediosLogo} alt="prediosLogo" className="footer-icon" />
            Predios</Link></li>
            <li><Link to="/compras-publicas">
            <img src={comprasPublicasLogo} alt="comprasPublicasLogo" className="footer-icon" />
            Compras Públicas</Link></li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto */}
        <div className='footer-column'>
          <h3>Contactos</h3>
          <ul>
            <li className="normal-link"><Link to="https://www.facebook.com/profile.php?id=100083339401907" title='Visita nuestro Facebook'>
            <img src={facebookLogo} alt="Facebook Logo" className="footer-icon" />
            Organismo Independiente De Agua Potable San Buenaventura</Link></li>
            <li className="normal-link"><Link to="/telefonos">
            <img src = {llamadaTelefonicaLogo} alt= "llamadaTelefonicaLogo" className ="footer-icon" /> 5540875021</Link></li>
            <li className="normal-link"><Link to="/correo">
            <img src = {correoElectronicoLogo} alt= "correoElectronicoLogo" className = "footer-icon" /> OIAPSB@outlook.com</Link></li>
            <li className="normal-link"><Link to="/direccion">
            <img src={ubicacionLogo} alt="ubicacionLogo" className="footer-icon" />
            Pensador Mexicano SN, San Buenaventura, Toluca, Mex.
            </Link></li>
            <li className="especial-link">
            <img src={horariosLogo} alt="horariosLogo" className="footer-icon" />
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
