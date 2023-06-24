import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import MODEL from "./tenhun_falling_spaceman_fanart.glb";
import CanvasLoader from "./Loader";

const AstronautModel = () => {
  const { scene } = useGLTF(MODEL);
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const y = Math.sin(t) * 0.01; // Ajuste a amplitude da flutuação aqui
    ref.current.position.y = y;
  });

  return (
    <mesh ref={ref} rotation={[-9, 2, Math.PI / 6]}> {/* Ajuste a rotação aqui */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={scene} rotation={[Math.PI / 2, 0, 2]} />
    </mesh>
  );
};

const AstronautModelCanvas = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas
        style={{ height: "48rem", width: "100%" }}
        frameLoop="demand"
        shadows
        camera={{ position: [10, 0, 3], fov: 25 }} // Ajuste a posição da câmera
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <AstronautModel />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default AstronautModelCanvas;
