import { combineReducers } from "redux";
import sidebarReducer from "./sidebar.reducers";
import dataPenggunaReducer from "./dataPengguna.reducers";
import materiTryoutReducer from "./materiTryout.reducers";
import produkReducer from "./produk.reducers";
import commonReducers from "./common.reducers";
import tryoutReducers from "./tryout.reducers";

export default combineReducers({
    sidebar: sidebarReducer,
    common: commonReducers,
    users: dataPenggunaReducer,
    materi: materiTryoutReducer,
    produk: produkReducer,
    tryout: tryoutReducers
});