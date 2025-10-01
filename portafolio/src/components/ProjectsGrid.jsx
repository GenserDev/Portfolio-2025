import memory from "../assets/projects/memory.png";
import crud from "../assets/projects/crud.png";
import webchat from "../assets/projects/webchat.png";
import genserstock from "../assets/projects/genserstock.png";
import github from "../assets/github-logo.png";
import '../styles/ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
  {
    id: 1,
    title: 'Game Inventory',
    description: 'Plataforma para controlar el inventario de una tienda de videojuegos utilizando un CRUD.',
    image: crud,
    technologies: ['React', 'Node.js', 'PostgreSQL', "CSS3", "Javascript", "HTML5"],
    githubUrl: 'https://github.com/GenserDev/game-shop-crud',
    size: 'large' 
  },
  {
    id: 2,
    title: 'Memory Game', 
    description: 'Juego de memoria con temática de lenguajes y frameworks de programación',
    image: memory, 
    technologies: ['React', "CSS3", "Javascript", "HTML5"],
    githubUrl: 'https://github.com/GenserDev/React-Memory',
    demo: 'https://23401.genserdev.space/dist/',
    size: 'small'
  },
  {
    id: 3,
    title: 'WebChat',
    description: "Sitio web conectado a una API para el manejo de mensajes en tiempo real",
    image: webchat, 
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: 'https://github.com/GenserDev/Web-Chat',
    demo: 'https://genserdev.space/Web-Chat/',
    size: 'small'
  },
  {
    id: 4,
    title: 'GS Stock',
    description: 'Software a la medida para el control de ventas e inventario para una empresa distribuidora de calzado de dama.',
    image: genserstock, 
    technologies: ['Vue', 'Express', "Node.js", 'PostgreSQL', "Docker", "CSS3", "Javascript", "HTML5"],
    githubUrl: 'https://github.com/JosFer720/GS-Stock-y-Facturacion-Frontend',
    size: 'medium' 
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
              

              <div className="project-buttons">
                <button 
                  className="github-btn"
                  onClick={() => handleGithubClick(project.githubUrl)}
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <img src={github} className="github-logo" alt="GitHub" />
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