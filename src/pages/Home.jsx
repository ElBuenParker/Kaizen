// src/components/Home.jsx
import React, { useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

// Importa las imágenes
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

function Home() {
  // Estado para manejar si la tarjeta ha sido girada o no
  const [flipped, setFlipped] = useState([false, false, false]);

  // Función para alternar el giro de cada tarjeta
  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="home-container">
      {/* Imagen de Main*/}
      <div className='image-main'>
        <img src={image1} alt="Imagen 1 de escritorio" className="image-desktop-main" />
      </div>
      {/* Texto de Main*/}
      <div className='txt-main'>
        <p>KAIZEN es tu aliado estratégico en la optimización de recursos humanos, enfocado en microempresas, Pymes y emprendedores. Nuestra misión es ayudarte a estructurar y fortalecer tus departamentos clave, desde la creación de perfiles de puesto y organigramas hasta el desarrollo de procesos y formatos personalizados.</p>
        
      </div>
      <div className="features">
     

        <div className="feature-item">
          {/* Versión de escritorio */}
          <img src={image2} alt="Imagen 2 de escritorio" className="image-desktop" />
          
          {/* Versión tarjeta para móvil */}
          <div
            className={`card ${flipped[1] ? 'flipped' : ''}`}
            onClick={() => handleFlip(1)}
          >
            <div className="card-front">
              <img src={image2} alt="Imagen 2 de tarjeta" />
            </div>
            <div className="card-back">
              <p>Contamos con una amplia experiencia en evaluación de colaboradores, satisfacción laboral, detección de necesidades de capacitación y atracción de talento, ofrecemos soluciones diseñadas para impulsar el crecimiento de tu empresa, siempre adaptándonos a tu presupuesto.
              <br></br>

<btn>
  <Link to="/Servicios" className="btn-home" >Servicios</Link>
</btn>
              </p>
              
            </div>
          </div>

          <div className="feature-item-text">
            <p> Contamos con una amplia experiencia en evaluación de colaboradores, satisfacción laboral, detección de necesidades de capacitación y atracción de talento, ofrecemos soluciones diseñadas para impulsar el crecimiento de tu empresa, siempre adaptándonos a tu presupuesto.
              <br></br>
              <br></br>

              <btn>
                <Link to="/Servicios" className="btn-home" >Servicios</Link>
              </btn>
            </p>
            
          </div>
        </div>

        <div className="feature-item2">
          {/* Versión de escritorio */}
          <img src={image3} alt="Imagen 3 de escritorio" className="image-desktop" />
          
          {/* Versión tarjeta para móvil */}
          <div
            className={`card ${flipped[2] ? 'flipped' : ''}`}
            onClick={() => handleFlip(2)}
          >
            <div className="card-front">
              <img src={image3} alt="Imagen 3 de tarjeta" />
            </div>
            <div className="card-back">
              <p>En KAIZEN, creemos que contar con una gestión efectiva de recursos humanos no solo es una ventaja, sino una necesidad para llevar tu negocio al siguiente nivel.
              <br></br>
              <btn>
                <Link to="/Contacto" className="btn-home" >Contactanos</Link>
              </btn>
              </p>
              
            </div>
          </div>

          <div className="feature-item-text">
            <p>En KAIZEN, creemos que contar con una gestión efectiva de recursos humanos no solo es una ventaja, sino una necesidad para llevar tu negocio al siguiente nivel.
            <br></br>
            <br></br>

              <btn>
          <Link to="/Contacto" className="btn-home" >Contactanos</Link>
        </btn>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
