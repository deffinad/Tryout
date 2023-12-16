import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";
import dataPenggunaReducer from "./dataPengguna.reducers";
import materiTryoutReducer from "./materiTryout.reducers";
import paketReducer from "./paket.reducers";
import commonReducers from "./common.reducers";

export default combineReducers({
    sidebar: sidebarReducer,
    common: commonReducers,
    users: dataPenggunaReducer,
    materi: materiTryoutReducer,
    paket: paketReducer
});