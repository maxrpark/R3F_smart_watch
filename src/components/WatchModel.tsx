import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const WatchModel: React.FC = () => {
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
  return <primitive object={scene}></primitive>;
};

export default WatchModel;
