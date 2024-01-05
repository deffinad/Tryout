import { GET_DETAIL_RIWAYAT_PEMBELIAN, GET_RIWAYAT_PEMBELIAN } from "../actions/types";

const initalState = {
    list_pembelian: null,
    detail_pembelian: null
};

const profileReducers = (state = initalState, action) => {
    switch (action.type) {
        case GET_RIWAYAT_PEMBELIAN:
            return {
                ...state,
                list_pembelian: action.payload
            }
        case GET_DETAIL_RIWAYAT_PEMBELIAN:
            return {
                ...state,
                detail_pembelian: action.payload
            }
        default:
            return state
    }
}

export default profileReducers;