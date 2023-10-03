import { Clone, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { useEffect } from "react";
import * as THREE from "three";

var mouseX = 0, mouseY = 0;

type EyeSpinnerProps = {
    direction: "left" | "right";
    xOffset: number;
    yOffset: number;
}

const maxVel = 20;
const minVel = maxVel*-1;
let velocity = 0;
let friction = 0.01;
let stopRange = 0.005;
let speed = 0.01;

const EyeSpinner = ({direction,xOffset,yOffset}: EyeSpinnerProps) => {
    const gltf = useGLTF("/3d/LiveSpinner.glb");
    const spinnerRef = useRef<THREE.Group>(null);

    useEffect(() => {
        document.body.addEventListener("wheel", (e) => {
            if (!spinnerRef.current) return;
            if (velocity > minVel && velocity < maxVel){
                const randVar = Math.random() * (1.5 - 0.75) + 0.75;
                velocity += (-e.deltaY*0.005)*randVar;
            }
            mouseX = ((e.clientX / window.innerWidth) * 2 - 1);
            mouseY = (-(e.clientY / window.innerHeight) * 2 + 1);
        });
        document.body.addEventListener("mousemove", (e) => {          
            mouseX = ((e.clientX / window.innerWidth) * 2 - 1);
            mouseY = (-(e.clientY / window.innerHeight) * 2 + 1);
        });
    },[])

    useEffect(() => {
        if (spinnerRef.current){
            (spinnerRef.current.children[4] as THREE.Mesh).geometry.applyMatrix4( new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler( 3*Math.PI/2, Math.PI, 0 ) ) );
            (spinnerRef.current.children[5] as THREE.Mesh).geometry.applyMatrix4( new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler( 3*Math.PI/2, Math.PI, 0 ) ) );
        }
    }, [])

    useFrame(({ mouse, viewport }) => {
        const x = ((mouseX+xOffset)* viewport.width) / 2.5
        const y = ((mouseY+yOffset)* viewport.height) / 2.5
        if (!spinnerRef.current) return;
        spinnerRef.current.children[4].lookAt(x, y, 10);
        spinnerRef.current.children[5].lookAt(x, y, 10);
        if (direction == "left") {            
            spinnerRef.current.rotation.y += speed * velocity;
            if (velocity > 0) {
                velocity -= friction;
            }
            else if (velocity < 0) {
                velocity += friction;
            }
        }
        else if (direction == "right") {
            spinnerRef.current.rotation.y -= speed * velocity;
            if (velocity > 0) {
                velocity -= friction;
            }
            else if (velocity < 0) {
                velocity += friction;
            }
        }
        if (velocity < stopRange && velocity > -stopRange){
            velocity = 0;
        }

    });
     
    return (
        <Clone deep={true} ref={spinnerRef} rotation={[degToRad(90),0,0]} object={gltf.scene}></Clone>
    )
};

export default EyeSpinner