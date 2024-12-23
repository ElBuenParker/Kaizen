import React from 'react';
import './Footer.css'; // Archivo de estilos para el footer
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-menu">
          
          <h3>Aviso de Privacidad</h3>
          
          <ul>
            <li><a href="/Privacidad">Política de Privacidad</a></li>
            <li><a href="/Contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Términos y Condiciones</h3>
          <ul>
            <li><a href="/Terminos">Condiciones de Uso</a></li>
            <li><a href="/Llicencias">Licencias y Derechos</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© 2024 Mi Empresa. Todos los derechos reservados.</p>
      
    </footer>
  );
}

export default Footer;
