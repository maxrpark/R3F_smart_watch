import { Camera } from "@react-three/fiber";
import { useContext, createContext, ReactNode, FC, useRef } from "react";
import { cameraLookAt_1_mobile } from "../utils/modelPositions";

interface Props {
  children: ReactNode;
}

export type CameraInstance = Camera & {
  manual?: boolean | undefined;
};

interface ThreeContextInt {
  modelRef: React.MutableRefObject<THREE.Group | null>;
  cameraRef: React.MutableRefObject<CameraInstance>;
  cameraTarget: React.MutableRefObject<THREE.Vector3>;
}

const ThreeContext = createContext({} as ThreeContextInt);

export const ThreeProvider: FC<Props> = ({ children }) => {
  const modelRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<CameraInstance>(null!);
  const cameraTarget = useRef<THREE.Vector3>(cameraLookAt_1_mobile);
  return (
    <ThreeContext.Provider
      value={{
        cameraTarget,
        modelRef,
        cameraRef,
      }}
    >
      {children}
    </ThreeContext.Provider>
  );
};

export const useThreeContext = () => useContext(ThreeContext);
