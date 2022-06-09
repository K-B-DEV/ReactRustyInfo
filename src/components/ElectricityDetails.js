import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
import electricity from "../images/electricity.jpg";
import wire from "../images/wire.png";
import wiretool from "../images/wiretool.png";
import windmill from "../images/windmill.png";
import solarpanel1 from "../images/solarpanel.png";
import solarpanel2 from "../images/solarpanel2.png";

import connect from "../images/connectivity.png";

const ElectricityDetails = () => {
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
          <StyledGuides>
            <StyledInfoPage1>
              <StyledTitle>
                <h2>Electricity in Rust</h2>
              </StyledTitle>
              <StyledImage>
                <img src={electricity} alt="Electricity in Rust" />
              </StyledImage>
              <StyledTitle>
                <p>
                  Electricity is now a reality in Rust! With it comes a whole
                  slew of new options for base defense, lighting, quality of
                  life, and more. This guide summarizes the core items involved
                  with electricity and shows a couple examples of how it can be
                  harnessed.
                </p>
              </StyledTitle>
              <StyledTitle>
                <p>
                  As with all new additions to the game, expect things to be
                  modified and changed as new things come to light. As always,
                  we’ll keep this guide as up to date as possible.
                </p>
              </StyledTitle>
            </StyledInfoPage1>
            <StyledInfoPage2>
              <StyledTitle>
                <h3>Quick Look Video</h3>
              </StyledTitle>
              <StyledTitle>
                <p>
                  Don’t like reading so much? We’ve got you covered! Here’s a
                  quick look video on electricity from Puddy.
                </p>
              </StyledTitle>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: "40vh",
                }}
              >
                <iframe
                  src="//www.youtube.com/embed/_3ONNBm8aYk?wmode=opaque&enablejsapi=1"
                  height="100%"
                  width="100%"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen=""
                >
                  <br />
                </iframe>
              </div>
            </StyledInfoPage2>
            <StyledInfoPage3>
              <StyledTitle>
                <h3>Connectivity</h3>
              </StyledTitle>
              <StyledImage>
                <img src={connect} alt="Electricity in Rust" />
              </StyledImage>
              <StyledTitle>
                <p>
                  The proverbial glue which ties all electric items together,
                  the Wire Tool is the Rust electricians best friend. This item
                  is crafted with High Quality Metal and facilitates the flow of
                  electricity through various power hungry pieces of equipment.{" "}
                </p>
              </StyledTitle>
              <StyledTitle>
                <p>
                  To work with wire, equip it and then left click on an
                  attachment cube of one of the devices you’d like to connect
                  (it looks like an off white box which expands and turns yellow
                  when you point at it). From there you can left click on the
                  wall to pin the wire (cable management anyone?) and guide the
                  wire to the other item you’d like to connect.{" "}
                </p>
              </StyledTitle>
              <StyledTitle>
                <p>
                  Wall in the way? No problem, simply walk around to the other
                  side and the wire will go straight through. Each run of a wire
                  can travel up to 30 meters or 16 pinned points. The wire tool
                  itself has an unlimited amount of wire total at the moment, so
                  go nuts!
                </p>
              </StyledTitle>
            </StyledInfoPage3>
            <StyledInfoPage4>
              <StyledTitle>
                <h3>Wire Tool</h3>
              </StyledTitle>
              <StyledImage>
                <img src={wire} alt="Wire tool rust" />
              </StyledImage>
              <StyledWireToolCard>
                <StyledWireToolImg>
                  <StyledWireImage>
                    <img src={wiretool} alt="Wire tool rust" />
                  </StyledWireImage>
                </StyledWireToolImg>
                <StyledWireText1>
                  <h4>Research Cost</h4>
                  <p>Default</p>
                </StyledWireText1>
                <StyledWireText2>
                  <h4>Workbench</h4>
                  <p>Level 1</p>
                </StyledWireText2>
                <StyledWireText3>
                  <h4>Recycles for</h4>
                  <p>3 HQM</p>
                </StyledWireText3>
                <StyledWireText4>
                  <h4>Crafting</h4>
                  <p>5 HQM</p>
                </StyledWireText4>
                <StyledWireText5>
                  <h4>Craft time</h4>
                  <p>1 second</p>
                </StyledWireText5>
              </StyledWireToolCard>
            </StyledInfoPage4>
            <StyledInfoPage5>
              <StyledTitle>
                <h3>Power creation and storage</h3>
              </StyledTitle>
              <StyledImage>
                <img src={windmill} alt="Power Storage and Creation Rust" />
              </StyledImage>
              <StyledTitle>
                <p>
                  The first step to adding electricity to your base is to gather
                  some power. This can be done in one of two ways: Solar Panels
                  or Wind Turbines. Once you have that power, you’ll want
                  somewhere to store it. That’s where batteries come into play.
                </p>
              </StyledTitle>
            </StyledInfoPage5>
            <StyledInfoPage6>
              <StyledTitle>
                <h3>Large Solar Panels</h3>
              </StyledTitle>
              <StyledImage>
                <img src={solarpanel1} alt="Large Solare Panel Rust" />
              </StyledImage>
              <StyledTitle>
                <p>
                  Large Solar Panels provide electricity from the sun (who'd a
                  thunk?!). They can be placed on the ground or roofs then
                  hooked up to batteries (or directly to other components). As
                  you might have guessed, they only generate electricity when
                  the sun is shining. Also, the amount of electricity generated
                  varies depending on the intensity of the sun and angle of the
                  panel.{" "}
                </p>
              </StyledTitle>
              <StyledWireToolCard>
                <StyledWireToolImg>
                  <StyledWireImage>
                    <img src={solarpanel2} alt="Solar Panel Rust" />
                  </StyledWireImage>
                </StyledWireToolImg>
                <StyledWireText1>
                  <h4>Research Cost</h4>
                  <p>75 scrap</p>
                </StyledWireText1>
                <StyledWireText2>
                  <h4>Workbench</h4>
                  <p>Level 1</p>
                </StyledWireText2>
                <StyledWireText3>
                  <h4>Recycles for</h4>
                  <p>3 HQM</p>
                </StyledWireText3>
                <StyledWireText4>
                  <h4>Crafting</h4>
                  <p>5 HQM</p>
                  <p>1 Tech Trash</p>
                </StyledWireText4>
                <StyledWireText5>
                  <h4>Craft time</h4>
                  <p>3 HQM</p>
                </StyledWireText5>
              </StyledWireToolCard>
            </StyledInfoPage6>
          </StyledGuides>
        </StyledMainContent>
        <StyledBottomNav>
          <BottomNav />
        </StyledBottomNav>
      </StyledGrid>
    </>
  );
};

const StyledWireToolCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1.3fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 1%;
  }
`;
const StyledWireToolImg = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 1/4;
  grid-column: 1/2;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    visibility: hidden;
    width: 0%;
    height: 0%;
  }
`;
const StyledImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* grid-row: 2/3; */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    max-height: 35vh;
    object-fit: cover;
  }
`;

const StyledWireImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* grid-row: 2/3; */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    max-height: 15vh;
    object-fit: contain;
    @media (min-width: 800px) {
      object-fit: contain;
    }
  }
`;
const StyledWireText1 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;
const StyledWireText2 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`;
const StyledWireText3 = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
const StyledWireText4 = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
`;
const StyledWireText5 = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-row: auto;
    grid-column: auto;
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
`;

const StyledMainContent = styled(motion.div)`
  grid-row: 2/4;
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  background-color: gainsboro;
  display: grid;
  grid-template-rows: 1fr 14fr;
  /* padding: 2rem; */
  h2,
  h3,
  h4 {
    font-family: "Rust";
  }
  z-index: 25;
  position: absolute;
`;
const StyledGuides = styled(motion.div)`
  grid-row: 1/3;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
`;

const StyledInfoPage1 = styled(motion.div)`
  height: 50vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
`;

const StyledInfoPage2 = styled(motion.div)`
  height: 35vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
  @media (max-width: 768px) {
    padding-bottom: 3%;
  }
`;

const StyledInfoPage3 = styled(motion.div)`
  height: 80vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
`;

const StyledInfoPage4 = styled(motion.div)`
  height: 60vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
  @media (max-width: 768px) {
    height: 40vh;
  }
  /* padding-top: 1%; */
`;

const StyledInfoPage5 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
  @media (min-width: 768px) {
    height: 50vh;
  }
`;

const StyledInfoPage6 = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
  @media (min-width: 768px) {
    height: 90vh;
  }
`;

const StyledTitle = styled(motion.div)`
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

export default ElectricityDetails;
