import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";

const Guns = () => {
  return (
    <>
      <StyledMain>
        <img src={rustbg} alt="rustbg" />
      </StyledMain>
      <StyledGrid>
        <StyledNav>
          <Nav />
        </StyledNav>
        <StyledSearchBarImg>
          <img src={search} alt="Search" />
        </StyledSearchBarImg>
        <StyledMainContent>
          <StyledTitle>
            <h2>Guns in Rust</h2>
          </StyledTitle>
          <StyledGuides></StyledGuides>
        </StyledMainContent>
        <StyledBottomNav>
          <BottomNav />
        </StyledBottomNav>
      </StyledGrid>
    </>
  );
};

const StyledMain = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  z-index: 1;
`;
const StyledGrid = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 1fr 2fr 5fr 1fr;
  row-gap: 2vh;
  opacity: 0.85;
`;

const StyledMainContent = styled(motion.div)`
  grid-row: 2/4;
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  background-color: gainsboro;
  display: grid;
  grid-template-rows: 1fr 14fr;
  padding: 2rem;
  h2,
  h4 {
    font-family: "Rust";
  }
  z-index: 25;
  position: absolute;
`;
const StyledGuides = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  overflow-x: scroll;
`;

const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledBottomNav = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
const StyledNav = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
`;

const StyledSearchBarImg = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: end;
  z-index: 1 !important;
  pointer-events: none;
  position: absolute;
  img {
    z-index: 1 !important;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export default Guns;
