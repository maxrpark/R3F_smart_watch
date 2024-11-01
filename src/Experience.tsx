import { useControls } from "leva";
import WatchModel from "./components/WatchModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useThreeContext } from "./context/useThreeContext";
import { useEffect, useState } from "react";
import {
  cameraLookAt_1,
  cameraLookAt_1_mobile,
  camera_position_1,
  camera_position_1_mobile,
} from "./utils/modelPositions";

const Experience: React.FC = () => {
  const { cameraRef, isCustomizeVisible } = useThreeContext();
  const { camera } = useThree();
  const [cameraPosition, setCameraPosition] = useState(camera_position_1);

  const { color: ambientColor, intensity: ambientIntensity } = useControls(
    "Ambient Light",
    {
      intensity: { value: 1.5, step: 0.01, min: 0, max: 10 },
      color: "#ffffff",
    }
  );
  const {
    x,
    y,
    z,
    color,
    intensity,
    normalBias,
    top,
    bottom,
    left,
    right,
    far,
  } = useControls("Directional Light", {
    x: { value: 0.35, step: 0.01, min: -20, max: 20 },
    y: { value: 3.96, step: 0.01, min: -20, max: 20 },
    z: { value: 0.38, step: 0.01, min: -20, max: 20 },
    color: "#ffffff",
    intensity: { value: 1.5, step: 0.01, min: 0, max: 5 },
    normalBias: { value: 0.02, step: 0.001, min: 0.01, max: 0.1 },
    far: { value: 15, step: 0.01, min: -2, max: 200 },
    top: { value: 2, step: 0.01, min: -2, max: 200 },
    right: { value: 2, step: 0.01, min: -2, max: 200 },
    bottom: { value: -2, step: 0.01, min: -2, max: 200 },
    left: { value: -2, step: 0.01, min: -2, max: 200 },
  });

  useEffect(() => {
    if (window.innerWidth > 800) {
      setCameraPosition(camera_position_1);
      camera.lookAt(cameraLookAt_1);
    } else {
      setCameraPosition(camera_position_1_mobile);
      camera.lookAt(cameraLookAt_1_mobile);
    }
  }, [cameraRef.current, cameraPosition]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={25}
        near={0.2}
        far={1000}
        position={cameraPosition}
      />
      <OrbitControls enabled={isCustomizeVisible} />
      <Environment preset='apartment' />
      <ambientLight color={ambientColor} intensity={ambientIntensity} />
      <directionalLight
        color={color}
        castShadow
        position={[x, y, z]}
        intensity={intensity}
        shadow-mapSize={[1024, 1024]}
        shadow-normalBias={normalBias}
        shadow-camera-near={1}
        shadow-camera-far={far}
        shadow-camera-top={top}
        shadow-camera-right={right}
        shadow-camera-bottom={bottom}
        shadow-camera-left={left}
      />
      <WatchModel />
    </>
  );
};

export default Experience;
