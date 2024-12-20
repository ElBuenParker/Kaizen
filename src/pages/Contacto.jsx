import React, { useState, useEffect } from 'react';
import '../styles/Contacto.css';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa la biblioteca AOS

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con duración de animación
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
    const mailtoLink = `mailto:xxxxx@gmail.com?subject=Consulta desde la página&body=Nombre: ${formData.nombre}%0ACorreo: ${formData.correo}%0AMensaje: ${formData.mensaje}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Me gustaría obtener información de su servicio Kaizen.');
    const phoneNumber = '5210000000000';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="contacto-form">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
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

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>

      <button onClick={handleWhatsApp} className="btn-whatsapp">
        Contactar por WhatsApp
      </button>

      <div className="datos-container" data-aos="fade-up">
        <h2>Datos de Kaizen</h2>
        <p><strong>Teléfono:</strong> +52 1 000 000 0000</p>
        <p><strong>Correo:</strong> contacto@kaizen.com</p>
        <p><strong>Dirección:</strong> Calle Ejemplo #123, Guadalajara, Jalisco</p>
        <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default Contacto;
