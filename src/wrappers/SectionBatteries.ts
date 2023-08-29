import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .title-section {
    width: 100%;
    text-align: center;
    h3 {
      color: var(--primary-black);
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 1rem;
    }
    p {
      max-width: 960px;
      margin: 0 auto;

      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem;
      letter-spacing: 0.48px;
      text-align: start;
    }
    h3,
    p {
      opacity: 0;
      transform: translateY(50px);
    }
  }

  .duration-details {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 70px;
  }

  .division {
    background: #d9d9d9;
    height: 3px;
    width: 90%;
    width: 3px;

    height: 170px;
  }
  .duration-details-label {
    color: var(--primary-black);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .duration-details-dsc {
    color: var(--primary-orange);
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (min-width: 800px) {
    padding: unset;
    .title-section {
      h3 {
        font-size: 3rem;
      }
      p {
        line-height: 32px;
        text-align: center;
      }
    }
    .duration-details {
      flex-direction: row;
      gap: 4.375rem;
      margin-top: 70px;
    }
    .division {
      width: 3px;
      height: 270px;
    }

    .duration-details-label {
      font-size: 1.5rem;
    }
    .duration-details-dsc {
      font-size: 3.5rem;
    }
  }
`;
export default Wrapper;
