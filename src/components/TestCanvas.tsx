import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";


const TestCanvas = () => {
    const { scene } = useGLTF("/3d/LiveSpinner.glb");
    return(
    <Canvas>
      {/* <ambientLight intensity={5}></ambientLight> */}
      <primitive object={scene}></primitive>

      <Environment preset='city'></Environment>
      {/* <pointLight position={[10, 10, 10]}></pointLight> */}
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshStandardMaterial color="hotpink"></meshStandardMaterial>
      </mesh> */}
      {/* <OrbitControls></OrbitControls> */}
    </Canvas>
    )
}

export default TestCanvas;