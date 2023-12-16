// import type action
import { GET_LIST_MATERI, GET_DETAIL_MATERI } from "../actions/types";

const initialState = {
    list: null,
    detail: null
}

const materiTryoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_MATERI:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_MATERI:
            return {
                ...state,
                detail: action.payload
            };
        default:
            return state; 
    }
}

export default materiTryoutReducer;