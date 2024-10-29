import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importa los estilos CSS específicos del navbar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Iconos que usarás
import logo from '../assets/Logo.jpg';  // Importa el logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Contenedor del logo y el texto */}
        <div className="d-flex align-items-center">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </Link>
          {/* Texto al lado del logo */}
          <span className="ms-3 text-organismo">Organismo Independiente de Agua Potable San Buenaventura A.C.</span>
        </div>

        {/* Botón para colapsar el menú en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navegación centrada */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav"> {/* Alinea los items al centro */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
