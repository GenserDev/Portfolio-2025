import Spline from '@splinetool/react-spline';
import Init from "./components/Init.jsx";
import ProfileCard from './components/ProfileCard.jsx';
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import My from "./assets/My.png";
import './styles/App.css';


function App() {
  return (
    <>
      <Background/>
      <Header/>

      <div className="principal-container">

        <div className="init-box">
          <Init />
        </div>

        <div className="personal-card">
          <ProfileCard
          name="Genser Catalán"
          title="Software Engineer"
          handle="genserdev"
          status="Online"
          contactText="About me"
          avatarUrl={My}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />

        </div>

      </div>

      <div className="projects-container" id='projects'>
        <h2>Projects</h2>
      </div>

      <div className="experience-container" id='experience'>
        <h2>Experience</h2>
      </div>

      <div className="contact-container" id='contact-me'>
        <h2>Contact me</h2>
      </div>
    </>
  );
}

export default App;

// <div className="spline-blox">
//   {/* <Spline className='d3-objects' scene="https://prod.spline.design/DrgnX-habZmzrU6w/scene.splinecode" /> */}
// </div>
