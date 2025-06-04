import React from 'react';
import '../styles/ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Ingeniería en Sistemas',
      company: 'Universidad de Guatemala',
      period: '2020 - 2024',
      description: 'Formación en desarrollo de software, bases de datos, algoritmos y estructuras de datos. Participación en proyectos de desarrollo web y aplicaciones móviles.',
      icon: '🎓',
      technologies: ['Java', 'Python', 'SQL', 'C++']
    },
    {
      id: 2,
      type: 'work',
      title: 'Software Developer',
      company: 'Tech Solutions GT',
      period: '2023 - Presente',
      description: 'Desarrollo de aplicaciones web con React y Node.js. Colaboración en proyectos de comercio electrónico y sistemas de gestión. Implementación de APIs RESTful.',
      icon: '💼',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
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