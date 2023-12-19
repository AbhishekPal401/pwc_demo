import { combineReducers } from "redux";
import login from "../auth/login.js";
import sidebar from "../local/sidebar.js";
import users from "../app/admin/users/users.js";
import sessionHistory from "../app/admin/session/session.js"

const reducers = combineReducers({
  login,
  sidebar,
  users,
  sessionHistory,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
