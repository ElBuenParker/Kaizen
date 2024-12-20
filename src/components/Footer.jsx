import React from 'react';
import './Footer.css'; // Archivo de estilos para el footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-menu">
          <h3>Aviso de Privacidad</h3>
          <ul>
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/cookies">Uso de Cookies</a></li>
            <li><a href="/datos">Protección de Datos</a></li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Términos y Condiciones</h3>
          <ul>
            <li><a href="/terminos">Condiciones de Uso</a></li>
            <li><a href="/responsabilidad">Limitación de Responsabilidad</a></li>
            <li><a href="/licencias">Licencias y Derechos</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© 2024 Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
