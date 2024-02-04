import { useEffect } from "react";
import ThreeCanvas from "./ThreeCanvas";

import {
  BackgroundParallax,
  Customize,
  Hero,
  Loader,
  Navbar,
  SectionBatteries,
  SectionFeatures,
  SectionTitle,
  SectionTitleAndDescription,
} from "./components";

import { useProgress } from "@react-three/drei";
import { useLenis } from "@studio-freight/react-lenis";
import {
  sectionTitleAndDsc_1,
  sectionTitleAndDsc_2,
  sectionTitleAndDsc_3,
  sectionTitleAndDsc_4,
  sectionFeatures_1,
  sectionFeatures_2,
} from "./utils/sectionsData";

const App: React.FC = () => {
  const { progress } = useProgress();

  const lenis = useLenis();

  useEffect(() => {
    if (lenis) lenis.stop();
    if (progress === 100) {
      lenis.start();
    }
  }, [progress]);
  return (
    <main>
      {progress !== 100 && <Loader progress={progress} />}
      <ThreeCanvas />
      <div className='main-content-wrapper'>
        <Navbar />
        <Hero />
        <SectionTitle />
        <SectionTitleAndDescription {...sectionTitleAndDsc_1} />
        <SectionFeatures {...sectionFeatures_1} />
        <SectionFeatures {...sectionFeatures_2} />
        <SectionTitleAndDescription {...sectionTitleAndDsc_2} />
        <SectionBatteries />
        <BackgroundParallax />
        <SectionTitleAndDescription {...sectionTitleAndDsc_3} />
        <SectionTitleAndDescription {...sectionTitleAndDsc_4} />
        <Customize />
      </div>
    </main>
  );
};

export default App;
