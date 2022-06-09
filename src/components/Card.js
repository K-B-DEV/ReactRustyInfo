import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ title, img }) => {
  return (
    <>
      <StyledCardContainer>
        <StyledCardImg>
          <img src={img} alt={title} />
        </StyledCardImg>
        <StyledCardTitle>
          <h3>{title}</h3>
        </StyledCardTitle>
      </StyledCardContainer>
    </>
  );
};

const StyledCardContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 6fr 3fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 1rem;
`;

const StyledCardTitle = styled(motion.div)`
  width: 100%;
  height: 100%;
  z-index: 20;
  grid-row: 1/3;
  grid-column: 1/2;
  position: relative;
  text-align: center;
  overflow: hidden;
  /* align-self: center;
  justify-self: center; */
  h3 {
    color: white;
    font-size: 1.5rem;
    text-shadow: 1px 1px black;
  }
`;

const StyledCardImg = styled(motion.div)`
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  z-index: 1;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export default Card;
