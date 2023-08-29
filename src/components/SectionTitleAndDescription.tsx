import { useEffect, useRef } from "react";
import { animateCamera } from "../animations/animateCamera";
import { useThreeContext } from "../context/useThreeContext";
import styled from "styled-components";
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
  title: string;
  description: string;
  alignItem: string;
}

const SectionTitleAndDescription: React.FC<Props> = ({
  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
  title,
  description,
  alignItem,
}) => {
  const { cameraRef, cameraTarget } = useThreeContext();
  const sectionContainer = useRef<HTMLDivElement>(null!);
  const mainTextContent = useRef<HTMLDivElement>(null!);

  const animateSection = () => {
    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });

    tl.to(mainTextContent.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: 0.1,
    }).to(
      mainTextContent.current,
      {
        opacity: 1,
        y: -100,
      },
      0
    );
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
    <Wrapper ref={sectionContainer} $alignItems={alignItem}>
      <div ref={mainTextContent} className='content-wrapper'>
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ $alignItems?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: ${(props) => props.$alignItems};
  width: 100%;

  .content-wrapper {
    opacity: 0;
    clip-path: polygon(0 0, 100% 0, 100% 13%, 0 24%);
    clip-path: polygon(0 0, 100% 0, 100% 22%, 0 52%);
  }

  h3 {
    color: var(--primary-black);
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.48px;
    max-width: 500px;
  }

  @media screen and (max-width: 800px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export default SectionTitleAndDescription;
