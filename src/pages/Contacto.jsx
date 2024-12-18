import React, { useState } from 'react';
import '../styles/Contacto.css'; // Asegúrate de importar el archivo CSS

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

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
    const message = encodeURIComponent(
      'Me gustaría obtener información de su servicio Kaizen.'
    );
    const phoneNumber = '5210000000000'; // Reemplaza con el número de teléfono con código internacional
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
      
    </div>
  );
};

export default Contacto;