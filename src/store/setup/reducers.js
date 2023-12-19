import { combineReducers } from "redux";
import login from "../auth/login.js";
import sidebar from "../local/sidebar.js";

const reducers = combineReducers({
  login,
  sidebar,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
