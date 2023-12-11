import { GET_DATA_PENGGUNA, GET_DETAIL_PENGGUNA } from "./types";

export const getDataPengguna = () => {
    return (dispatch) => {
        dispatch({ type: GET_DATA_PENGGUNA })
    }
}

export const getDetailPengguna = (id) => {
    return (dispatch) => {
        dispatch({ type: GET_DETAIL_PENGGUNA, payload: id })
    }
}