import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";

export default combineReducers({
    sidebar: sidebarReducer,
});