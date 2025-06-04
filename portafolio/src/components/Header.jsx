import "../styles/Header.css";

function Header(){
    return(
        <nav className="header-container">
            <a className="navegation" href="#projects">Projects</a>
            <a className="navegation" href="#experience">Experience</a>
            <a className="navegation" href="#contact-me">Contact me</a>
        </nav>
    )
} 

export default Header;