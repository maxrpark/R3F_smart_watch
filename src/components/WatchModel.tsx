import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useThreeContext } from "../context/useThreeContext";
import { useEffect } from "react";

const WatchModel: React.FC = () => {
  const { modelRef, setIsModelLoaded, isModelLoaded } = useThreeContext();
  const { scene } = useGLTF("/smart-watch.glb");

  scene.traverse((child: any) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useEffect(() => {
    if (isModelLoaded) return;
    setIsModelLoaded(true);
  }, [modelRef.current]);

  return <primitive ref={modelRef} object={scene}></primitive>;
};

export default WatchModel;
