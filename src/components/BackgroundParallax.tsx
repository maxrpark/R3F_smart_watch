import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
//@ts-ignore
import bgImg from "/snow-img.jpg";
gsap.registerPlugin(ScrollTrigger);

const BackgroundParallax: React.FC = () => {
  const sectionContainer = useRef<HTMLDivElement>(null!);
  const contentGroup = useRef<HTMLDivElement>(null!);

  const canvasZIndex = () => {
    ScrollTrigger.create({
      trigger: sectionContainer.current,
      start: "bottom center",
      end: "+=10px",
      scrub: 1,
      toggleActions: "play pause resume reset",
      onLeaveBack: () => {
        gsap.to(".webgl-wrapper", {
          zIndex: -1,
        });
      },
      onLeave: () => {
        gsap.to(".webgl-wrapper", {
          zIndex: 1,
        });
      },
    });
  };
  const animateSection = () => {
    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top center",
        end: "+=100%",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });

    tl.to(contentGroup.current, {
      scale: 0.5,
    }).to(
      ".blend",
      {
        opacity: 0,
      },
      0
    );
  };

  useEffect(() => {
    canvasZIndex();
    animateSection();
  }, []);
  return (
    <Wrapper ref={sectionContainer}>
      <div ref={contentGroup} className='content-group'>
        <p>Adventure</p>
        <h3>
          Pioneering <br /> engineering.
        </h3>
      </div>
      <img className='blend' src={bgImg} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .blend {
    mix-blend-mode: lighten;
  }
  h3 {
    color: var(--primary-orange);
    font-size: 16rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    font-size: 6.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: black;
  }

  @media screen and (max-width: 800px) {
    h3 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export default BackgroundParallax;
