import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";
import dataPenggunaReducer from "./dataPengguna.reducers";
import materiTryoutReducer from "./materiTryout.reducers";
import paketReducer from "./paket.reducers";

export default combineReducers({
    sidebar: sidebarReducer,
    users: dataPenggunaReducer,
    materi: materiTryoutReducer,
    paket: paketReducer
});