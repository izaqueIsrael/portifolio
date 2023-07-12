import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Astronaut = () => {
  const astronaut = useGLTF('./astronaut/scene.gltf');

  return (
    <primitive object={astronaut.scene} scene={2.5} position-y={0} rotation-y={0} />
  );
};

const AstronautCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astronaut />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronautCanvas;
