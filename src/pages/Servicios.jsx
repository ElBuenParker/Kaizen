import React, { useState } from 'react';
import '../styles/Servicios.css'; // Asegúrate de importar el archivo CSS

const Servicios = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Si el mismo índice se selecciona, se cierra
    } else {
      setActiveIndex(index); // Se abre el nuevo índice
    }
  };

  return (
    <div className="servicios-container">
      <h1>Servicios</h1>
      
      <div className="servicio">
        <button className="servicio-title" onClick={() => toggleContent(0)}>
          Servicio 1
        </button>
        {activeIndex === 0 && (
          <div className="servicio-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nisi urna.
            </p>
          </div>
        )}
      </div>

      <div className="servicio">
        <button className="servicio-title" onClick={() => toggleContent(1)}>
          Servicio 2
        </button>
        {activeIndex === 1 && (
          <div className="servicio-content">
            <p>
              Nunc volutpat risus at ligula consequat, a hendrerit nunc iaculis. Phasellus imperdiet.
            </p>
          </div>
        )}
      </div>

      <div className="servicio">
        <button className="servicio-title" onClick={() => toggleContent(2)}>
          Servicio 3
        </button>
        {activeIndex === 2 && (
          <div className="servicio-content">
            <p>
              Curabitur laoreet, purus a auctor ullamcorper, tortor libero efficitur justo, eget facilisis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Servicios;