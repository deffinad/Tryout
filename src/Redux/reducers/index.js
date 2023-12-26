import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";
import daftarToReducer from "./daftar-to.reducers";

export default combineReducers({
    sidebar: sidebarReducer,
    produk: daftarToReducer
});