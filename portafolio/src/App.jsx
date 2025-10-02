import React, { useState } from 'react';
import Init from "./components/Init.jsx";
import ProfileCard from './components/ProfileCard.jsx';
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import AboutModal from './components/AboutModal.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ContactForm from './components/ContactForm.jsx';
import My from "./assets/my.png";
import './styles/App.css';

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsAboutModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <>
      <Background/>
      <Header/>

      <div className="principal-container">
        <div className="init-box">
          <Init />
        </div>

        <div className="personal-card" id='about-me'>
          <h2 className='title-container'>About me</h2>
          <ProfileCard
            name="Genser Catalán"
            title="Software Engineer"
            handle="genserdev"
            status="Online"
            contactText="About me"
            avatarUrl={My}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={handleContactClick}
          />
        </div>
      </div>

      <div className="title-container" id='projects'>
        <h2>Projects</h2>
        <ProjectsGrid />
      </div>

      <div className="title-container" id='experience'>
        <h2>Experience</h2>
        <ExperienceTimeline />
      </div>

      <div className="title-container" id='contact-me'>
        <h2>Contact me</h2>
        <ContactForm />
      </div>

      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}

export default App;