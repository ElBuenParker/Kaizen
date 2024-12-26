import './Footer.css';  // Asegúrate de importar el archivo CSS
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer className="footer">
      <div className="footer-links">
      
        <Link to="/terminos" className="footer-link">Términos y Condiciones</Link>
        <Link to="/privacidad" className="footer-link">Aviso de Privacidad</Link>
      </div>
      <div className="footer-rights">
        <p>© {currentYear} Kaizen. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
