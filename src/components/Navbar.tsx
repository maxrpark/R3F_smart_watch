import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <p className='logo'>Smart Watch</p>
        <a
          href='https://twitter.com/MaxCodeJourney'
          target='_blank'
          rel='noopener noreferrer'
          className='max'
        >
          MaxCodeJourney
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(2px);

  .navbar {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0.7rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: var(--primary-black);
  }

  .max {
    font-size: 1rem;
    text-decoration: none;
    color: var(--primary-black);
    cursor: pointer;
    z-index: 1;
    transition: all 0.1s linear;

    &:hover {
      color: crimson;
    }
  }

  @media screen and (min-width: 687px) {
    padding: 0.7rem 2rem;
  }
`;
export default Navbar;
