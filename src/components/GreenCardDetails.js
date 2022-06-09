import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
import greencard from "../images/green.png";
import { wtfGreen, wtuGreen, wtuGreenH1, wtuGreenH2, wtuGreenS } from "../data";

const GreenCardDetails = () => {
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
          <StyledMainContentGrid>
            <StyledHeader>
              <StyledHeaderImg>
                <img src={greencard} alt="Rust Green Card Puzzle Guide" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h2>Green Card Solutions: </h2>
              </StyledHeaderTitle>
              <StyledHeaderDescription>
                <p>
                  This guide will show you where to find green cards and how to
                  solve each basic puzzle.
                </p>
              </StyledHeaderDescription>
            </StyledHeader>
            <StyledWhereToFind>
              <StyledWhereTitle>
                <h3>Where to find Green Cards</h3>
              </StyledWhereTitle>
              <StyledWhereDescription>
                <p>Green Cards spawn on desks in these locations:</p>
              </StyledWhereDescription>
              <StyledWhereCards>
                {wtfGreen.map((s) => (
                  <StyledWtfCard key={s.title}>
                    <img src={s.img} alt={s.title} />
                    <div>
                      <h4>{s.title}</h4>
                    </div>
                    <div>
                      <p>{s.description}</p>
                    </div>
                  </StyledWtfCard>
                ))}
              </StyledWhereCards>
            </StyledWhereToFind>
            <StyledWhereToUse>
              <StyledWTUHeaderTitle>
                <h3>GREEN TIER PUZZLES</h3>
              </StyledWTUHeaderTitle>
              <StyledWTUHeaderDescription>
                <p>
                  Green Cards grant you access to Blue Cards at the locations
                  listed below.
                </p>
              </StyledWTUHeaderDescription>
              <StyledWTUContentGrid>
                <StyledHarbourHeader>
                  <h3>Satellite dish</h3>
                </StyledHarbourHeader>
                <StyledHarbourDesc>
                  <p>Requirements: Green Card, Electric Fuse</p>
                </StyledHarbourDesc>
                {wtuGreen.map((s) => (
                  <StyledWtfCard key={s.title}>
                    <img src={s.img} alt={s.title} />
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledWtfCard>
                ))}
              </StyledWTUContentGrid>
            </StyledWhereToUse>
            <StyledHarbour1Container>
              <StyledH1Title>
                <h3>Harbor One</h3>
              </StyledH1Title>
              <StyledH1Desc>
                <p>Requirements: Green Card, Electric Fuse</p>
              </StyledH1Desc>
              <StyledH1Content>
                {wtuGreenH1.map((s) => (
                  <StyledWtfCard key={s.title}>
                    <img src={s.img} alt={s.title} />
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledWtfCard>
                ))}
              </StyledH1Content>
            </StyledHarbour1Container>
            <StyledHarbour2Container>
              <StyledH2Title>
                <h3>Harbor Two</h3>
              </StyledH2Title>
              <StyledH2Desc>
                <p>Requirements: Green Card, Electric Fuse</p>
              </StyledH2Desc>
              <StyledH2Content>
                {wtuGreenH2.map((s) => (
                  <StyledWtfCard>
                    <img src={s.img} alt={s.title} />
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledWtfCard>
                ))}
              </StyledH2Content>
            </StyledHarbour2Container>
            <StyledSewerContainer>
              <StyledSewerTitle>
                <h3>Sewer Branch</h3>
              </StyledSewerTitle>
              <StyledSewerDesc>
                <p>Requirements: Green Card, Electric Fuse</p>
              </StyledSewerDesc>
              <StyledSewerContent>
                {wtuGreenS.map((s) => (
                  <StyledWtfCard key={s.title}>
                    <img src={s.img} alt={s.title} />
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledWtfCard>
                ))}
              </StyledSewerContent>
            </StyledSewerContainer>
          </StyledMainContentGrid>
        </StyledMainContent>
        <StyledBottomNav>
          <BottomNav />
        </StyledBottomNav>
      </StyledGrid>
    </>
  );
};

const StyledWtfCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: start;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  overflow: hidden;
`;
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
  grid-template-rows: 1fr;

  h2,
  h3,
  h4 {
    font-family: "Rust";
    font-weight: initial;
  }
  z-index: 25;
  position: absolute;
  overflow-x: scroll;
`;
const StyledMainContentGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-columns: 1fr;
  padding: 2rem;
`;
const StyledSewerContainer = styled(motion.div)`
  height: 60vh;
  width: 100%;
  grid-row: 6/7;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 7fr;
  /* grid-template-rows: auto; */
  @media (min-width: 1000px) {
    height: 90vh;
  }
  @media (max-width: 768px) {
    height: 100vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 125vh;
    grid-template-rows: 0.7fr 0.7fr 7fr;
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 140vh;

    padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr;
  }
  @media (max-width: 400px) {
    height: 125vh;
    grid-template-rows: auto;
  }
  @media (max-width: 380px) {
    height: 137vh;
  }
  @media (max-width: 365px) {
    height: 175vh;
    grid-template-rows: auto;
  }
  @media (max-width: 330px) {
    height: 200vh;
    grid-template-rows: auto;
  }
  @media (max-width: 290px) {
    height: 160vh;
    grid-template-rows: 0.4fr 0.4fr 7fr;
  }
`;
const StyledSewerTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledSewerDesc = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledSewerContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  row-gap: 1%;
  column-gap: 1%;
`;
const StyledHarbour2Container = styled(motion.div)`
  height: 60vh;
  width: 100%;
  grid-row: 5/6;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 7fr;
  border-bottom: 1px solid black;
  @media (min-width: 1000px) {
    height: 90vh;
  }
  @media (max-width: 768px) {
    height: 90vh;
    grid-template-rows: 0.5fr 0.5fr 7fr;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 125vh;
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 140vh;

    padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr;
  }
  @media (max-width: 400px) {
    height: 125vh;
    grid-template-rows: auto;
  }
  @media (max-width: 380px) {
    height: 120vh;
  }
  @media (max-width: 365px) {
    height: 140vh;
    grid-template-rows: auto;
  }
  @media (max-width: 330px) {
    height: 170vh;
    grid-template-rows: auto;
  }
  @media (max-width: 290px) {
    height: 140vh;
  }
`;
const StyledH2Title = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledH2Desc = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledH2Content = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  row-gap: 1%;
  column-gap: 1%;
`;
const StyledHarbour1Container = styled(motion.div)`
  height: 60vh;
  width: 100%;
  grid-row: 4/5;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 7fr;
  /* grid-template-rows: auto; */
  border-bottom: 1px solid black;

  @media (min-width: 1000px) {
    height: 90vh;
  }
  @media (max-width: 768px) {
    height: 90vh;
    grid-template-rows: 0.5fr 0.5fr 7fr;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 125vh;
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 140vh;

    padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr;
  }
  @media (max-width: 400px) {
    height: 125vh;
    grid-template-rows: auto;
  }
  @media (max-width: 380px) {
    height: 120vh;
  }
  @media (max-width: 365px) {
    height: 140vh;
    grid-template-rows: auto;
  }
  @media (max-width: 330px) {
    height: 170vh;
    grid-template-rows: auto;
  }
  @media (max-width: 290px) {
    height: 140vh;
  }
`;
const StyledH1Title = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledH1Desc = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledH1Content = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  row-gap: 1%;
  column-gap: 1%;
`;
const StyledWhereToUse = styled(motion.div)`
  height: 60vh;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 7fr;
  /* grid-template-rows: auto; */
  padding-bottom: 1%;
  border-bottom: 1px solid black;

  @media (min-width: 1600px) {
    height: 60vh;
  }
  @media (min-width: 1400px) {
    height: 60vh;
  }
  @media (min-width: 1000px) {
    height: 60vh;
  }
  @media (max-width: 768px) {
    height: 90vh;
    grid-template-rows: 0.5fr 0.5fr 7fr;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 125vh;
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 145vh;
    grid-template-rows: auto;
    padding-bottom: 0%;
  }
  @media (max-width: 400px) {
    height: 125vh;
  }
  @media (max-width: 380px) {
    height: 120vh;
  }
  @media (max-width: 365px) {
    height: 150vh;
    grid-template-rows: auto;
  }
  @media (max-width: 330px) {
    height: 180vh;
    grid-template-rows: auto;
  }
  @media (max-width: 290px) {
    height: 150vh;
  }
`;
const StyledWTUHeaderTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledWTUHeaderDescription = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
`;
const StyledWTUContentGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 0.15fr 0.15fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 1%;
  row-gap: 1%;
  @media (max-width: 768px) {
    grid-template-rows: 0.25fr 0.25fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledHarbourHeader = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  align-self: center;
  justify-self: start;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;
const StyledHarbourDesc = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/3;
  align-self: center;
  justify-self: start;
  @media (max-width: 768px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
const StyledWhereToFind = styled(motion.div)`
  height: 60vh;
  width: 100%;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 7fr;
  /* grid-template-rows: auto; */
  padding-bottom: 1%;
  border-bottom: 1px solid black;

  @media (min-width: 1600px) {
    height: 60vh;
  }
  @media (min-width: 1400px) {
    height: 60vh;
  }
  @media (min-width: 1000px) {
    height: 60vh;
  }
  @media (max-width: 768px) {
    height: 90vh;
    grid-template-rows: 0.5fr 0.5fr 7fr;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 125vh;
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 130vh;
    grid-template-rows: auto;
  }
  @media (max-width: 400px) {
    height: 125vh;
  }
  @media (max-width: 380px) {
    height: 115vh;
  }
  @media (max-width: 365px) {
    height: 200vh;
  }
  @media (max-width: 330px) {
    height: 230vh;
    grid-template-rows: auto;
  }
  @media (max-width: 290px) {
    height: 250vh;
  }
`;
const StyledWhereTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledWhereDescription = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledWhereCards = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  column-gap: 1%;
  row-gap: 1%;
`;
const StyledHeader = styled(motion.div)`
  height: 50vh;
  width: 100%;
  grid-row: 1/2;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
`;
const StyledHeaderDescription = styled(motion.div)`
  grid-row: 3/4;
  align-self: center;
  justify-self: start;
`;
const StyledHeaderTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledHeaderImg = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const StyledGuides = styled(motion.div)`
  grid-row: 2/3;
  height: 150vh;
  width: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
// const StyledMonumentCategory = styled(motion.div)`
//   width: 100%;
//   height: 100%;
//   grid-column: 1/2;
// `;
const StyledQuickLinksTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
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

export default GreenCardDetails;
