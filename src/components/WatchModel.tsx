import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useThreeContext } from "../context/useThreeContext";
import { useEffect, useRef } from "react";
import { useControls } from "leva";

const WatchModel: React.FC = () => {
  const { modelRef, selectedColor } = useThreeContext();
  const outerBand = useRef<THREE.Mesh>();
  const innerBand = useRef<THREE.Mesh>();
  const { scene } = useGLTF("/model.glb");

  const { metalness, roughness } = useControls("Glass Area", {
    metalness: {
      value: 0.5,
      step: 0.001,
      min: 0,
      max: 1,
    },

    roughness: {
      value: 0,
      step: 0.001,
      min: 0,
      max: 1,
    },
  });

  scene.traverse((child: any) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name === "outerBand") {
        outerBand.current = child;

        child.material.emissiveIntensity = 0;
      }
      if (child.name === "innerBand") {
        innerBand.current = child;
        child.material.emissiveIntensity = 0;
      }
      if (
        child.name === "wmnqxNpNCdRfDfA" ||
        child.name === "KsxIrenucRYdQlx"
      ) {
        child.material.metalness = metalness;
        child.material.roughness = roughness;
      }
    }
  });

  useEffect(() => {
    (innerBand.current!.material as THREE.MeshStandardMaterial).color =
      selectedColor;
    (outerBand.current!.material as THREE.MeshStandardMaterial).color =
      selectedColor;
  }, [selectedColor]);

  return <primitive ref={modelRef} object={scene}></primitive>;
};

useGLTF.preload("/model.glb");

export default WatchModel;
