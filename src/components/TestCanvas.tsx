
import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Mesh } from "three";


const TestCanvas = () => {
    const { scene } = useGLTF("/3d/LiveSpinner.glb");
    const meshRef = useRef<Mesh>();


    useEffect(() => {
      document.body.addEventListener("scroll", () => {
        console.log("scrolling");
        if (!meshRef.current) return;
        meshRef.current.rotation.y -= 0.01;
      })
      console.log("mounted");
    },[])

    return(
      <Canvas>
        <primitive ref={meshRef} rotation={[degToRad(90),0,0]} object={scene}></primitive>
        <Environment preset='city'></Environment>
      </Canvas>
    )
}

export default TestCanvas;