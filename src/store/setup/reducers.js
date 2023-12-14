import { combineReducers } from "redux";
import { logout } from "../auth/login.js";
import login from "../auth/login.js";

const reducers = combineReducers({
  login,
});

const rootReducer = (state, action) => {
  if (action.type === logout.type) {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
