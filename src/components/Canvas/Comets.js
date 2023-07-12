import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Comets = () => {
  const comets = useGLTF('./comets/scene.gltf');

  return (
    <primitive object={comets.scene} scene={2.5} scale={3} position-y={0} rotation-y={0} />
  );
};

const CometsCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Comets />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CometsCanvas;
