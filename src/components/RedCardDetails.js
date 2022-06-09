import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
import bluecard from "../images/blue.png";
import h4 from "../images/h4.png";
import buy from "../images/buy.png";
import pp from "../images/pp.png";
import air from "../images/air.png";
import train from "../images/train.png";
import water from "../images/water.png";
import redcard from "../images/red.png";
import redwhere from "../images/redwhere.png";
import mil from "../images/mill.png";
import launch from "../images/launch.png";
import { wtuRedMil, wtuRedLaunch } from "../data";

const BlueCardDetails = () => {
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
            <StyledInfoPage1>
              <StyledHeaderImg>
                <img src={redcard} alt="Rust Blue Card Puzzle Guide" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h2>Red card solutions</h2>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Advanced tier puzzles are accessible once you've obtained a
                  red card from Medium (Blue) puzzles. They provide better loot
                  than Medium puzzles, and are the hardest to complete
                  overall.This guide shows you how to complete each red puzzle,
                  step by step.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage1>
            <StyledInfoPage2>
              <StyledHeaderImg>
                <img src={redwhere} alt="Where to find red card rust" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h3>Where do you find Red Cards?</h3>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Red cards are found by solving Medium puzzles. If you have not
                  yet completed any of these, check out our handy guide on how
                  to complete all Medium Blue Puzzles.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage2>
            <StyledInfoPage3>
              <StyledHeaderImg>
                <img src={buy} alt="Where to buy blue cards rust" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h3>Can you buy Red Cards?</h3>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Unlike Blue cards, Red cannot be purchased at the outpost.
                  That said, individual players may sell them at vending
                  machines around the map.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage3>
            <StyledBlueSolutionsHeader>
              <h2>Red Tier Puzzles</h2>
            </StyledBlueSolutionsHeader>
            <StyledMil>
              <StyledPPTitle>
                <h2>Military Tunnels</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={mil} alt="Military Tunnels Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Electric Fuse</p>
                  </div>
                  <div>
                    <p>- Green Card</p>
                  </div>
                  <div>
                    <p>- Blue Card</p>
                  </div>
                  <div>
                    <p>- Red Keycard</p>
                  </div>
                  <div>
                    <p>- Weapons (Scientist NPC's in tunnel)</p>
                  </div>
                </StyledPPCard1>
                <StyledPPCard2>
                  <div>
                    <h4>Protection needed</h4>
                  </div>
                  <div>
                    <p>- 25 rad protect</p>
                  </div>
                </StyledPPCard2>
                <StyledPPCard3>
                  <div>
                    <h4>Estimated loot:</h4>
                  </div>
                  <div>
                    <p>- Behind Red door</p>
                  </div>
                  <div>
                    <p>- 3x Elite Crate</p>
                  </div>
                  <div>
                    <p>- 2x Military Crate</p>
                  </div>
                  <div>
                    <p>- 2x Normal</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledPPInstructions>
                {wtuRedMil.map((s) => (
                  <StyledPPCard key={s.title}>
                    <div>
                      <img src={s.img} alt={s.title} />
                    </div>
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledPPCard>
                ))}
              </StyledPPInstructions>
            </StyledMil>
            <StyledLaunch>
              <StyledPPTitle>
                <h2>Launch Site</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={launch} alt="Launch Site Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Electric Fuse x2</p>
                  </div>
                  <div>
                    <p>- Green Card</p>
                  </div>
                  <div>
                    <p>- Red Keycard</p>
                  </div>
                  <div>
                    <p>- Water</p>
                  </div>
                </StyledPPCard1>
                <StyledPPCard2>
                  <div>
                    <h4>Protection needed</h4>
                  </div>
                  <div>
                    <p>- 25 rad protect (Rad Suit)</p>
                  </div>
                </StyledPPCard2>
                <StyledPPCard3>
                  <div>
                    <h4>Estimated loot:</h4>
                  </div>
                  <div>
                    <p>- Behind Red door</p>
                  </div>
                  <div>
                    <p>- 2x Elite Crate</p>
                  </div>
                  <div>
                    <p>- 2x Military Crate</p>
                  </div>
                  <div>
                    <p>- 2x Normal</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledLSInstructions>
                {wtuRedLaunch.map((s) => (
                  <StyledPPCard key={s.title}>
                    <div>
                      <img src={s.img} alt={s.title} />
                    </div>
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledPPCard>
                ))}
              </StyledLSInstructions>
            </StyledLaunch>
          </StyledMainContentGrid>
        </StyledMainContent>
        <StyledBottomNav>
          <BottomNav />
        </StyledBottomNav>
      </StyledGrid>
    </>
  );
};

const StyledPPCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
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

  h2,
  h3,
  h4 {
    font-family: "rust";
  }
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
  h4 {
    font-family: "Rust";
    font-weight: initial;
  }
  z-index: 25;
  position: absolute;
`;

const StyledMainContentGrid = styled(motion.div)`
  /* height: 800vh; */
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  display: grid;
  padding: 2rem;
  grid-template-rows: 0.25fr 0.25fr 0.2fr 0.05fr 2fr 2fr;
  grid-template-columns: 1fr;
`;
const StyledMil = styled(motion.div)`
  height: 450vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.3fr 0.5fr 3fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    height: 500vh;
  }
  @media (max-width: 550px) {
    height: 600vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    height: 800vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 850vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
  }
  @media (max-width: 365px) {
    height: 900vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 1000vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 1200vh;
    grid-template-rows: 0.045fr 0.1fr 0.25fr 3.5fr;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledLaunch = styled(motion.div)`
  height: 450vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.3fr 0.3fr 3fr;
  /* grid-template-rows: auto; */
  grid-template-columns: 1fr;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    height: 500vh;
  }
  @media (max-width: 550px) {
    height: 600vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    height: 800vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 850vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
  }
  @media (max-width: 365px) {
    height: 900vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 1000vh;
    grid-template-rows: 0.05fr 0.1fr 0.3fr 3.5fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 1200vh;
    grid-template-rows: 0.035fr 0.1fr 0.25fr 3.5fr;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledTrainyard = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
  }
`;
const StyledWaterTreatement = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
  }
`;
const StyledAirfield = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
  }
`;

const StyledPPInstructions = styled(motion.div)`
  grid-row: 4/5;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  row-gap: 1%;
  column-gap: 1%;
  padding-top: 2%;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  padding-bottom: 2%;
`;

const StyledLSInstructions = styled(motion.div)`
  grid-row: 4/5;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  row-gap: 1%;
  column-gap: 1%;
  padding-top: 2%;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  padding-bottom: 2%;
`;
const StyledWTPInstructions = styled(motion.div)`
  grid-row: 4/5;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  row-gap: 1%;
  column-gap: 1%;
  padding-top: 2%;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  padding-bottom: 2%;
`;
const StyledPPTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledPPImg = styled(motion.div)`
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-bottom: 2%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const StyledPPInfo = styled(motion.div)`
  padding-top: 1%;
  grid-row: 3/4;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  @media (max-width: 768px) {
    grid-template-rows: 0.3fr 0.6fr 0.9fr;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1400px) {
  }
  row-gap: 2%;
  column-gap: 1%;
  div {
    width: 100%;
    height: 100%;
    p {
      width: 100%;
      height: 100%;
    }
  }
`;
const StyledPPCard1 = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  div {
    text-align: center;
    p {
    }
  }
  @media (max-width: 768px) {
    grid-row: 2/3;
    grid-column: 1/2;
    justify-items: start;
  }
`;
const StyledPPCard2 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  /* align-self: center;
  justify-self: center; */
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  div {
    text-align: center;
    p {
    }
  }
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-items: start;
  }
`;
const StyledPPCard3 = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  div {
    text-align: center;
    p {
    }
  }
  @media (max-width: 768px) {
    grid-row: 3/4;
    grid-column: 1/2;
    justify-items: start;
  }
`;
const StyledBlueSolutionsHeader = styled(motion.div)`
  height: 10vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  align-items: center;
  justify-items: start;

  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    grid-template-rows: auto;
    height: 8vh;
  }
  @media (max-width: 550px) {
    height: 10vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 10vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 10vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 10vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 15vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 15vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledInfoPage3 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    grid-template-rows: auto;
    height: 45vh;
  }
  @media (max-width: 550px) {
    height: 50vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 50vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 55vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 55vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 65vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 60vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledInfoPage2 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    grid-template-rows: auto;
    height: 45vh;
  }
  @media (max-width: 550px) {
    height: 50vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 55vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 60vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 60vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 65vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 60vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledInfoPage1 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    grid-template-rows: auto;
    height: 50vh;
  }
  @media (max-width: 550px) {
    height: 55vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 60vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 65vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 70vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 80vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 70vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
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
const StyledHeaderTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
`;
const StyledHeaderDesc = styled(motion.div)`
  grid-row: 3/4;
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

export default BlueCardDetails;
