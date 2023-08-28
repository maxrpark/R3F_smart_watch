import styled from "styled-components";

const Wrapper = styled.section<{ $alignItems?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignItems};
  justify-content: center;

  .features-wrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
  .feature {
    color: var(--primary-orange);
    opacity: 0;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export default Wrapper;
