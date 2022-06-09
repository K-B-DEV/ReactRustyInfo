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
import { wtuBluePP, wtuBlueAir, wtuBlueTrain, wtuBlueWater } from "../data";

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
                <img src={bluecard} alt="Rust Blue Card Puzzle Guide" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h2>Blue card solutions</h2>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Medium tier puzzles are accessible once you've obtained a blue
                  card from Basic (green) puzzles. They provide better loot than
                  Basic puzzles, are a bit harder, but also give access to the
                  next tier up: Advanced (Red) puzzles. This guide shows you how
                  to complete each blue puzzle, step by step.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage1>
            <StyledInfoPage2>
              <StyledHeaderImg>
                <img src={h4} alt="Where to find blue card rust" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h3>Where do you find Blue Cards?</h3>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Blue cards are found by solving Basic (Green) puzzles. If you
                  have not yet completed any of these, check out our handy guide
                  on how to complete all Basic Green Puzzles.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage2>
            <StyledInfoPage3>
              <StyledHeaderImg>
                <img src={buy} alt="Where to buy blue cards rust" />
              </StyledHeaderImg>
              <StyledHeaderTitle>
                <h3>Can you buy Blue Cards?</h3>
              </StyledHeaderTitle>
              <StyledHeaderDesc>
                <p>
                  Yes! Blue is the only type of card you can actually purchase
                  in game. They are for sale at the tools vending machine at the
                  Outpost monument and cost 100 scrap.
                </p>
              </StyledHeaderDesc>
            </StyledInfoPage3>
            <StyledBlueSolutionsHeader>
              <h2>Blue Tier Puzzles</h2>
            </StyledBlueSolutionsHeader>
            <StyledPowerPlant>
              <StyledPPTitle>
                <h2>Power Plant</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={pp} alt="Power Plant Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Green Card</p>
                  </div>
                  <div>
                    <p>- Blue Card</p>
                  </div>
                  <div>
                    <p>- Electric Fuse</p>
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
                    <p>- Behind Green door</p>
                  </div>
                  <div>
                    <p>- 5 barrels</p>
                  </div>
                  <div>
                    <p>- Behind Blue Door</p>
                  </div>
                  <div>
                    <p>- 3 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- 4 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- 1 red keycard</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledPPInstructions>
                {wtuBlueAir.map((s) => (
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
            </StyledPowerPlant>
            <StyledAirfield>
              <StyledPPTitle>
                <h2>Airfield</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={air} alt="Airfield Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Green Card</p>
                  </div>
                  <div>
                    <p>- Blue Card</p>
                  </div>
                  <div>
                    <p>- Electric Fuse x2</p>
                  </div>
                </StyledPPCard1>
                <StyledPPCard2>
                  <div>
                    <h4>Protection needed</h4>
                  </div>
                  <div>
                    <p>- 10 rad protect</p>
                  </div>
                </StyledPPCard2>
                <StyledPPCard3>
                  <div>
                    <h4>Estimated loot:</h4>
                  </div>
                  <div>
                    <p>- Behind Green door</p>
                  </div>
                  <div>
                    <p>- 1 crate (wood/military)</p>
                  </div>
                  <div>
                    <p>- Behind Blue Door</p>
                  </div>
                  <div>
                    <p>- 7 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- 1 red keycard</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledPPInstructions>
                {wtuBluePP.map((s) => (
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
            </StyledAirfield>
            <StyledTrainyard>
              <StyledPPTitle>
                <h2>Trainyard</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={train} alt="Trainyard Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Green Card (optional)</p>
                  </div>
                  <div>
                    <p>- Blue Card</p>
                  </div>
                  <div>
                    <p>- Electric Fuse</p>
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
                    <p>- Behind Green door</p>
                  </div>
                  <div>
                    <p>- 3 barrels</p>
                  </div>
                  <div>
                    <p>- 1 crate (wood/military)</p>
                  </div>
                  <div>
                    <p>- Behind Blue door</p>
                  </div>
                  <div>
                    <p>- 9 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- 1 red keycard</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledPPInstructions>
                {wtuBlueTrain.map((s) => (
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
            </StyledTrainyard>
            <StyledWaterTreatement>
              <StyledPPTitle>
                <h2>Water Treatement Plant</h2>
              </StyledPPTitle>
              <StyledPPImg>
                <img src={water} alt="Water Treatement Plant Puzzle Rust" />
              </StyledPPImg>
              <StyledPPInfo>
                <StyledPPCard1>
                  <div>
                    <h4>Requirements:</h4>
                  </div>
                  <div>
                    <p>- Blue Card</p>
                  </div>
                  <div>
                    <p>- Electric Fuse</p>
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
                    <p>- Behind blast door</p>
                  </div>
                  <div>
                    <p>- 4 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- Behind Blue door</p>
                  </div>
                  <div>
                    <p>- 6 crates (wood/military)</p>
                  </div>
                  <div>
                    <p>- 1 red keycard</p>
                  </div>
                </StyledPPCard3>
              </StyledPPInfo>

              <StyledWTPInstructions>
                {wtuBlueWater.map((s) => (
                  <StyledPPCard key={s.title}>
                    <div>
                      <img src={s.img} alt={s.title} />
                    </div>
                    <div>
                      <p>{s.title}</p>
                    </div>
                  </StyledPPCard>
                ))}
              </StyledWTPInstructions>
            </StyledWaterTreatement>
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
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  display: grid;
  /* grid-template-rows: 0.4fr 0.3fr 0.3fr 0.05fr 2fr 2fr 2fr 1fr; */
  grid-template-rows: auto;
  padding: 2rem;
  grid-template-columns: 1fr;
  /* @media (min-width: 1400px) {
    height: 1300vh;
    grid-template-rows: 0.3fr 0.3fr 0.3fr 0.1fr 2fr 2fr 2fr 1fr;
    grid-template-columns: 1fr;
  } */
`;
const StyledPowerPlant = styled(motion.div)`
  height: 260vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;

  /* @media (max-width: 1000px) {
    height: 10vh;
  } */
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
    height: 300vh;
  }
  @media (max-width: 550px) {
    height: 310vh;
    grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr;
    height: 320vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 400px) {
    height: 10vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 420vh;
    /* grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 450vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 550vh;
    grid-template-rows: 0.1fr 0.5fr 0.6fr 4fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 550vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledTrainyard = styled(motion.div)`
  height: 260vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
    height: 300vh;
  }
  @media (max-width: 550px) {
    height: 310vh;
    grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr;
  }
  @media (max-width: 420px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr;
    height: 320vh;
  }
  @media (max-width: 380px) {
    height: 300vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr; */
  }
  @media (max-width: 365px) {
    height: 450vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 550vh;
    grid-template-rows: 0.1fr 0.5fr 0.6fr 4fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 560vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledWaterTreatement = styled(motion.div)`
  height: 260vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
    height: 300vh;
  }
  @media (max-width: 550px) {
    height: 310vh;
    grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr;
  }
  @media (max-width: 420px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    height: 220vh;
  }
  @media (max-width: 400px) {
    height: 10vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 325vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr; */
  }
  @media (max-width: 365px) {
    height: 350vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 400vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 4fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 440vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledAirfield = styled(motion.div)`
  height: 260vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.5fr 2fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr;
    height: 300vh;
  }
  @media (max-width: 550px) {
    height: 310vh;
    grid-template-rows: 0.15fr 0.5fr 0.6fr 3fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr;
    height: 320vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 410vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 450vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 550vh;
    grid-template-rows: 0.1fr 0.5fr 0.6fr 4fr;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 560vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledPPInstructions = styled(motion.div)`
  grid-row: 4/5;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  row-gap: 1%;
  column-gap: 1%;
  padding-top: 2%;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  /* height: 100%;
  width: 100%; */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  align-items: center;
  justify-items: start;
  height: 10vh;
  @media (max-width: 1000px) {
    height: 10vh;
  }
  @media (max-width: 768px) {
    height: 10vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 10vh;
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 10vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 400px) {
    height: 10vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 10vh;
  }
  @media (max-width: 365px) {
    height: 10vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 20vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 13vh;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledInfoPage3 = styled(motion.div)`
  height: 35vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 1000px) {
    height: 30vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 60vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 50vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 400px) {
    height: 125vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 60vh;
  }
  @media (max-width: 365px) {
    height: 50vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 70vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 55vh;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;
const StyledInfoPage2 = styled(motion.div)`
  height: 30vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 1000px) {
    height: 30vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 60vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 50vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 400px) {
    height: 125vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 60vh;
  }
  @media (max-width: 365px) {
    height: 50vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 70vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 55vh;
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
  @media (max-width: 1000px) {
    height: 30vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 550px) {
    height: 60vh;
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 420px) {
    height: 65vh;

    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 400px) {
    height: 125vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 380px) {
    height: 70vh;
  }
  @media (max-width: 365px) {
    height: 80vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 110vh;
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 100vh;
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
