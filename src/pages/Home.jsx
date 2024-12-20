// src/components/Home.jsx
import React, { useEffect } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Importa las imágenes
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

function Home() {
  // Inicializa AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Imagen de Main */}
      <div className="image-main">
        <img
          src={image1}
          alt="Imagen 1 de escritorio"
          className="image-desktop-main"
          data-aos="fade-in"
        />
        <div className="overlay-main">
          <h1 className="main-title">Soluciones integrales de recursos humanos para crecer contigo 
          </h1>
          <Link to="/Contacto" className="btn-outline">Contáctanos</Link>
        </div>
      </div>

      {/* Texto de Main */}
      <div className="txt-main">
        <p>
          KAIZEN es tu aliado estratégico en la optimización de recursos humanos, enfocado en microempresas, Pymes y emprendedores. Nuestra misión es ayudarte a estructurar y fortalecer tus departamentos clave, desde la creación de perfiles de puesto y organigramas hasta el desarrollo de procesos y formatos personalizados.
        </p>
      </div>

      {/* Sección de Características */}
      <div className="features">
        <div className="feature-item">
          {/* Imagen */}
          <img
            src={image2}
            alt="Imagen 2 de escritorio"
            className="image-desktop"
            data-aos="fade-down"
          />
          {/* Texto */}
          <div className="text-content" data-aos="fade-left">
            <p>
              Contamos con una amplia experiencia en evaluación de colaboradores, satisfacción laboral, detección de necesidades de capacitación y atracción de talento. Ofrecemos soluciones diseñadas para impulsar el crecimiento de tu empresa, siempre adaptándonos a tu presupuesto.
            <br></br>
            <br></br>

            </p>
            <Link to="/Servicios" className="btn-home">Servicios</Link>
          </div>
        </div>

        <div className="feature-item2">
          {/* Imagen */}
          <img
            src={image3}
            alt="Imagen 3 de escritorio"
            className="image-desktop"
            data-aos="fade-down"
          />
          {/* Texto */}
          <div className="text-content" data-aos="fade-right">
            <p>
              En KAIZEN, creemos que contar con una gestión efectiva de recursos humanos no solo es una ventaja, sino una necesidad para llevar tu negocio al siguiente nivel.
              <br></br>
              <br></br>
            </p>
            <Link to="/Contacto" className="btn-home">Contáctanos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
