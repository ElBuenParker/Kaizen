import React, { useState } from 'react';
import '../styles/Servicios.css';

const Servicios = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const serviciosData = [
    { title: 'Servicio 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Servicio 2', content: 'Nunc volutpat risus at ligula consequat, a hendrerit nunc iaculis.' },
    { title: 'Servicio 3', content: 'Curabitur laoreet, purus a auctor ullamcorper, tortor libero efficitur justo.' }
  ];

  return (
    <div className="servicios-container">
      <h1>Servicios</h1>
      <div className='servicios-descripcion'>
        <p>Impulsa el crecimiento de tu empresa con soluciones en Recursos Humanos a tu medida. <br></br>
        En KAIZEN Talent, nos especializamos en brindar apoyo estratégico a microempresas, Pymes y emprendedores, ayudándote a optimizar tus recursos humanos y fortalecer tus departamentos clave. Desde la creación de 
        perfiles de puesto y organigramas hasta el desarrollo de procesos y formatos personalizados, trabajamos contigo para estructurar una base sólida que potencie el éxito de tu negocio.
        <br></br>
        <br></br>

        </p>
      </div>
      {serviciosData.map((servicio, index) => (
        <div
          key={index}
          className={`servicio ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleContent(index)}
        >
          <div className="servicio-title">{servicio.title}</div>
          <div className={`servicio-content ${activeIndex === index ? 'expanded' : ''}`}>
            <p>{servicio.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
