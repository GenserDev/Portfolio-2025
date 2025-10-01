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
      description: 'Formación en desarrollo de software, bases de datos, algoritmos y estructuras de datos. Participación en proyectos de desarrollo web.',
      icon: '🎓',
      technologies: ['Java', 'Python', 'PostgreSQL', 'Javascript', "React", "Vue", "Node.js", "Express"]
    },
    {
      id: 2,
      type: 'work',
      title: 'GS Stock',
      company: 'Comercializadora e importadora',
      period: 'Enero 2025 - Julio 2025',
      description: 'Lideré un equipo de 3 desarrolladores implementando metodología Scrum para desarrollar un sistema,integral de gestión empresarial con módulos de inventario, ventas, clientes y procesamiento de, pagos/devoluciones.',
      icon: '💼',
      technologies: ['Vue JS', 'Express JS', 'PostgreSQL', "Docker", "AWS", "Cloudflare", "HTML", "CSS", "Javascript"]
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