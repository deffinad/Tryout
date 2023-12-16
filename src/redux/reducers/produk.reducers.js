import { CLEAR_DETAIL_PAKET, GET_DETAIL_PAKET, GET_LIST_PAKET } from "../actions/types"

const initialState = {
    list: null,
    detail: null
}

const produkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PAKET:
            return {
                ...state,
                list: action.payload
            };
        case CLEAR_DETAIL_PAKET:
            return {
                ...state,
                detail: null
            };
        case GET_DETAIL_PAKET:
            return {
                ...state,
                detail: action.payload
            };
        default:
            return state
    }
}

export default produkReducer;