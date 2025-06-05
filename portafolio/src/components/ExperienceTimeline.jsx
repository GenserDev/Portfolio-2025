import React from 'react';
import '../styles/ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Computer Science',
      company: 'Universidad del Valle de Guatemala',
      period: '2023 - 2027',
      description: 'Formación en desarrollo de software, bases de datos, algoritmos y estructuras de datos. Participación en proyectos de desarrollo web y aplicaciones móviles.',
      icon: '🎓',
      technologies: ['Java', 'Python', 'PostgreSQL', 'Javascript', "React", "Vue"]
    },
    {
      id: 2,
      type: 'work',
      title: 'Project Manager GS Stock',
      company: 'Comercializadora e importadora Genser',
      period: '2025 - Presente',
      description: 'Desarrollo de software a la medida para la gestion de ventas e inventario para una empresa distribuidora de calzado de dama para todos los departamentos de Guatemala',
      icon: '💼',
      technologies: ['Vue', 'Node.js', 'Express', 'PostgreSQL', "Socket.io", "CSS"]
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {experiences.map((exp, index) => (
        <div key={exp.id} className={`timeline-item ${exp.type} ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-icon">
              <span>{exp.icon}</span>
            </div>
            <div className="timeline-card">
              <div className="card-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <div className="card-body">
                <p>{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;