import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import MODEL from "./tenhun_falling_spaceman_fanart.glb";
import CanvasLoader from "./Loader";

const AstronautModel = () => {
  const { scene } = useGLTF(MODEL);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={scene} />
    </mesh>
  );
};

const AstronautModelCanvas = () => {
  return (
    <Canvas
      style={{ height: "48rem" }}
      frameLoop='demand'
      shadows
      camera={{ position: [10, 1, 1], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <AstronautModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AstronautModelCanvas;
