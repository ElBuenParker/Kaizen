import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo de estilos
import Logo from '../assets/images/Kaizen_horizontal_2.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src= {Logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
        <Link to="/Servicios" className="navbar-link" onClick={closeMenu}>Servicios</Link>
        <Link to="/Contacto" className="navbar-link" onClick={closeMenu}>Contacto</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
