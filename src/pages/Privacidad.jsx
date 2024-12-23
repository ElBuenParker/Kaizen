import React from 'react';
import '../styles/Privacidad.css';  // Importar el CSS correspondiente

const AvisoPrivacidad = () => {
  return (
    <div className="aviso-container">
      <div className="aviso-header">
        <h1>Aviso de Privacidad</h1>
        <p>En KAIZEN, nos comprometemos a proteger tu privacidad. Este Aviso de Privacidad explica cómo recopilamos, usamos, y protegemos tu información personal.</p>
      </div>

      <div className="aviso-content">
        <section>
          <h2>1. Información Recopilada</h2>
          <p>Recopilamos información personal que nos proporcionas al usar nuestros servicios, como tu nombre, correo electrónico, y cualquier otra información relacionada con tu uso de nuestros productos.</p>
        </section>

        <section>
          <h2>2. Uso de la Información</h2>
          <p>La información recopilada se utiliza para mejorar nuestros servicios, personalizar tu experiencia y ofrecerte soporte adecuado. No compartimos tu información con terceros sin tu consentimiento.</p>
        </section>

        <section>
          <h2>3. Protección de la Información</h2>
          <p>Implementamos medidas de seguridad adecuadas para proteger tu información personal contra accesos no autorizados, alteraciones o divulgación indebida.</p>
        </section>

        <section>
          <h2>4. Derechos del Usuario</h2>
          <p>Tienes derecho a acceder, rectificar, cancelar oponerte al tratamiento de tus datos personales. Para más detalles, puedes contactarnos en cualquier momento.</p>
        </section>

        <section>
          <h2>5. Cambios al Aviso de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar este Aviso de Privacidad. Cualquier cambio será publicado en esta página.</p>
        </section>

        <section>
          <h2>6. Contacto</h2>
          <p>Si tienes alguna pregunta o solicitud sobre tu privacidad, contáctanos a través de nuestro correo electrónico <a href="mailto:contacto@kaizen.com">contacto@kaizen.com</a>.</p>
        </section>
      </div>

      <div className="aviso-footer">
        <p>&copy; {new Date().getFullYear()} KAIZEN. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default AvisoPrivacidad;
