import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { animateCamera } from "../animations/animateCamera";
import Wrapper from "../wrappers/FeaturesWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Params {
  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
}
interface Props extends Params {
  texts: string[];
  alignItems: string;
}

const SectionFeatures: React.FC<Props> = ({
  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
  texts,
  alignItems,
}) => {
  const { cameraRef, cameraTarget } = useThreeContext();

  const sectionContainer = useRef<HTMLDivElement>(null!);
  const featuresList = useRef<HTMLHeadingElement[]>([]);

  const animateSection = () => {
    featuresList.current.forEach((el) => {
      let tl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "+=120px",
          scrub: 0.4,
          toggleActions: "play pause resume reset",
        },
      });

      tl.fromTo(
        el,
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
        }
      ).to(
        el,
        {
          delay: 0.5,
          ease: "none",
          yPercent: -200,
          opacity: 0,
        },
        "+=.1"
      );
    });
  };

  useEffect(() => {
    if (cameraRef.current) {
      animateCamera({
        trigger: sectionContainer.current,
        cameraRef,
        cameraTarget,
        cameraPositionDesktop,
        cameraPositionMobile,
        cameraLookAtMobile,
        cameraLookAtDesktop,
        start: "top bottom",
        end: "top top",
      });
      animateSection();
    }
  }, [cameraRef.current]);

  return (
    <Wrapper ref={sectionContainer} $alignItems={alignItems}>
      <div className='features-wrapper'>
        {texts.map((text, idx) => {
          return (
            <h2
              ref={(el: HTMLHeadingElement) => (featuresList.current[idx] = el)}
              className='feature'
              key={idx}
            >
              {text}
            </h2>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SectionFeatures;
