import { useEffect } from "react";
import "../styles/Header.css";

function Header() {
  // Función para manejar el scroll suave
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, 
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navegation");
    
    navLinks.forEach(link => {
      link.addEventListener("click", handleSmoothScroll);
    });
    
    // Limpiar event listeners al desmontar
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="header-container">
      <a className="navegation" href="#about-me">About Me</a>
      <a className="navegation" href="#projects">Projects</a>
      <a className="navegation" href="#experience">Experience</a>
      <a className="navegation" href="#contact-me">Contact me</a>
    </nav>
  );
}

export default Header;