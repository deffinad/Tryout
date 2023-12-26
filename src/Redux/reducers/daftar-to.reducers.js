import { GET_LIST_PRODUK, GET_DETAIL_PRODUK } from "../actions/types";

const initialState = {
    list: null,
    detail: null
}

const daftarToReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUK:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_PRODUK:
            return {
                ...state,
                detail: action.payload
            };
        default:
            return state;
    }
}

export default daftarToReducer;
