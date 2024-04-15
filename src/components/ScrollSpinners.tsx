
import { Canvas } from "@react-three/fiber"
import { Environment, OrthographicCamera } from "@react-three/drei";
import Spinnin from "./Spinnin";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const ScrollSpinners = () => {

    return(
      <div style={{pointerEvents: "none", height: "100%", width: "100%" , position: "fixed", top: 0, left: 0}} >
        <Canvas style={{pointerEvents: "none"}} >
          <OrthographicCamera zoom={100} makeDefault position={[0, 0, 100]} />
          <Environment preset='city'/>
          <Spinnin></Spinnin>
        </Canvas>
      </div>   
    )
}

export default ScrollSpinners;