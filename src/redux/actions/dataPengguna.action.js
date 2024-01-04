import { addUserApi, deleteUserApi, getDetailUserApi, getListUserApi, updateUserApi } from "../../shared/api/pengguna";
import { GET_DATA_PENGGUNA, GET_DETAIL_PENGGUNA } from "./types";
import { fetchError, fetchStart, fetchSuccess } from './common.action';

export const getDataPengguna = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListUserApi()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DATA_PENGGUNA, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error));
            })
    }
}

export const getDetailPengguna = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailUserApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_PENGGUNA, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error));
            })
    }
}

export const updatePengguna = (id, payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        updateUserApi(id, payload)
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

export const deletePengguna = (id, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        deleteUserApi(id)
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

export const addPengguna = (payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        addUserApi(payload)
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
