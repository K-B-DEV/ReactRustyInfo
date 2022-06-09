import { combineReducers } from "redux";
import serversReducer from "../reducers/serversReducer";

const rootReducer = combineReducers({
  servers: serversReducer,
});

export default rootReducer;
