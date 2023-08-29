import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { animateCamera } from "../animations/animateCamera";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  camera_position_3,
  camera_position_3_mobile,
  cameraLookAt_3,
  cameraLookAt_3_mobile,
} from "../utils/modelPositions";

const SectionTitle: React.FC = () => {
  const { cameraRef, cameraTarget } = useThreeContext();
  const sectionContainer = useRef<HTMLDivElement>(null!);
  const bgWrapper = useRef<HTMLDivElement>(null!);

  const animation = () => {
    const tl = gsap.timeline({ default: { ease: "none" } });
    ScrollTrigger.create({
      trigger: sectionContainer.current,
      start: "top 40%",
      toggleActions: "play none none reverse",
      end: "top 10%",
      scrub: 0.5,
      animation: tl,
    });
    tl.to(bgWrapper.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });
  };

  useEffect(() => {
    if (cameraRef.current) {
      animateCamera({
        trigger: sectionContainer.current,
        cameraRef,
        cameraTarget,
        cameraPositionDesktop: camera_position_3,
        cameraPositionMobile: camera_position_3_mobile,
        cameraLookAtMobile: cameraLookAt_3_mobile,
        cameraLookAtDesktop: cameraLookAt_3,
        start: "top bottom",
        end: "top top",
      });
      animation();
    }
  }, [cameraRef.current]);
  return (
    <Wrapper ref={sectionContainer}>
      <div ref={bgWrapper} className='bg-wrapper'>
        <p>Design</p>
        <h2 className='clipped'>
          Pioneering <br /> engineering.
        </h2>
      </div>
      <p>Design</p>
      <h2>
        Pioneering <br /> engineering.
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .bg-wrapper {
    background: var(--primary-black);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

    padding: 0 2rem;
    display: none;
    p,
    h2 {
      color: var(--primary-white);
    }
  }

  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--primary-black);
  }

  h2 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--primary-black);
  }

  @media screen and (min-width: 800px) {
    z-index: -2;
    position: relative;
    .bg-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    h2 {
      font-size: 6rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default SectionTitle;
