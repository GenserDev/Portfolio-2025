import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Crear el enlace mailto
      const subject = encodeURIComponent(formData.subject || 'Contacto desde Portfolio');
      const body = encodeURIComponent(
        `Hola Genser,\n\nMi nombre es ${formData.name}.\n\n${formData.message}\n\nSaludos,\n${formData.name}\n${formData.email}`
      );
      
      const mailtoLink = `mailto:genserdev@gmail.com?subject=${subject}&body=${body}`;
      
      // Abrir cliente de correo
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-card">
        <div className="contact-header">
          <h2>¡Hablemos!</h2>
          <p>¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="¿De qué quieres hablar?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Cuéntame sobre tu proyecto o idea..."
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
                Enviar Mensaje
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ¡Perfecto! Se abrirá tu cliente de correo para enviar el mensaje.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              Hubo un error. Por favor, intenta de nuevo.
            </div>
          )}
        </form>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>genserdev@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>Guatemala City, Guatemala</span>
          </div>
          <div className="contact-item">
            <span className="icon">💼</span>
            <span>Disponible para proyectos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;