import React, { useState } from 'react';
import '../styles/Servicios.css';
import KaizenLogo from '../assets/images/Kaizen.png';
import { FaLeaf, FaWhatsapp } from 'react-icons/fa';

const Servicios = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Me gustaría obtener información de su servicio Kaizen.');
    const phoneNumber = '523345195927';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const serviciosData = [
    {
      title: 'Atracción de Talento',
      content: [
        'Definición de perfiles: Te ayudamos a identificar las habilidades y competencias que tu negocio o empresa necesitan en cada puesto.',
        'Búsqueda de talento: Utilizamos diferentes herramientas y redes para encontrar candidatos cualificados.',
        'Evaluación de candidatos: Realizamos entrevistas, pruebas y evaluaciones para seleccionar a los mejores candidatos.',
        'Onboarding: Diseñamos y ejecutamos procesos de incorporación para tus nuevos colaboradores.',
      ],
    },
    {
      title: 'Desarrollo Organizacional',
      content: [
        'Diseño de estructura organizacional: Llevamos a tu negocio o empresa al siguiente nivel. Creamos tu organigrama, identificamos y definimos roles y responsabilidades.',
        'Desarrollo de cultura organizacional: Elaboramos estrategias para fomentar un ambiente de trabajo positivo y productivo.',
        'Planificación de la sucesión: Identificamos y desarrollamos futuros líderes dentro de tu negocio o empresa.',
        'Estudio de salarios: Analizamos el mercado laboral para establecer parámetros salariales y hacer competitivo a tu negocio o empresa.',
      ],
    },
    {
      title: 'Gestión de Desempeño',
      content: [
        'Diseño de sistemas de evaluación del desempeño: Creamos herramientas para medir y promover el rendimiento de tus colaboradores.',
        'Desarrollo de planes de mejora continua: Ayudamos a los colaboradores a identificar áreas de oportunidad y establecer metas alcanzables.',
      ],
    },
    {
      title: 'Consultoría en Recursos Humanos',
      content: [
        'Diagnóstico organizacional: Evaluamos la salud del recurso humano de tu negocio o empresa.',
        'Asesoramiento estratégico: Proporcionamos recomendaciones para mejorar las prácticas con relación al capital humano.',
      ],
    },
  ];

  return (
    <div className="servicios-container">
      <div className="servicios-header">
        <h1>Servicios</h1>
        <hr className="separator" />
        <p className='textServiciosHeader'>
          Impulsa el crecimiento de tu empresa con soluciones en Recursos Humanos a tu medida. <br />
          En KAIZEN, nos especializamos en brindar apoyo estratégico a microempresas, Pymes y emprendedores,
          ayudándote a optimizar tus recursos humanos y fortalecer tus departamentos clave. Desde la creación de
          perfiles de puesto y organigramas hasta el desarrollo de procesos y formatos personalizados,
          trabajamos contigo para estructurar una base sólida que potencie el éxito de tu negocio.
        </p>
      </div>
      {serviciosData.map((servicio, index) => (
        <div
          key={index}
          className={`servicio ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleContent(index)}
        >
          <div className="servicio-title">
            <FaLeaf className="icon-leaf" /> {servicio.title}
          </div>
          <div className={`servicio-content ${activeIndex === index ? 'expanded' : ''}`}>
            <ul>
              {servicio.content.map((paragraph, idx) => {
                const [boldText, normalText] = paragraph.split(':');
                return (
                  <li key={idx}>
                    <strong>{boldText}:</strong>
                    {normalText}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    
      <button onClick={handleWhatsApp} className="btn-whatsapp">
        <FaWhatsapp className="whatsapp-icon" /> 
        <span className="whatsapp-text">Contáctanos por WhatsApp</span>
      </button>
      <div className="servicios-logo">
        <img src={KaizenLogo} alt="Portada de Servicios" className="servicios-portada" />
      </div>
    </div>
  );
};

export default Servicios;
