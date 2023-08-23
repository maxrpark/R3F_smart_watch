import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

const locationHash = window.location.hash;
const ThreeCanvas: React.FC = () => {
  return (
    <div className='webgl-wrapper'>
      <Leva collapsed hidden={locationHash !== "#debug"} />
      <Canvas flat shadows>
        <Experience />
        {locationHash === "#debug" && <Perf position='top-left' />}
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
