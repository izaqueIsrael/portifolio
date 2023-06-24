import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AstronautCanvas = () => {
  return (
    <Canvas
      style={{ height: '48rem' }}
      shadows
      camera={{ near: 0.01, fov: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <ambientLight intensity={1} />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <Sphere args={[2, 32, 32]} scale={1.7}>
        <MeshDistortMaterial color='#140e18' attach='material' distort={0.3} speed={2} />
      </Sphere>
    </Canvas>
  );
};

export default AstronautCanvas;
