// import type action
import { GET_DATA_PENGGUNA, GET_DETAIL_PENGGUNA, GET_TRYOUT_USER, CLEAR_DETAIL_PENGGUNA, CLEAR_TRYOUT_USER } from "../actions/types";

const initialState = {
    list: null,
    detail: null,
    tryout: null
}

const dataPenggunaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PENGGUNA:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_PENGGUNA:
            return {
                ...state,
                detail: action.payload
            };
        case GET_TRYOUT_USER:
            return {
                ...state,
                tryout: action.payload
            };
        case CLEAR_DETAIL_PENGGUNA:
            return {
                ...state,
                detail: null
            };
        case CLEAR_TRYOUT_USER:
            return {
                ...state,
                tryout: null
            };
        default:
            return state;
    }
}

export default dataPenggunaReducer;
