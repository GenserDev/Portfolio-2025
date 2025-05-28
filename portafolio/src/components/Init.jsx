import me from "../assets/me.png";

function Init (){
    return(
        <div className="init-container">
            <img className="me-image" src= {me} alt="Genser" />
            <h1 className="name">Hi, I'm Genser Catalan</h1>
            <h1 className="rol">Full Stack Developer</h1>
            <button className="contact-media">Linkedin</button>
            <button className="contact-media">Github</button>
            <button className="contact-media">CV</button>
            <button className="contact-media">Email</button>
        </div>

    )
}

export default Init;