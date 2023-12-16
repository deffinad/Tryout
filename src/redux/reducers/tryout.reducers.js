import { CLEAR_DETAIL_TRYOUT, CLEAR_LIST_TRYOUT, GET_DETAIL_TRYOUT, GET_LIST_TRYOUT, UPDATE_TRYOUT } from "../actions/types";

const initialState = {
    list: null,
    detail: null
}

const tryoutReducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_TRYOUT:
            return {
                ...state,
                list: action.payload
            }
        case GET_DETAIL_TRYOUT:
            return {
                ...state,
                detail: action.payload
            }
        case CLEAR_LIST_TRYOUT:
            return {
                ...state,
                list: null
            }
        case CLEAR_DETAIL_TRYOUT:
            return {
                ...state,
                detail: null
            }
        case UPDATE_TRYOUT:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default tryoutReducers;