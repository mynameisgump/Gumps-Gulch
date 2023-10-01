
import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Mesh } from "three";
import { LiveSpinner } from "./LiveSpinner";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const TestCanvas = () => {
    const leftGltf = useGLTF("/3d/LiveSpinnerLeft.glb");
    const rightGltf = useGLTF("/3d/LiveSpinnerRight.glb");
    const leftMeshRef = useRef<Mesh>();
    const rightMeshRef = useRef<Mesh>();


    useEffect(() => {
      document.body.addEventListener("wheel", (e) => {
        console.log("scrolling");
        if (!leftMeshRef.current || !rightMeshRef.current) return;
        leftMeshRef.current.rotation.y -= e.deltaY*0.005;
        rightMeshRef.current.rotation.y += e.deltaY*0.005;

      })
      console.log("mounted");
    },[])

    return(
      <>
      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", left: "-500px", width: "1000px", height: "1000px", pointerEvents: "none"}}>
        <primitive ref={leftMeshRef} rotation={[degToRad(90),0,0]} object={leftGltf.scene}></primitive>
        <Environment preset='city'></Environment>
      </Canvas>

      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", right: "-500px", width: "1000px", height: "1000px", pointerEvents: "none"}}>
      {/* <primitive ref={meshRef} rotation={[degToRad(90),0,0]} object={scene}></primitive> */}
  
          {/* <LiveSpinner ></LiveSpinner> */}
          <primitive ref={rightMeshRef} rotation={[degToRad(90),0,0]} object={rightGltf.scene}></primitive>
        <Environment preset='city'></Environment>
      </Canvas>  
      </>   
    )
}

export default TestCanvas;