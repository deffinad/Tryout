import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";
import daftarToReducer from "./daftar-to.reducers";
import commonReducer from "./common.reducers";
import MyToReducers from "./my-to.reducers";

export default combineReducers({
    common: commonReducer,
    sidebar: sidebarReducer,
    produk: daftarToReducer,
    myTo: MyToReducers,
});