import './App.css';
import Microphone from './models/microphone/Astronaut.glb' ;
import '@google/model-viewer';


function App() {
  return (
    <model-viewer
    src={Microphone}
    alt='model name'
    ar
    loading='lazy'
    camera-controls
    autoplay
    >
  </model-viewer>
  );
}

export default App;
