import { Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, RenderTexture, useGLTF, Text, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './Loader';
import MODEL from '../models/magic-stones/scene.gltf'
import { MeshStandardMaterial } from "three";

const Astronaut = () => {
  const astronaut = useGLTF(MODEL);
  console.log(astronaut)
  return (
    <mesh>

      <primitive
        object={astronaut.scene}
      />
    </mesh>
  );
};

const AstronautCanvas = () => {
  return (
    <Canvas
      style={{ height: '48rem' }}
      frameloop="demand"
      shadows
      camera={{ near: 0.01, fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        // position: [0, 0, 5]
        autoRotate={true}
      />
      <ambientLight
        intensity={1}
      />
      <mesh>
        <hemisphereLight
          intensity={0.15}
          groundColor='black'
        />
        <pointLight
          intensity={1}
        />
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial>
          <RenderTexture attach='map'>
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 2]}
            />
            <color attach='background' args={['pink']} />
            <Text fontSize={3} color='#555'>
              Hello
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
      {/* <Preload all>
        <Suspense fallback={<CanvasLoader />}>
            <Astronaut />
          </OrbitControls>
        </Suspense> */}
      {/* </Preload> */}
    </Canvas >
  );
};

export default AstronautCanvas;