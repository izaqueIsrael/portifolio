import React from 'react';
import { useGLTF } from '@react-three/drei';

const SketchfabModel = ({ url }) => {
  const { scene } = useGLTF(url, true);

  return <primitive object={scene} />;
};

export default SketchfabModel;
