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
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo"/> {/* Agrega la imagen del logo */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Alinea los items a la derecha en pantallas grandes */}
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
