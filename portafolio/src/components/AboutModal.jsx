import '../styles/AboutModal.css';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="about-content">
          <div className="about-header">
            <h2>About Me</h2>
          </div>
          
          <div className="about-body">
            <p>
              ¡Hola! Soy Genser Catalán, un apasionado Software Engineer con experiencia 
              en desarrollo web moderno. Me especializo en crear experiencias digitales 
              innovadoras y funcionales.
            </p>
            
            <div className="skills-section">
              <h3>Tecnologías</h3>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">Javascript</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
            
            <div className="interests-section">
              <h3>Intereses</h3>
              <p>
                Cuando no estoy programando, difruto de escuchar musica, ver series, 
                peliculas, leer libros y aprender sobre nuevas tecnologías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;