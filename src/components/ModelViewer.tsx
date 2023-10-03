import { Canvas } from "@react-three/fiber"
import { useGLTF, Environment, Clone, OrbitControls, Bounds, useAnimations } from "@react-three/drei"
import { useEffect } from "react";

const Model = () => {
    const {scene, animations} = useGLTF("/3d/Manson-Fish-Slow.glb");
    const { actions } = useAnimations(animations, scene);
    // console.log(actions);
    useEffect(() => {
        console.log(actions)
        if (actions){
            actions?.Swimmin.play()
        }
        
    })
    return(
        <>
            <Bounds fit clip observe damping={6} margin={2}>
                <primitive object={scene}/>
            </Bounds>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
            <Environment preset='city'/>
        </>

    );
}


const ModelViewer = () => {

    return (
        <Canvas style={{height: "300px"}}>
            <Model></Model>
        </Canvas>
    )
}

export default ModelViewer;