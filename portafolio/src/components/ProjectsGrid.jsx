import React from 'react';
import '../styles/ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras y sistema de pagos.',
      image: '/path/to/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/genserdev/ecommerce',
      size: 'large'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicación de gestión de tareas con autenticación y colaboración en tiempo real.',
      image: '/path/to/project2.jpg',
      technologies: ['Vue.js', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/genserdev/taskmanager',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con gráficos interactivos y pronósticos.',
      image: '/path/to/project3.jpg',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      githubUrl: 'https://github.com/genserdev/weather',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con gráficos interactivos y pronósticos.',
      image: '/path/to/project3.jpg',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      githubUrl: 'https://github.com/genserdev/weather',
      size: 'medium'
    },
    {
      id: 5,
      title: 'Blog CMS',
      description: 'Sistema de gestión de contenido para blogs con editor markdown.',
      image: '/path/to/project4.jpg',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/genserdev/blog-cms',
      size: 'small'
    },
    {
      id: 6,
      title: 'Mobile Banking UI',
      description: 'Interfaz moderna para aplicación bancaria móvil.',
      image: '/path/to/project5.jpg',
      technologies: ['React Native', 'Redux', 'Figma'],
      githubUrl: 'https://github.com/genserdev/banking-ui',
      size: 'small'
    }
  ];

  const handleGithubClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className={`project-card ${project.size}`}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <button 
                  className="github-btn"
                  onClick={() => handleGithubClick(project.githubUrl)}
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;