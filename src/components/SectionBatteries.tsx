import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Wrapper from "../wrappers/SectionBatteries";

gsap.registerPlugin(ScrollTrigger);

const SectionBatteries: React.FC = () => {
  const sectionContainer = useRef<HTMLDivElement>(null!);
  const mainTextContent = useRef<HTMLHeadElement[]>([]);

  useEffect(() => {
    gsap.to(".webgl-wrapper", {
      zIndex: -1,
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top bottom",
        end: "+=10px",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });
  }, []);

  useEffect(() => {
    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top center",
        end: "top 10%",
        scrub: 1,
        toggleActions: "play pause resume reset",
      },
    });

    tl.to(mainTextContent.current, {
      opacity: 1,
      y: 0,
    })
      .to(".duration-1", {
        innerText: 36,
        duration: 1,
        snap: {
          innerText: 1,
        },
      })
      .to(
        ".duration-2",
        {
          innerText: 60,
          duration: 1,
          snap: {
            innerText: 1,
          },
        },
        "<"
      );
  }, []);

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
            <span className='duration-1'>0</span>hrs
          </p>
          <p className='duration-details-label'>of normal use</p>
        </div>
        <div className='division'></div>
        <div className='single-info'>
          <p className='duration-details-label'>Up to</p>
          <p className='duration-details-dsc'>
            <span className='duration-2'>0</span>hrs
          </p>
          <p className='duration-details-label'>on low power settings</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionBatteries;
