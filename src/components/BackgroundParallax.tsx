import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
//@ts-ignore
import bgImg from "/snow-img.jpg";
import { breakPoint } from "../utils/constants";
import { useThreeContext } from "../context/useThreeContext";
gsap.registerPlugin(ScrollTrigger);

const BackgroundParallax: React.FC = () => {
  const { cameraRef } = useThreeContext();
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
        if (window.innerWidth > 800) {
          gsap.to(".webgl-wrapper", {
            zIndex: 1,
          });
        }
      },
    });
  };
  const animateSection = () => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
        };

        if (isDesktop) {
          let tl = gsap.timeline({
            ease: "none",
            scrollTrigger: {
              trigger: sectionContainer.current,
              start: "top 40%",
              end: "bottom top",
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
        } else if (isMobile) {
          let tl = gsap.timeline({
            ease: "none",
            scrollTrigger: {
              trigger: sectionContainer.current,
              start: "top 90%",
              end: "bottom top",
              scrub: 1,
              toggleActions: "play pause resume reset",
            },
          });
          tl.to(sectionContainer.current, {
            backgroundPositionX: "0%",
          });
        }

        return () => {
          gsap.set(contentGroup.current, {
            scale: 1,
          });
          gsap.set(".blend", {
            opacity: 1,
          });
          gsap.set(sectionContainer.current, {
            clearProps: "backgroundPositionX",
          });
        };
      }
    );
  };

  useEffect(() => {
    if (!cameraRef.current) return;
    canvasZIndex();
    animateSection();
  }, [cameraRef.current]);
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
  max-width: unset;
  background: url("/snow-img.jpg");
  background-position-x: 80%;
  background-position-y: 0px;
  background-size: cover;
  /* background-repeat: no-repeat; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .content-group {
    z-index: 1;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    object-fit: cover;
  }

  h3 {
    color: var(--primary-orange);

    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    font-size: 1.5rem;

    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: black;
  }

  @media screen and (min-width: 800px) {
    background: none;
    img {
      visibility: visible;
    }
    h3 {
      font-size: 16rem;
    }
    p {
      font-size: 3.2rem;
    }
    .blend {
      mix-blend-mode: darken;
    }
    .content-group {
      z-index: unset;
    }
  }
`;

export default BackgroundParallax;
