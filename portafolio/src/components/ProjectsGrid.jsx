import React from 'react';
import calculadora from "../assets/projects/calculadora.png";
import memory from "../assets/projects/memory.png";
import crud from "../assets/projects/crud.png";
import webchat from "../assets/projects/webchat.png";
import pokemon from "../assets/projects/pokemon.png";
import genserstock from "../assets/projects/genserstock.png";
import '../styles/ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
  {
    id: 1,
    title: 'Game Inventory',
    description: 'Plataforma para controlar el invetario de una tienda de videojuegos utilizando un CRUD.',
    image: crud,
    technologies: ['React', 'Node.js', 'PostgreSQL', "CSS"],
    githubUrl: 'https://github.com/GenserDev/game-shop-crud',
    size: 'large'
  },
  {
    id: 2,
    title: 'Pokedex',
    description: 'Aplicacion que permite la visualizacion de todos los pokemones de primera generacion por medio de su API.',
    image: pokemon, 
    technologies: ['HTML', 'CSS', 'Javascript'],
    githubUrl: 'https://github.com/GenserDev/Poke-Guide',
    demo: 'https://genserdev.space/Poke-Guide/',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Calculadora', 
    description: 'Calculadora con las funciones de operaciones basicas y manejo de errores.',
    image: calculadora,
    technologies: ['React', "CSS"],
    githubUrl: 'https://github.com/GenserDev/Calculator',
    demo: 'https://github.com/GenserDev/game-shop-crud',
    size: 'medium'
  },
  {
    id: 4,
    title: 'Memory Game', 
    description: 'Juego de memoria con temática de lenguajes y frameworks de programacion',
    image: memory, 
    technologies: ['React', 'CSS'],
    githubUrl: 'https://github.com/GenserDev/React-Memory',
    demo: 'https://23401.genserdev.space/dist/',
    size: 'medium'
  },
  {
    id: 5,
    title: 'WebChat',
    description: "Sitio web conectado a una API para el menejo de mensajes en tiempo real",
    image: webchat, 
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: 'https://github.com/GenserDev/Web-Chat',
    demo: 'https://genserdev.space/Web-Chat/',
    size: 'small'
  },
  {
    id: 6,
    title: 'GS Stock',
    description: 'Software a la medida para el control de ventas e inventario para una empresa distribuidora de calzado de dama.',
    image: genserstock, 
    technologies: ['Vue', 'Express', "Node.js", 'PostgreSQL', "Socket.io"],
    githubUrl: 'https://github.com/JosFer720/GS-Stock-y-Facturacion-Frontend',
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
              
              {/* Contenedor para los botones */}
              <div className="project-buttons">
                <button 
                  className="github-btn"
                  onClick={() => handleGithubClick(project.githubUrl)}
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                  </svg>
                  GitHub
                </button>

                {project.demo && (
                  <button
                    className="demo-btn"
                    onClick={() => window.open(project.demo, '_blank')}
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    🔗 Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

export default ProjectsGrid;