import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Search from "@material-ui/icons/Search";
import Map from "@material-ui/icons/Map";
import FiberNew from "@material-ui/icons/FiberNew";
import { changePage } from "../actions/serversActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";

const BottomNav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.servers.page);
  const location = useLocation().pathname;
  const [value, setValue] = useState(location);
  console.log(value + " <----value");
  const HandleChange = (event, newValue) => {
    // history.push(newValue);
    setValue(newValue);
    history.replace(newValue);
  };
  useEffect(() => {
    dispatch(changePage(value));
  }, [value]);
  return (
    <>
      <BottomNavigation value={value} onChange={HandleChange} showLabels>
        <BottomNavigationAction
          label="Server Lookup"
          icon={<Search />}
          value="/"

          // onClick={() => buttonClick("/")}
        />
        <BottomNavigationAction
          label="Guides"
          icon={<Map />}
          value="/Guides"
          // onClick={() => buttonClick("/Guides")}
        />
        {/* <BottomNavigationAction
          label="Updates"
          icon={<FiberNew />}
          value="/Updates"
          // onClick={() => buttonClick("/Updates")}
        /> */}
      </BottomNavigation>
    </>
  );
};

// const StyledLink = styled(Link)`
//   text-decoration: none !important;
//   overflow: hidden !important;
//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none !important;
//   }
// `;

export default BottomNav;
