import { GET_LIST_PEMBELIAN } from "../actions/types";

// import type action
const initialState = {
    list: null,
}

const pembelianReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PEMBELIAN:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state; 
    }
}

export default pembelianReducer;