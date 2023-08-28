import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { animateCamera } from "../animations/animateCamera";
import styled from "styled-components";
import {
  camera_position_3,
  camera_position_3_mobile,
  cameraLookAt_3,
  cameraLookAt_3_mobile,
} from "../utils/modelPositions";

const SectionTitle: React.FC = () => {
  const { cameraRef, cameraTarget } = useThreeContext();
  const sectionContainer = useRef<HTMLDivElement>(null!);

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
    }
  }, [cameraRef.current]);
  return (
    <Wrapper ref={sectionContainer}>
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
  p {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--primary-black);
  }
  h2 {
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--primary-black);
  }
`;

export default SectionTitle;
