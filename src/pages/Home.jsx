// src/components/Home.jsx
import React, { useState } from 'react';
import '../styles/Home.css';

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
      <div className='image-main'>
        <img src={image1} alt="Imagen 1 de escritorio" className="image-desktop-main" />
      </div>
      <div className="features">
        <div className="feature-item">
          {/* Versión de escritorio */}
          <img src={image1} alt="Imagen 1 de escritorio" className="image-desktop" />
          
          {/* Versión tarjeta para móvil */}
          <div
            className={`card ${flipped[0] ? 'flipped' : ''}`}
            onClick={() => handleFlip(0)}
          >
            <div className="card-front">
              <img src={image1} alt="Imagen 1 de tarjeta" />
            </div>
            <div className="card-back">
              <h3>Feature 1</h3>
              <p>This is the description of the first feature.</p>
              <button>Ir</button>
            </div>
          </div>

          <div className="feature-item-text">
            <h3>Feature 1</h3>
            <p>This is the description of the first feature. The image is on the left and the text is on the right.</p>
          </div>
        </div>

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
              <h3>Feature 2</h3>
              <p>This is the description of the second feature.</p>
              <button>Ir</button>
            </div>
          </div>

          <div className="feature-item-text">
            <h3>Feature 2</h3>
            <p>This is the description of the second feature. The image is on the right and the text is on the left.</p>
          </div>
        </div>

        <div className="feature-item">
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
              <h3>Feature 3</h3>
              <p>This is the description of the third feature.</p>
              <button>Ir</button>
            </div>
          </div>

          <div className="feature-item-text">
            <h3>Feature 3</h3>
            <p>This is the description of the third feature. The image is on the left and the text is on the right.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
