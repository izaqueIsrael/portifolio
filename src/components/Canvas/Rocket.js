import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Rocket = () => {
  const rocket = useGLTF('./meteour/scene.gltf');

  return (
    <primitive object={rocket.scene} scale={0.6} position={[0, 0, 0]} rotation={[0, 0, 0]} />
  );
};

const RocketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 1,
        far: 500,
        position: [300, -50, 60],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rocket />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RocketCanvas;
