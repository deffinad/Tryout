import { addTryoutApi, deleteTryoutApi, getDetailTryoutApi, getListTryoutApi, updateTryoutApi } from "../../shared/api/tryout"
import { fetchError, fetchStart, fetchSuccess } from "./common.action"
import { ADD_TRYOUT, CLEAR_DETAIL_TRYOUT, CLEAR_LIST_TRYOUT, DELETE_TRYOUT, GET_DETAIL_TRYOUT, GET_LIST_TRYOUT, UPDATE_TRYOUT } from "./types"

export const clearListTryout = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_LIST_TRYOUT })
    }
}

export const clearDetailTryout = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_DETAIL_TRYOUT })
    }
}

export const getListTryout = (kategori) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListTryoutApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_TRYOUT, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                    dispatch({ type: CLEAR_LIST_TRYOUT })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const getDetailTryout = (id, kategori) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailTryoutApi(id, kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_TRYOUT, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const addTryout = (data, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        addTryoutApi(data)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Tambah Tryout Berhasil'))
                    setRefresh(true)
                    dispatch({ type: ADD_TRYOUT })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const updateTryout = (id, data, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        updateTryoutApi(id, data)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Ubah Tryout Berhasil'))
                    setRefresh(true)
                    dispatch({ type: UPDATE_TRYOUT })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const deleteTryout = (id, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        deleteTryoutApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Hapus Tryout Berhasil'))
                    setRefresh(true)
                    dispatch({ type: DELETE_TRYOUT })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}