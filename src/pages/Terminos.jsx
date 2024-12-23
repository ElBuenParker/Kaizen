import React from 'react';
import '../styles/Terminos.css';  // Mantén el import correcto

const Terminos = () => {
  return (
    <div className="terminos-container">
      <div className="terminos-header">
        <h1>Términos y Condiciones</h1>
        <p>Bienvenido a KAIZEN. Al acceder y utilizar nuestros servicios, aceptas los siguientes términos y condiciones.</p>
      </div>

      <div className="terminos-content">
        <section>
          <h2>1. Aceptación de los Términos</h2>
          <p>Al utilizar este sitio web, aceptas quedar vinculado por estos términos y condiciones.</p>
        </section>

        <section>
          <h2>2. Servicios Ofrecidos</h2>
          <p>KAIZEN proporciona soluciones para la optimización de recursos humanos, que incluyen, pero no se limitan a, la creación de perfiles de puesto, evaluaciones de colaboradores y capacitación.</p>
        </section>

        <section>
          <h2>3. Uso del Sitio Web</h2>
          <p>El usuario se compromete a utilizar el sitio web de acuerdo con la legislación vigente y en respeto a los derechos de propiedad intelectual.</p>
        </section>

        <section>
          <h2>4. Modificaciones a los Términos</h2>
          <p>KAIZEN se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página y serán efectivas al momento de su publicación.</p>
        </section>

        <section>
          <h2>5. Privacidad y Protección de Datos</h2>
          <p>Nos comprometemos a proteger tu privacidad. Para más información, consulta nuestra <a href="/politica-privacidad">Política de Privacidad</a>.</p>
        </section>

        <section>
          <h2>6. Contacto</h2>
          <p>Si tienes alguna pregunta sobre estos términos, por favor contáctanos a través de nuestro correo electrónico <a href="mailto:contacto@kaizen.com">contacto@kaizen.com</a>.</p>
        </section>
      </div>

      <div className="terminos-footer">
        <p>&copy; {new Date().getFullYear()} KAIZEN. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Terminos;
