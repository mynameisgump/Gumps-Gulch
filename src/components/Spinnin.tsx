
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Box, OrthographicCamera, Center } from "@react-three/drei";

import EyeSpinner from "./EyeSpinner";
import { useRef } from "react";



const Spinnin = () => {
    const viewport = useThree((state) => state.viewport)
    const margin = 0.5;
    const topLeftSpinnerRef = useRef<THREE.Group>(null);
    const topRightSpinnerRef = useRef<THREE.Group>(null);
    const bottomLeftSpinner = useRef<THREE.Group>(null);
    const bottomRightSpinner = useRef<THREE.Group>(null);
    useFrame(()=> {
        if (topLeftSpinnerRef.current){
            topLeftSpinnerRef.current.position.x = -viewport.width / 2 + margin;
            topLeftSpinnerRef.current.position.y = viewport.height / 2 - margin;
        }
        if (topRightSpinnerRef.current){
            topRightSpinnerRef.current.position.x = viewport.width / 2 - margin;
            topRightSpinnerRef.current.position.y = viewport.height / 2 - margin;
        }
        if (bottomLeftSpinner.current){
            bottomLeftSpinner.current.position.x = -viewport.width / 2 + margin;
            bottomLeftSpinner.current.position.y = -viewport.height / 2 + margin;
        }
        if (bottomRightSpinner.current){
            bottomRightSpinner.current.position.x = viewport.width / 2 - margin;
            bottomRightSpinner.current.position.y = -viewport.height / 2 + margin;
        }
    })

    return (
        <>
            <group ref={topLeftSpinnerRef}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </group>
            <group ref={topRightSpinnerRef}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </group>
            <group ref={bottomLeftSpinner}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </group>
            <group ref={bottomRightSpinner}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </group>
        </>
    )
}

export default Spinnin;