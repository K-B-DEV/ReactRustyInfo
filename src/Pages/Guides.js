import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import { QuickLinks, PuzzleData, ElectricityData, OtherData } from "../data";

const GuidesPage = () => {
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
            <h2>Guides</h2>
          </StyledTitle>
          <StyledGuides>
            {/* <StyledQuickLinksContainer>
              <StyledQuickLinksTitle>
                <h4>Quick Links</h4>
              </StyledQuickLinksTitle>
              <StyledCategoryContainer>
                {QuickLinks.map((s) => (
                  <StyledCardContainer>
                    <Card title={s.title} img={s.img} />
                  </StyledCardContainer>
                ))}
              </StyledCategoryContainer>
            </StyledQuickLinksContainer> */}
            <StyledCardPuzzles>
              <StyledCardPuzzleTitle>
                <h4>Monument Puzzle Solutions</h4>
              </StyledCardPuzzleTitle>
              <StyledCardPuzzleContent>
                {PuzzleData.map((s) => (
                  <StyledCardContainer key={s.title}>
                    <Link to={s.path}>
                      <Card title={s.title} img={s.img} />
                    </Link>
                  </StyledCardContainer>
                ))}
              </StyledCardPuzzleContent>
            </StyledCardPuzzles>
            {/* <StyledElectricityGuides>
              <StyledElectricityTitle>
                <h4>Electricity</h4>
              </StyledElectricityTitle>
              <StyledElectricityContent>
                {ElectricityData.map((s) => (
                  <StyledCardContainer key={s.title}>
                    <Link to={s.path}>
                      <Card title={s.title} img={s.img} />
                    </Link>
                  </StyledCardContainer>
                ))}
              </StyledElectricityContent>
            </StyledElectricityGuides> */}
            <StyledOtherGuides>
              <StyledOtherGuidesTitle>
                <h4>Other</h4>
              </StyledOtherGuidesTitle>
              <StyledOtherGuidesContent>
                {OtherData.map((s) => (
                  <StyledCardContainer key={s.title}>
                    <Link to={s.path}>
                      <Card title={s.title} img={s.img} />
                    </Link>
                  </StyledCardContainer>
                ))}
              </StyledOtherGuidesContent>
            </StyledOtherGuides>
          </StyledGuides>
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
    font-weight: initial;
  }
  z-index: 25;
  position: absolute;
`;
const StyledGuides = styled(motion.div)`
  grid-row: 2/3;
  height: 70vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media (max-width: 768px) {
    row-gap: 3%;
    grid-template-rows: 3fr 1fr;
    height: 100vh;
  }
`;
const StyledOtherGuides = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 10fr;
`;

const StyledOtherGuidesTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledOtherGuidesContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`;
const StyledElectricityGuides = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;
const StyledElectricityContent = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledElectricityTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledCardPuzzles = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;
const StyledCardPuzzleContent = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledCardPuzzleTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledQuickLinksContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;
const StyledCategoryContainer = styled(motion.div)`
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledCardContainer = styled(motion.div)`
  width: 95%;
  height: 95%;
  align-self: center;
  justify-self: center;
`;
// const StyledMonumentCategory = styled(motion.div)`
//   width: 100%;
//   height: 100%;
//   grid-column: 1/2;
// `;
const StyledQuickLinksTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
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

export default GuidesPage;
