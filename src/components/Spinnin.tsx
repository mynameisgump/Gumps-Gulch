
import { Canvas, useThree } from "@react-three/fiber"
import { Environment, Box, OrthographicCamera, Center } from "@react-three/drei";

import EyeSpinner from "./EyeSpinner";



const Spinnin = () => {
    const viewport = useThree((state) => state.viewport)
    const margin = 0.5;

    return (
        <>
            <Center top left position={[0, 0, 0]} onCentered={({ container, height }) => container.scale.setScalar(viewport.height / height)}>
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center>
            <Center top right >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </Center>
            <Center bottom left >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="left"></EyeSpinner>
            </Center>
            <Center bottom right >
                <EyeSpinner xOffset={0.75} yOffset={1} direction="right"></EyeSpinner>
            </Center>
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