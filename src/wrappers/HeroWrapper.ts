import styled from "styled-components";

const Wrapper = styled.section`
  height: 150vh;
  position: relative;
  .hero-content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15%;
    text-align: center;

    h2 {
      font-size: 5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--primary-orange);
      margin-bottom: 70px;
    }
    p {
      color: var(--primary-black);
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.48px;
    }

    .logo-watch {
      opacity: 0;
      margin-top: 0.5rem;
      .apple-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
      }
      h3 {
        color: var(--primary-black);
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 0.2rem;
      }
      p {
        color: var(--primary-orange);
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 500;
        margin-left: 1rem;
      }
    }
  }
`;

export default Wrapper;
