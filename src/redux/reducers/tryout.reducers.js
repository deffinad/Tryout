import { CLEAR_LIST_TRYOUT, GET_LIST_TRYOUT } from "../actions/types";

const initialState = {
    list: null
}

const tryoutReducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_TRYOUT:
            return {
                ...state,
                list: action.payload
            }
        case CLEAR_LIST_TRYOUT:
            return {
                ...state,
                list: null
            }
        default:
            return state;
    }
}

export default tryoutReducers;