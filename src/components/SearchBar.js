import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultMemoize } from "reselect";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchServers, loadServers } from "../actions/serversActions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

function valuetext(slider) {
  return `${slider}`;
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [slider, setSlider] = useState([1, 1000]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [type, setType] = useState("Community");
  const dispatch = useDispatch();
  const sliderChange = (event, newValue) => {
    setSlider(newValue);
  };
  useEffect(() => {
    if (search !== "") {
      dispatch(searchServers(search, min, max));
    } else {
      if (slider) {
        dispatch(loadServers(min, max));
      }
    }
  }, [search, min, max]);

  return (
    <StyledFilterContainer>
      <StyledSearchBarContainer>
        <Input
          id="standard-adornment-amount"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search server by keywords..."
        />
      </StyledSearchBarContainer>
      {/* <StyledToggle>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={"Modded"}>Modded</MenuItem>
          <MenuItem value={"Community"}>Community</MenuItem>
          <MenuItem value={"Official"}>Official</MenuItem>
        </Select>
      </StyledToggle> */}
      {/* <StyledSlider>
        <Slider
          value={slider}
          onChange={sliderChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          min={0}
          max={1000}
        />
      </StyledSlider> */}
      <StyledMinPop>
        <TextField
          id="filled-number"
          label="Min Players"
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </StyledMinPop>
      <StyledMaxPop>
        <TextField
          id="filled-number2"
          label="Max Players"
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </StyledMaxPop>
    </StyledFilterContainer>
  );
};

const StyledFilterContainer = styled(motion.div)`
  display: grid;
  /* width: 91vw;
  height: 20vh; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 2vh;
  column-gap: 2vw;
  z-index: 25;
  position: relative;
`;
const StyledSearchBarContainer = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  display: grid;
  align-self: center;
  /* justify-self: center; */
`;
const StyledMinPop = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  overflow: hidden;
  align-self: center;
  justify-self: start;
`;
const StyledMaxPop = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  overflow: hidden;
  align-self: center;
  justify-self: end;
`;

const StyledToggle = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  /* background-color: darkgray; */
  overflow: hidden;
  border-radius: 0.5rem;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    position: absolute;
    padding-top: 1%;
    padding-left: 1%;
  }
`;

const StyledSlider = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  /* background-color: darkgray; */
  /* padding-top: 1%; */
  width: 100%;
  /* overflow: hidden; */
  padding-top: 5%;
  span {
    /* overflow: hidden; */
    /* height: 2vh; */
  }
`;

// const StyledSearchBox = styled(motion.div)`
//   background-color: white;
//   border-radius: 1rem;
//   height: 8vh;
//   width: 45vw;
//   align-self: center;
//   justify-self: center;
//   input {
//     width: 100%;
//     height: 100%;
//   }
//`;
export default SearchBar;
