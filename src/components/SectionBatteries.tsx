import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Wrapper from "../wrappers/SectionBatteries";
import { useThreeContext } from "../context/useThreeContext";

gsap.registerPlugin(ScrollTrigger);

const SectionBatteries: React.FC = () => {
  const { cameraRef } = useThreeContext();
  const sectionContainer = useRef<HTMLDivElement>(null!);
  const mainTextContent = useRef<HTMLHeadElement[]>([]);
  const durationDetail1 = useRef<HTMLSpanElement>(null!);
  const durationDetail2 = useRef<HTMLSpanElement>(null!);

  const animateSection = () => {
    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top center",
        end: "top top",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });

    tl.to(mainTextContent.current, {
      opacity: 1,
      y: 0,
    })
      .to(durationDetail1.current, {
        innerText: 36,
        duration: 1,
        snap: {
          innerText: 1,
        },
      })
      .to(
        durationDetail2.current,
        {
          innerText: 60,
          duration: 1,
          snap: {
            innerText: 1,
          },
        },
        "<"
      );
  };
  const canvasZIndex = () => {
    gsap.to(".webgl-wrapper", {
      zIndex: -1,
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top bottom",
        end: "+=10px",
        scrub: 1,
        toggleActions: "play pause resume reset",
        onEnterBack: () => {
          if (window.innerWidth < 800) {
            gsap.to(".webgl-wrapper", {
              zIndex: -1,
            });
          }
        },
      },
    });
  };

  useEffect(() => {
    if (!cameraRef.current) return;
    canvasZIndex();
    animateSection();
  }, [cameraRef.current]);

  return (
    <Wrapper ref={sectionContainer}>
      <div className='title-section'>
        <h3
          //@ts-ignore
          ref={(el) => (mainTextContent.current[0] = el)}
        >
          Battery life for days.
        </h3>
        <p //@ts-ignore
          ref={(el) => (mainTextContent.current[1] = el)}
        >
          When you’re on the second day of a backpacking trip, the final leg of
          a triathlon, or diving along a coral reef, the last thing you want to
          think about is running out of battery. With longer battery life than
          ever, you can take on almost anything and have energy to spare.1
        </p>
      </div>
      <div className='duration-details'>
        <div className='single-info'>
          <p className='duration-details-label'>Up to</p>
          <p className='duration-details-dsc'>
            <span className='duration-1' ref={durationDetail1}>
              0
            </span>
            hrs
          </p>
          <p className='duration-details-label'>of normal use settings</p>
        </div>
        <div className='division'></div>
        <div className='single-info'>
          <p className='duration-details-label'>Up to</p>
          <p className='duration-details-dsc'>
            <span className='duration-2' ref={durationDetail2}>
              0
            </span>
            hrs
          </p>
          <p className='duration-details-label'>on low power settings</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionBatteries;
