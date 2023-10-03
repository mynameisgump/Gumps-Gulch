import { Canvas } from "@react-three/fiber"
import { useGLTF, Environment, Clone, OrbitControls, Bounds } from "@react-three/drei"


const ModelViewer = () => {
    const gltf = useGLTF("/3d/MansonFish.glb");
    return (
        <Canvas style={{ width: "300px", height: "300px"}}>
            <Bounds fit clip observe damping={6} margin={2}>
                <Clone deep={true} object={gltf.scene}></Clone>
            </Bounds>
            
            <Environment preset='city'></Environment>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />

        </Canvas>
    )
}

export default ModelViewer;