import { useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { colors } from "../utils/constants";
import { convertBgColor } from "../utils/helpers";
import Wrapper from "../wrappers/CustomizerWrapper";
import * as THREE from "three";
import {
  camera_position_10,
  camera_position_10_mobile,
  cameraLookAt_10,
  cameraLookAt_10_mobile,
} from "../utils/modelPositions";
import { useAnimateCamera } from "../hooks/useAnimateCamera";

const Customize: React.FC = () => {
  const {
    isCustomizeVisible,
    selectedColor,
    changeColor,
    toggleShowCustomizer,
  } = useThreeContext();

  const sectionContainer = useRef<HTMLDivElement>(null!);

  useAnimateCamera({
    trigger: sectionContainer,
    cameraPositionDesktop: camera_position_10,
    cameraPositionMobile: camera_position_10_mobile,
    cameraLookAtMobile: cameraLookAt_10_mobile,
    cameraLookAtDesktop: cameraLookAt_10,
    start: "top bottom",
    end: "top top",
  });
  return (
    <Wrapper className='customize-section' ref={sectionContainer}>
      <div
        style={{
          background: convertBgColor(selectedColor, 0.1),
        }}
        className={`${isCustomizeVisible ? "show" : ""} overlay`}
      ></div>
      {isCustomizeVisible && (
        <p className='label'>Drag to explore the 360-degree view</p>
      )}
      <div
        className={`${isCustomizeVisible ? "show-colors" : ""} colors-wrapper`}
      >
        {colors.map((color, idx) => {
          // Only for this model
          const watchBandColor =
            convertBgColor(color) === "rgb(255, 255, 255, 1)"
              ? new THREE.Color("#FF6F61")
              : color;

          return (
            <div
              onClick={() => changeColor(color)}
              style={{ background: convertBgColor(watchBandColor) }}
              key={idx}
              className={`single-color ${
                selectedColor === color ? "is-active" : ""
              }`}
            ></div>
          );
        })}
      </div>
      <button className='btn-customize' onClick={toggleShowCustomizer}>
        {isCustomizeVisible ? "Close" : "Customize"}
      </button>
    </Wrapper>
  );
};

export default Customize;
