import { Suspense } from "react";
import ThreeCanvas from "./ThreeCanvas";
import * as THREE from "three";

import {
  Hero,
  SectionFeatures,
  SectionTitle,
  SectionTitleAndDescription,
} from "./components";
import {
  cameraLookAt_5,
  cameraLookAt_5_mobile,
  cameraLookAt_6,
  cameraLookAt_6_mobile,
} from "./utils/modelPositions";

const App: React.FC = () => {
  return (
    <main>
      <Suspense fallback={<h1>Loading</h1>}>
        <ThreeCanvas />
        <div className='main-content-wrapper'>
          <Hero />
          <SectionTitle />
          <SectionTitleAndDescription
            cameraPositionDesktop={new THREE.Vector3(3.4, 3.4, 3.8)}
            cameraPositionMobile={new THREE.Vector3(-5.91, 10.28, 9.17)}
            cameraLookAtMobile={cameraLookAt_5_mobile}
            cameraLookAtDesktop={new THREE.Vector3(-0.04, 0.91, 1.37)}
          />
          <SectionFeatures />
          {/* <SectionTitleAndDescription
            cameraPositionDesktop={new THREE.Vector3(5.88, 4.26, 10.04)}
            cameraPositionMobile={new THREE.Vector3(7.55, 7.36, 10.68)}
            cameraLookAtMobile={cameraLookAt_6_mobile}
            cameraLookAtDesktop={cameraLookAt_6}
          /> */}
          <section></section>
          <section></section>
          {/* <SectionTitleAndDescription
            cameraPositionDesktop={new THREE.Vector3(2.97, 0.05, 3.64)}
            cameraPositionMobile={new THREE.Vector3(-5.91, 10.28, 9.17)}
            cameraLookAtMobile={cameraLookAt_5_mobile}
            cameraLookAtDesktop={cameraLookAt_5}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={new THREE.Vector3(5.88, 4.26, 10.04)}
            cameraPositionMobile={new THREE.Vector3(7.55, 7.36, 10.68)}
            cameraLookAtMobile={cameraLookAt_6_mobile}
            cameraLookAtDesktop={cameraLookAt_6}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={new THREE.Vector3(2.97, 0.05, 3.64)}
            cameraPositionMobile={new THREE.Vector3(-5.91, 10.28, 9.17)}
            cameraLookAtMobile={cameraLookAt_5_mobile}
            cameraLookAtDesktop={cameraLookAt_5}
          /> */}
        </div>
      </Suspense>
    </main>
  );
};

export default App;
