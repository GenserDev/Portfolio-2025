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
            <button className="contact-media">Linkedin <img src={linkdin} alt="linkdin" /></button>
            <button className="contact-media">Github <img src={github} alt="github" /></button>
            <button className="contact-media">CV <img src={cv} alt="download cv" /></button>
            <button className="contact-media">Email <img src={email} alt="email" /></button>
        </div>

    )
}

export default Init;