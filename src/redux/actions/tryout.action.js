import { addSoalApi, addTryoutApi, deleteDetailTryoutApi, deleteTryoutApi, getDetailSoalApi, getDetailTryoutApi, getListTryoutApi, updateSoalApi, updateTryoutApi } from "../../shared/api/tryout"
import { fetchError, fetchStart, fetchSuccess } from "./common.action"
import { ADD_SOAL, ADD_TRYOUT, CLEAR_DETAIL_SOAL, CLEAR_DETAIL_TRYOUT, CLEAR_LIST_TRYOUT, DELETE_DETAIL_TRYOUT, DELETE_TRYOUT, GET_DETAIL_SOAL, GET_DETAIL_TRYOUT, GET_LIST_TRYOUT, UPDATE_SOAL, UPDATE_TRYOUT } from "./types"

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
export const clearDetailSoal = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_DETAIL_SOAL })
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
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal menambah Tryout'))
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
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal mengubah Tryout'))
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

export const deleteDetailTryout = (jenis, id, id_materi, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        deleteDetailTryoutApi(jenis, id, id_materi)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Hapus Detail Tryout Berhasil'))
                    setRefresh(true)
                    dispatch({ type: DELETE_DETAIL_TRYOUT })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const addSoalTryout = (data, kategori, id, navigation) => {
    return (dispatch) => {
        dispatch(fetchStart())
        addSoalApi(data, kategori, id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Tambah Soal Berhasil'))
                    dispatch({ type: ADD_SOAL })
                    navigation(`/tryout/${kategori}/${id}`)
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const updateSoalTryout = (data, kategori, id, navigation) => {
    return (dispatch) => {
        dispatch(fetchStart())
        updateSoalApi(data, kategori, id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Update Soal Berhasil'))
                    dispatch({ type: UPDATE_SOAL })
                    navigation(`/tryout/${kategori}/${id}`)
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}


export const getDetailSoal = (id, kategori, id_materi) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailSoalApi(id, kategori, id_materi)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_SOAL, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}