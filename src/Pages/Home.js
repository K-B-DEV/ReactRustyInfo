import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
//img
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
//components
import { DataGrid } from "@material-ui/data-grid";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useWindowDimensions from "../components/window";

const columns = [
  {
    field: "rank",
    headerName: "Rank",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").rank;
    },
    editable: false,
    flex: 0.5,
  },
  {
    field: "name",
    headerName: "Name",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").name;
    },
    editable: false,
    flex: 0.8,
  },
  {
    field: `players`,
    headerName: "Pop",
    valueGetter: (params) => {
      return `${params.getValue(params.id, "attributes").players} / ${
        params.getValue(params.id, "attributes").maxPlayers
      }`;
    },
    sortComparator: (v1, v2, param1, param2) =>
      param1.api.getCellValue(param1.id, "attributes").players -
      param2.api.getCellValue(param2.id, "attributes").players,
    editable: false,
    flex: 0.4,
  },
  {
    field: `rust_last_wipe`,
    headerName: "Wiped",
    valueGetter: (params) => {
      if (params) {
        return new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "2-digit",
          hour: "numeric",
        }).format(
          new Date(
            params.getValue(params.id, "attributes").details.rust_last_wipe
          )
        );
      }
    },
    editable: false,
    flex: 0.5,
  },
  {
    field: `rust_type`,
    headerName: "Type",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").details.rust_type;
    },
    editable: false,
    flex: 0.4,
  },
];

const mobileColumns = [
  {
    field: "rank",
    headerName: "Rank",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").rank;
    },
    editable: false,
    flex: 0.5,
    hide: true,
  },
  {
    field: "name",
    headerName: "Name",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").name;
    },
    editable: false,
    flex: 0.8,
  },
  {
    field: `players`,
    headerName: "Pop",
    valueGetter: (params) => {
      return `${params.getValue(params.id, "attributes").players} / ${
        params.getValue(params.id, "attributes").maxPlayers
      }`;
    },
    sortComparator: (v1, v2, param1, param2) =>
      param1.api.getCellValue(param1.id, "attributes").players -
      param2.api.getCellValue(param2.id, "attributes").players,
    editable: false,
    flex: 0.6,
  },
  {
    field: `rust_last_wipe`,
    headerName: "Wiped",
    valueGetter: (params) => {
      if (params) {
        return new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
        }).format(
          new Date(
            params.getValue(params.id, "attributes").details.rust_last_wipe
          )
        );
      }
    },
    editable: false,
    flex: 0.7,
  },
  {
    field: `rust_type`,
    headerName: "Type",
    valueGetter: (params) => {
      return params.getValue(params.id, "attributes").details.rust_type;
    },
    editable: false,
    flex: 0.4,
    hide: true,
  },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const HomePage = () => {
  const { height, width } = useWindowDimensions();
  const { servers } = useSelector((state) => state.servers);
  const serverData = servers.data;
  console.log(serverData);
  return (
    <>
      <StyledMain>
        <img src={rustbg} alt="rustbg" />
      </StyledMain>
      <StyledGrid>
        <StyledNav>
          <Nav />
        </StyledNav>

        <StyledSearchBarContainer>
          <SearchBar></SearchBar>
        </StyledSearchBarContainer>
        <StyledSearchBarImg>
          <img src={search} alt="Search" />
        </StyledSearchBarImg>
        <StyledTableContainer>
          {serverData ? (
            <>
              {width <= 768 ? (
                <DataGrid
                  rows={serverData}
                  columns={mobileColumns}
                  pageSize={7}
                  disableSelectionOnClick
                  size="small"
                />
              ) : (
                <DataGrid
                  rows={serverData}
                  columns={columns}
                  pageSize={7}
                  disableSelectionOnClick
                  size="small"
                />
              )}
            </>
          ) : (
            ""
          )}
        </StyledTableContainer>
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
const StyledTableContainer = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledSearchBarContainer = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  z-index: 2;
  width: 100%;
  height: 100%;
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

export default HomePage;
