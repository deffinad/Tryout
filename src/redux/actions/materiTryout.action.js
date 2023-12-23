import { GET_LIST_MATERI, GET_DETAIL_MATERI, } from "./types";
import { getDetailMateriApi, getListMateriApi, updateMateriApi, deleteMateriApi, addMateriApi } from "../../shared/api/materi";
import { fetchError, fetchStart, fetchSuccess } from './common.action';

export const getListMateri = (kategori) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListMateriApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_MATERI, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error));
            })
    }
}

export const getDetailMateri = (id, kategori) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailMateriApi(id, kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_MATERI, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const updateMateri = (id, payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        updateMateriApi(id, payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Update Data Berhasil'))
                    setRefresh(true)
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const deleteMateri = (id, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        deleteMateriApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Hapus Data Berhasil'))
                    setRefresh(true)
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const addMateri = (payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        addMateriApi(payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Tambah Data Berhasil'))
                    setRefresh(true)
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}
