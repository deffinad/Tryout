import { GET_LIST_MATERI, GET_DETAIL_MATERI } from "./types";

export const getListMateri = () => {
    return (dispatch) => {
        dispatch({ type: GET_LIST_MATERI })
    }
}

export const getDetailMateri = (id) => {
    return (dispatch) => {
        dispatch({ type: GET_DETAIL_MATERI, payload: id })
    }
}