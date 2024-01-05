import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions/types"

const initialState = {
    loading: false,
    message: "",
    error: ""
}

const commonReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}

export default commonReducers;