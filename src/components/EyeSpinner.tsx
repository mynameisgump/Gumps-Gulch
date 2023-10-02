import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { useEffect } from "react";
import * as THREE from "three";


var mouseX = 0, mouseY = 0;



const EyeSpinner = () => {
    const gltf = useGLTF("/3d/LiveSpinnerLeftEyes.glb");
    const gltfClone = gltf.scene.clone();
    const spinnerRef = useRef<THREE.Mesh>();
    const viewport = useThree((state) => state.viewport)

    useEffect(() => {
        document.body.addEventListener("wheel", (e) => {
            console.log("scrolling");
            if (!spinnerRef.current) return;
            spinnerRef.current.rotation.y += e.deltaY*0.005;
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        })
        document.body.addEventListener("mousemove", (e) => {          
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    },[])

    useEffect(() => {
        if (spinnerRef.current){
            (spinnerRef.current.children[4] as THREE.Mesh).geometry.applyMatrix4( new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler( 3*Math.PI/2, Math.PI, 0 ) ) );
        }
    }, [spinnerRef?.current?.children[4]])

    useFrame(({ mouse, viewport }) => {
        console.log("Mousey", mouse)
        const x = (mouseX * viewport.width) / 2.5
        const y = (mouseY * viewport.height) / 2.5
        if (!spinnerRef.current) return;
        console.log(spinnerRef)
        spinnerRef.current.children[4].lookAt(x, y, 10)
        // spinnerRef.current.material.color.lerp(hovered ? lime : black, 0.05)
    })
    
    return (
        <primitive ref={spinnerRef} rotation={[degToRad(90),0,0]} object={gltf.scene.clone()}></primitive>
    )
};

export default EyeSpinner