
import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import EyeSpinner from "./EyeSpinner";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var target = new Vector3();

var mouseX = 0, mouseY = 0;
var mouse = {x: 0, y: 0};
// Thank you for my boi:
// https://sketchfab.com/3d-models/live-spinner-d08700291fce490ea0103943b1e2101e
const ScrollSpinners = () => {
    const gltf = useGLTF("/3d/LiveSpinnerLeftEyes.glb");
    const leftScene = gltf.scene.clone();
    const rightScene = gltf.scene.clone();
    const leftMeshRef = useRef<THREE.Mesh>();
    const rightMeshRef = useRef<THREE.Mesh>();


    useEffect(() => {
      document.body.addEventListener("wheel", (e) => {
        console.log("scrolling");
        if (!leftMeshRef.current || !rightMeshRef.current) return;
        leftMeshRef.current.rotation.y -= e.deltaY*0.005;
        rightMeshRef.current.rotation.y += e.deltaY*0.005;
      })
      document.body.addEventListener("mousemove", (e) => {
        if (!leftMeshRef.current || !rightMeshRef.current) return;
        
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        target.x = ( mouseX );
        target.y = ( - mouseY );
        
        target.z = 1;
        // leftMeshRef.current.children[2].lookAt(target);
        // console.log(mouseX, mouseY);
      });
    },[])

    return(
      <>
      <Canvas  style={{pointerEvents: "none", position:"fixed", bottom: "-500px", left: "-500px", width: "1000px", height: "1000px"}}>
        <group>
          <primitive ref={leftMeshRef} rotation={[degToRad(90),0,0]} object={leftScene}></primitive>
        </group>
        <GizmoHelper
          alignment="top-right" // widget alignment within scene
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper>
        <Environment preset='city'></Environment>
      </Canvas>

      <Canvas style={{pointerEvents: "none", position:"fixed", bottom: "-500px", right: "-500px", width: "1000px", height: "1000px"}}>
          <primitive ref={rightMeshRef} visible={false} rotation={[degToRad(90),0,0]} object={rightScene}></primitive>
          <EyeSpinner></EyeSpinner>
        <Environment preset='city'></Environment>
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>  
      </>   
    )
}

export default ScrollSpinners;