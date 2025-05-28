import Spline from '@splinetool/react-spline';
import Init from "./components/Init.jsx";
import './styles/App.css';
import"./styles/Init.css";

function App() {

  return (
    <>
    <div className='backgorund'>
      <Spline className='spline-background' scene="https://prod.spline.design/XohZSknIJTHgiALF/scene.splinecode" />
    </div>
    <Init/>
    </>
  )
}

export default App
