
import { Canvas, useThree } from "@react-three/fiber"
import { Environment, Box, OrthographicCamera, Center } from "@react-three/drei";

import EyeSpinner from "./EyeSpinner";
import Spinnin from "./Spinnin";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const ScrollSpinners = () => {
    // const { width, height } = useThree((state) => state.viewport)
    // const margin = 0.5;

    return(
      <div style={{pointerEvents: "none", height: "100%", width: "100%" , position: "fixed", top: 0, left: 0}} >
        <Canvas style={{pointerEvents: "none"}} >
          <OrthographicCamera zoom={100} makeDefault position={[0, 0, 100]} />
          <Environment preset='city'/>
          <Spinnin></Spinnin>
          {/* <Center bottom right position={[-width / 2 + margin, height / 2 - margin, 0]}>
            <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
          </Center> */}
        </Canvas>
      </div>   
    )
}

export default ScrollSpinners;