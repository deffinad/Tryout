import { GET_DASHBOARD, GET_DETAIL_RIWAYAT_PEMBELIAN, GET_RIWAYAT_PEMBELIAN } from "../actions/types";

const dashboard = {
    total: 0,
    dikerjakan: 0,
    belum_dikerjakan: 0,
    nilai_rata: 0,
    ranking: 0
}

const initalState = {
    list_pembelian: null,
    detail_pembelian: null,
    dashboard: dashboard,
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
        case GET_DASHBOARD:
            return {
                ...state,
                dashboard: action.payload
            }
        default:
            return state
    }
}

export default profileReducers;