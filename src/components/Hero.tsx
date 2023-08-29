import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { animateCamera } from "../animations/animateCamera";
import Wrapper from "../wrappers/HeroWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  camera_position_2,
  camera_position_2_mobile,
  cameraLookAt_2,
  cameraLookAt_2_mobile,
} from "../utils/modelPositions";

const Hero: React.FC = () => {
  const { cameraRef, cameraTarget } = useThreeContext();

  const sectionContainer = useRef<HTMLDivElement>(null!);
  const mainTextContent = useRef<HTMLDivElement>(null!);
  const logoTitle = useRef<HTMLDivElement>(null!);

  const animateSection = () => {
    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "clamp(top 5%)",
        end: "+=300",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });

    tl.to(mainTextContent.current, {
      opacity: 0,
      stagger: 0.5,
    }).to(logoTitle.current, {
      opacity: 1,
    });
  };

  useEffect(() => {
    if (cameraRef.current) {
      animateCamera({
        trigger: sectionContainer.current,
        cameraRef,
        cameraTarget,
        cameraPositionDesktop: camera_position_2,
        cameraPositionMobile: camera_position_2_mobile,
        cameraLookAtMobile: cameraLookAt_2_mobile,
        cameraLookAtDesktop: cameraLookAt_2,
        start: "top top",
        end: "+=300px",
      });
      animateSection();
    }
  }, [cameraRef.current]);

  return (
    <Wrapper ref={sectionContainer}>
      <div className='hero-content'>
        <div ref={mainTextContent}>
          <h2>Adventure awaits</h2>
          <p>
            Meet the most rugged and capable Apple Watch ever. With a robust
            titanium case, precision dual-frequency GPS, up to 36 hours of
            battery life,1 the freedom of cellular,a and three specialized bands
            made for athletes and adventurers of all kinds.
          </p>
        </div>
        <div ref={logoTitle} className='logo-watch'>
          <div className='apple-logo'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={"2rem"}
              viewBox='0 0 24 24'
            >
              <path d='M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z'></path>
            </svg>
            <h3>Watch</h3>
          </div>
          <p>ultra</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
