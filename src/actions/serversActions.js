import axios from "axios";
// import { helium_stats } from "../api";
import { server_stats, server_search } from "../api";
//action creator
export const loadServers = (min_pop, max_pop) => async (dispatch) => {
  //Fetch Axios
  const serversData = await axios.get(server_stats(min_pop, max_pop));
  dispatch({
    type: "GET_SERVERS",
    payload: {
      servers: serversData.data,
    },
  });
};

export const searchServers = (search, slider1, slider2) => async (dispatch) => {
  const serverSearchData = await axios.get(
    server_search(search, slider1, slider2)
  );
  dispatch({
    type: "SEARCH_SERVERS",
    payload: {
      servers: serverSearchData.data,
    },
  });
};

export const changePage = (newPage) => async (dispatch) => {
  dispatch({
    type: "CHANGE_PAGE",
    payload: {
      page: newPage,
    },
  });
};
