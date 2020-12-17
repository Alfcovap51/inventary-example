import Microphone from "../models/microphone/Astronaut.glb";
import "@google/model-viewer";

function ModelViewer(){
    return (
        <model-viewer
        src={Microphone}
        alt="model name"
        ar
        ar-modes="webxr scene-viewer quick-look"
        loading="lazy"
        camera-controls
        autoplay
      ></model-viewer>
    );
}

export default ModelViewer;