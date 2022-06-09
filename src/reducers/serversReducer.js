const initialState = {
  servers: {},
  page: {},
  isLoading: true,
};

const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVERS":
      return {
        ...state,
        servers: action.payload.servers,
        isLoading: false,
      };
    case "SEARCH_SERVERS":
      return {
        ...state,
        servers: action.payload.servers,
        isLoading: false,
      };
    case "LOADING_MOVIE":
      return {
        ...state,
        isLoading: true,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload.page,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default serversReducer;
