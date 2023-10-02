import { Clone, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { useEffect } from "react";
import * as THREE from "three";


var mouseX = 0, mouseY = 0;

type EyeSpinnerProps = {
    direction: "left" | "right";
}
const maxVel = 2;
const minVel = -2;
let velocity = 0;
let friction = 0.005;

const EyeSpinner = ({direction}: EyeSpinnerProps) => {
    const gltf = useGLTF("/3d/LiveSpinnerLeftEyes.glb");
    const spinnerRef = useRef<THREE.Group>(null);

    

    useEffect(() => {
        document.body.addEventListener("wheel", (e) => {
            // console.log(e.deltaY)
            if (!spinnerRef.current) return;
            if (direction == "left") {
                if (velocity > minVel && velocity < maxVel){
                    velocity += -e.deltaY*0.005
                }
            }
            else if (direction == "right") {
                if (velocity > minVel && velocity < maxVel){
                    velocity += -e.deltaY*0.005
                }
            }
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        })
        document.body.addEventListener("mousemove", (e) => {          
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    },[])

    useEffect(() => {
        console.log("Triggered")
        if (spinnerRef.current){
            (spinnerRef.current.children[4] as THREE.Mesh).geometry.applyMatrix4( new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler( 3*Math.PI/2, Math.PI, 0 ) ) );
            (spinnerRef.current.children[5] as THREE.Mesh).geometry.applyMatrix4( new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler( 3*Math.PI/2, Math.PI, 0 ) ) );
        }
    }, [])

    useFrame(({ mouse, viewport }) => {
        const x = (mouseX * viewport.width) / 2.5
        const y = (mouseY * viewport.height) / 2.5
        if (!spinnerRef.current) return;
        spinnerRef.current.children[4].lookAt(x, y, 10)
        spinnerRef.current.children[5].lookAt(x, y, 10)
        if (direction == "left") {            
            spinnerRef.current.rotation.y += 0.05 * velocity;
            if (velocity > 0) {
                velocity -= friction;
            }
            else if (velocity < 0) {
                velocity += friction;
            }
        }
        else if (direction == "right") {
            console.log(velocity)
            spinnerRef.current.rotation.y -= 0.05 * velocity;
            if (velocity > 0) {
                velocity -= friction;
            }
            else if (velocity < 0) {
                velocity += friction;
            }
        }

    });
     
    return (
        <Clone deep={true} ref={spinnerRef} rotation={[degToRad(90),0,0]} object={gltf.scene}></Clone>
    )
};

export default EyeSpinner