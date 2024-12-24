import React, { useState, useEffect } from 'react';
import '../styles/Contacto.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaLeaf, FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Kaizen.talent.rrhh@gmail.com?subject=Consulta desde la página&body=Nombre: ${formData.nombre}%0ACargo: ${formData.cargo}%0ACorreo: ${formData.correo}%0AMensaje: ${formData.mensaje}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Me gustaría obtener información de su servicio Kaizen.');
    const phoneNumber = '523345195927';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="contacto-container">
      <h1>
        <FaLeaf /> Contáctanos
      </h1>
      <form onSubmit={handleSubmit} className="contacto-form" data-aos="zoom-in">
        <label htmlFor="nombre">¿Cual es tu Nombre?</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <label htmlFor="cargo">¿Cual es tu cargo?</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          required
        />

        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Escríbenos tu mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn-enviar">
          <FaLeaf /> Enviar
        </button>
      </form>

      <button onClick={handleWhatsApp} className="btn-whatsapp" data-aos="fade-right">
        <FaWhatsapp className="whatsapp-icon" /> 
        <span className="whatsapp-text">Contáctanos por WhatsApp</span>
      </button>

      <div className="datos-container" data-aos="fade-up">
        <h2>Datos de Kaizen</h2>
        <p><strong>Teléfono:</strong> +52 334 5195 927</p>
        <p><strong>Correo:</strong> Kaizen.talent.rrhh@gmail.com</p>
        <p><strong>Dirección:</strong> Guadalajara, Jalisco, México</p>
        <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default Contacto;
