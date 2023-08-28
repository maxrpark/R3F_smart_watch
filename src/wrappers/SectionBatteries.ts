import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title-section {
    width: 100%;
    text-align: center;
    h3 {
      color: var(--primary-black);
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(-50px);
    }
    p {
      max-width: 960px;
      margin: 0 auto;
      color: var(--primary-gray);
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
      letter-spacing: 0.48px;
      opacity: 0;
      transform: translateY(50px);
    }
  }

  // //

  .duration-details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    margin-top: 70px;
  }
  .division {
    width: 3px;
    background: #d9d9d9;
    height: 270px;
  }
  .duration-details-label {
    color: var(--primary-black);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .duration-details-dsc {
    color: var(--primary-orange);
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export default Wrapper;
