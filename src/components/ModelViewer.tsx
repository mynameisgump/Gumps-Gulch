import { Canvas } from "@react-three/fiber"
import { useGLTF, Environment, Clone, OrbitControls, Bounds, useAnimations } from "@react-three/drei"
import { useEffect } from "react";

type ModelProps = {
    modelFile: string;
}

const Model = ({ modelFile }: ModelProps) => {
    const {scene, animations} = useGLTF("/3d/".concat(modelFile));
    const { actions } = useAnimations(animations, scene);
    
    //  console.log(actions);
    useEffect(() => {
        if (animations.length > 0 && actions){
            console.log(animations)
            const animation_name = animations[0].name;
            actions[animation_name]!.play()
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


const ModelViewer = (props: ModelProps) => {
    return (
        <Canvas style={{height: "300px"}}>
            <Model {...props}></Model>
        </Canvas>
    )
}

export default ModelViewer;