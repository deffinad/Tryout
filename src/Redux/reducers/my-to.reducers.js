import { GET_DETAIL_TRANSAKSI, GET_LIST_TRANSAKSI } from "../actions/types"

const initialState = {
    list: null,
    detail: null,
}

const MyToReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_TRANSAKSI:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_TRANSAKSI:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}

export default MyToReducers;