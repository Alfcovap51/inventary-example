import "./App.css";
import Microphone from "./models/microphone/Astronaut.glb";
import "@google/model-viewer";

function App() {
  return (
    <div class="model-viewer">
      <model-viewer
        src={Microphone}
        alt="model name"
        ar
        ar-modes="webxr scene-viewer quick-look"
        loading="lazy"
        camera-controls
        autoplay
      ></model-viewer>
    </div>
  );
}

export default App;
