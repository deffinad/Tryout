// import type action
import { GET_DATA_PENGGUNA, GET_DETAIL_PENGGUNA } from "../actions/types";

const initialState = {
    list: null,
    detail: null
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
        default:
            return state;
    }
}

export default dataPenggunaReducer;
