
import { Canvas } from "@react-three/fiber"
import { Environment, Box } from "@react-three/drei";

import EyeSpinner from "./EyeSpinner";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const ScrollSpinners = () => {
    return(
      <div style={{pointerEvents: "none", height: "100%", width: "100%" , position: "fixed", top: 0, left: 0}}>
        <Canvas style={{pointerEvents: "none"}}>
          <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
        </Canvas>
      {/* <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", left: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
        
      </Canvas> */}

      {/* <Canvas style={{pointerEvents: "none", position:"fixed", top: "-500px", left: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner xOffset={0.75} yOffset={-1}  direction="left"></EyeSpinner>
        <Environment preset='city'></Environment>
      </Canvas> */}

      {/* <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", right: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner xOffset={-0.75} yOffset={1} direction="right"></EyeSpinner>
        <Environment preset='city'></Environment>
      </Canvas>   */}

      {/* <Canvas style={{pointerEvents: "none", position:"fixed", top: "-500px", right: "-500px", width: "1000px", height: "1000px"}}>
        <EyeSpinner xOffset={-0.75} yOffset={-1} direction="right"></EyeSpinner>
        <Environment preset='city'></Environment>
      </Canvas>   */}
      </div>   
    )
}

export default ScrollSpinners;