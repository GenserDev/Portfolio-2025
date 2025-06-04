import Spline from '@splinetool/react-spline';
import '../styles/Background.css'; 

export default function Background() {
  return (
    <div className='background'>
      <Spline className='spline-background' scene="https://prod.spline.design/2RWWLIXc9tDqzFhz/scene.splinecode" />
    </div>
  );
}
