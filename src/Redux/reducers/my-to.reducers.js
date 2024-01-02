import { GET_DETAIL_TRANSAKSI, GET_DETAIL_TRYOUT, GET_LIST_SOAL_TRYOUT, GET_LIST_TRANSAKSI } from "../actions/types"

const initialState = {
    list: null,
    detail: null,
    listSoal: null
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
        case GET_DETAIL_TRYOUT:
            return {
                ...state,
                detail: action.payload
            }
        case GET_LIST_SOAL_TRYOUT:
            return {
                ...state,
                listSoal: action.payload
            }
        default:
            return state
    }
}

export default MyToReducers;