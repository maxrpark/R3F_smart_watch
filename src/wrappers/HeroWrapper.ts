import styled from "styled-components";

const Wrapper = styled.section`
  height: 150vh;
  position: relative;
  background: transparent;
  z-index: -2;
  .hero-content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15%;
    text-align: center;
    width: 90%;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--primary-orange);
      margin-bottom: 0.625rem;
    }
    p {
      color: var(--primary-black);
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.48px;
      max-width: 920px;
      margin: 0 auto;
    }

    @media screen and (min-width: 800px) {
      h2 {
        font-size: 5rem;
        margin-bottom: 3.125rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }

  .logo-watch {
    opacity: 0;
    transform: translateY(-5.5rem);

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
      text-align: center;
      max-width: unset;
    }

    @media screen and (min-width: 800px) {
      transform: translateY(-1.5rem);
    }
  }
`;

export default Wrapper;
