
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
    useFrame(()=> {
        if (topLeftSpinnerRef.current){
            topLeftSpinnerRef.current.position.x = -viewport.width / 2 + margin;
            topLeftSpinnerRef.current.position.y = viewport.height / 2 - margin;
        }
        if (topRightSpinnerRef.current){
            topRightSpinnerRef.current.position.x = viewport.width / 2 - margin;
            topRightSpinnerRef.current.position.y = viewport.height / 2 - margin;
        }
        console.log("God Why")
    })

    return (
        <>
            <group ref={topLeftSpinnerRef}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </group>
            <group ref={topRightSpinnerRef}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </group>
            {/* <Center ref={topLeftSpinnerRef} top left position={[0, 0, 0]} onCentered={({ container, height }) => container.scale.setScalar(viewport.height / height)}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center> */}
            {/* <Center ref={topRightSpinnerRef} top right >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </Center>
            <Center bottom left >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center>
            <Center bottom right >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </Center> */}
            {/* <Center bottom right position={[(-width / 2), (height / 2), 0]}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center> */}
            {/* <Center top right position={[(-width / 2)-1.5, (-height / 2)+0.6, 0]}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center>
            <Center top right position={[(width / 2)-1.5, (-height / 2)+0.6, 0]}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center>
            <Center top right position={[(width / 2)-1.5, (height / 2)+0.6, 0]}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center> */}
        </>
    )
}

export default Spinnin;