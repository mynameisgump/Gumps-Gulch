
import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Mesh } from "three";

// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const TestCanvas = () => {
    const { scene } = useGLTF("/3d/LiveSpinner.glb");
    const meshRef = useRef<Mesh>();


    useEffect(() => {
      document.body.addEventListener("wheel", (e) => {
        console.log("scrolling");
        if (!meshRef.current) return;
        meshRef.current.rotation.y -= e.deltaY*0.005;
      })
      console.log("mounted");
    },[])

    return(
      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", left: "-500px", width: "1000px", height: "1000px", pointerEvents: "none"}}>
        <primitive ref={meshRef} rotation={[degToRad(90),0,0]} object={scene}></primitive>
        <Environment preset='city'></Environment>
      </Canvas>
    )
}

export default TestCanvas;