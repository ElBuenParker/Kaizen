import React, { useState } from 'react';
import '../styles/Servicios.css';
import KaizenLogo from '../assets/images/Kaizen.png'
import { Link } from 'react-router-dom';


const Servicios = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const serviciosData = [
    {
      title: 'Atracción de Talento',
      content: [
        'Definición de perfiles: Te ayudamos a identificar las habilidades y competencias que tu negocio o empresa necesitan en cada puesto.',
        'Búsqueda de talento: Utilizamos diferentes herramientas y redes para encontrar candidatos cualificados.',
        'Evaluación de candidatos: Realizamos entrevistas, pruebas y evaluaciones para seleccionar a los mejores candidatos.',
        'Onboarding: Diseñamos y ejecutamos procesos de incorporación para tus nuevos colaboradores.'
      ]
    },
    {
      title: 'Desarrollo Organizacional',
      content: [
        'Diseño de estructura organizacional: Llevamos a tu negocio o empresa al siguiente nivel. Creamos tu organigrama, identificamos y definimos roles y responsabilidades.',
        'Desarrollo de cultura organizacional: Elaboramos estrategias para fomentar un ambiente de trabajo positivo y productivo.',
        'Planificación de la sucesión: Identificamos y desarrollamos futuros líderes dentro de tu negocio o empresa.',
        'Estudio de salarios: Analizamos el mercado laboral para establecer parámetros salariales y hacer competitivo a tu negocio o empresa.'
      ]
    },
    {
      title: 'Gestión de Desempeño',
      content: [
        'Diseño de sistemas de evaluación del desempeño: Creamos herramientas para medir y promover el rendimiento de tus colaboradores.',
        'Desarrollo de planes de mejora continua: Ayudamos a los colaboradores a identificar áreas de oportunidad y establecer metas alcanzables.'
      ]
    },
    {
      title: 'Consultoría en Recursos Humanos',
      content: [
        'Diagnóstico organizacional: Evaluamos la salud del recurso humano de tu negocio o empresa.',
        'Asesoramiento estratégico: Proporcionar recomendaciones para mejorar las prácticas con relación al capital humano.'
      ]
    }
  ];

  return (
    <div className="servicios-container">
      <div className="servicios-header">
        <img src={KaizenLogo} alt="Portada de Servicios" className="servicios-portada" />
      </div>
      <h1>Servicios</h1>
      <div className='servicios-descripcion'>
        <p>
          Impulsa el crecimiento de tu empresa con soluciones en Recursos Humanos a tu medida. <br />
          En KAIZEN, nos especializamos en brindar apoyo estratégico a microempresas, Pymes y emprendedores, ayudándote a optimizar tus recursos humanos y fortalecer tus departamentos clave. Desde la creación de
          perfiles de puesto y organigramas hasta el desarrollo de procesos y formatos personalizados, trabajamos contigo para estructurar una base sólida que potencie el éxito de tu negocio.
          <br></br>
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
            <ul>
              {servicio.content.map((paragraph, idx) => (
                <li key={idx}>{paragraph}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Botón al final */}
      <div className="button-container">
        <Link to="/Contacto" className="servicios-btn" >Contactanos</Link>

      </div>
    </div>
  );
};

export default Servicios;
