import { GET_DETAIL_PAKET, GET_LIST_PAKET } from "./types";

export const getListPaket = () => {
    return (dispatch) => {
        dispatch({ type: GET_LIST_PAKET })
    }
}

export const getDetailPaket = (id) => {
    return (dispatch) => {
        dispatch({ type: GET_DETAIL_PAKET,  payload: id})
    }
}