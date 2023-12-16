import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions/types"

const initialState = {
    loading: false,
    message: "",
    success: ""
}

const commonReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        default:
            return state
    }
}

export default commonReducers;