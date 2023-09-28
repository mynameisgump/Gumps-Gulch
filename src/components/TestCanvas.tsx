import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
const TestCanvas = () => {
    const { scene } = useGLTF("/public/assets/models/LiveSpin.glb")
    return(
    <Canvas>
    <primitive object={scene} />
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]}></pointLight>
      <mesh>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshStandardMaterial color="hotpink"></meshStandardMaterial>
      </mesh>
    </Canvas>
    )
}

export default TestCanvas;