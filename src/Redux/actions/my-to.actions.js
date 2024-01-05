import { addMyToAnswerApi, addToMyTransactionApi, getDetailMyTryoutApi, getDetailTryoutApi, getListMyTransactionApi, getListMyTryoutApi, getListSoalTryoutApi, getMyTryoutAnswerApi } from "../../shared/api/myTo"
import { fetchStart, fetchSuccess, fetchError } from "./common.actions"
import { ADD_ANSWER, ADD_TRANSAKSI, CLEAR_LIST_SOAL_TRYOUT, GET_DETAIL_MY_TRYOUT, GET_DETAIL_TRANSAKSI, GET_DETAIL_TRYOUT, GET_LIST_MY_TRYOUT, GET_LIST_SOAL_TRYOUT, GET_LIST_TRANSAKSI, GET_MY_TRYOUT_ANSWER } from "./types"

export const getListMyTransaction = (kategori = 'utbk') => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListMyTransactionApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    let arrayOfTryout = [];

                    if (res.result.length > 0) {
                        res.result.map((item) => {
                            if (item.produk.tryout.length > 0 && item.status === 'berhasil')
                                item.produk.tryout.map((child) => {
                                    child['jenis'] = item.produk.jenis
                                    child['id_transaksi'] = item.id
                                    return arrayOfTryout = [...arrayOfTryout, child]
                                })
                        })
                    }
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_TRANSAKSI, payload: arrayOfTryout })
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal memuat List'))
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchError('Terjadi Kesalahan'))
            })
    }
}

export const getDetailMyTransaction = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailMyTransaction(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_TRANSAKSI, payload: res })
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal memuat detail'))
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchError('Terjadi Kesalahan'))
            })
    }
}

export const addToMyTransaction = (payload) => {
    return dispatch => {
        dispatch(fetchStart())
        addToMyTransactionApi(payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Pembayaran berhasil diproses'))
                    dispatch({ type: ADD_TRANSAKSI })
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal memproses pembayaran'))
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchError('Gagal memproses pembayaran'))
            })
    }
}

export const getDetailTryout = (kategori, id) => {
    return dispatch => {
        dispatch(fetchStart())
        getDetailTryoutApi(kategori, id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_TRYOUT, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal memproses detail tryout'))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal memproses detail tryout'))
            })
    }
}

export const getListSoalTryout = (menu, id_tryout, id_materi) => {
    return dispatch => {
        dispatch(fetchStart())
        getListSoalTryoutApi(menu, id_tryout, id_materi)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_SOAL_TRYOUT, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal memproses list soal tryout'))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal memproses list soal tryout'))
            })
    }
}

export const clearListTryout = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_LIST_SOAL_TRYOUT })
    }
}

export const addMyToAnswer = (payload) => {
    return dispatch => {
        dispatch(fetchStart())
        addMyToAnswerApi(payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Jawaban Telah Berhasil Di Kirim'))
                    dispatch({ type: ADD_ANSWER })
                } else {
                    console.log(res)
                    dispatch(fetchError('Jawaban Gagal Di Kirim'))
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchError('Jawaban Gagal Di Kirim'))
            })
    }
}

export const getListMyTryout = () => {
    return dispatch => {
        dispatch(fetchStart())
        getListMyTryoutApi()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_MY_TRYOUT, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal memproses list my tryout'))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal memproses list my tryout'))
            })
    }
}

export const getDetailMyTryout = (id_tryout) => {
    return dispatch => {
        dispatch(fetchStart())
        getDetailMyTryoutApi(id_tryout)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DETAIL_MY_TRYOUT, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal memproses list my tryout'))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal memproses list my tryout'))
            })
    }
}


export const getMyTryoutAnswer = (id_transkasi, id_tryout, id_materi) => {
    return dispatch => {
        dispatch(fetchStart())
        getMyTryoutAnswerApi(id_transkasi, id_tryout, id_materi)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_MY_TRYOUT_ANSWER, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal memproses my tryout answer'))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal memproses my tryout answer'))
            })
    }
}