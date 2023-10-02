
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei";

import EyeSpinner from "./EyeSpinner";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const ScrollSpinners = () => {

    return(
      <>
      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", left: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner direction="left"></EyeSpinner>
        <Environment preset='city'></Environment>
      </Canvas>

      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", right: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner direction="right"></EyeSpinner>
        <Environment preset='city'></Environment>
      </Canvas>  
      </>   
    )
}

export default ScrollSpinners;