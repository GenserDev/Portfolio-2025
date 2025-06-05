import linkdin from "../assets/linkdin-logo.png";
import github from "../assets/github-logo.png";
import cv from "../assets/download.png";
import email from "../assets/email.png";
import "../styles/init.css"

function Init (){
    return(
        <div className="init-container">
            <h1 className="name">Hi, I'm Genser Catalan</h1>
            <h1 className="rol">Full Stack Developer</h1>
            <div className="contact-buttoms">
                <a className="contact-media" href="https://www.linkedin.com/in/genser-andre%C3%A9-catal%C3%A1n-espina-726613253/" target="_blank" rel="noopener noreferrer">
                Linkedin <img src={linkdin} alt="linkedin" />
                </a>

                <a className="contact-media" href="https://github.com/GenserDev" target="_blank" rel="noopener noreferrer">
                Github <img src={github} alt="github" />
                </a>

                <a className="contact-media" href="/ruta/al/cv.pdf" target="_blank" rel="noopener noreferrer">
                CV <img src={cv} alt="download cv" />
                </a>

                <a className="contact-media" href="mailto:genserdev@gmail.com">
                Email <img src={email} alt="email" />
                </a>
            </div>
        </div>

    )
}

export default Init;