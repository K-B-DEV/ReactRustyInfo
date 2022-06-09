import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <>
      <StyledNavContainer>
        <h1>RUSTYINFO</h1>
        <h2>Everything you need to know</h2>
      </StyledNavContainer>
    </>
  );
};

const StyledNavContainer = styled(motion.div)`
  font-family: "Rust";
  z-index: 10;
  color: white;
  text-shadow: 1px 1px black;
  position: relative;
  h1 {
    z-index: 10;
    font-size: 4rem;
  }
  h2 {
    font-size: 1rem;
    color: red;
    text-shadow: none;
    text-align: center;
  }
  @media (max-width: 400px) {
    h1 {
      z-index: 10;
      font-size: 3rem;
    }
    h2 {
      font-size: 0.9rem;
      color: red;
      text-shadow: none;
      text-align: center;
    }
  }
`;

export default Nav;
