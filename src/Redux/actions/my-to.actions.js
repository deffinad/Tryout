import { addToMyTransactionApi, getDetailTryoutApi, getListMyTransactionApi, getListSoalTryoutApi } from "../../shared/api/myTo"
import { fetchStart, fetchSuccess, fetchError } from "./common.actions"
import { ADD_TRANSAKSI, GET_DETAIL_TRANSAKSI, GET_DETAIL_TRYOUT, GET_LIST_SOAL_TRYOUT, GET_LIST_TRANSAKSI } from "./types"

export const getListMyTransaction = (kategori = 'utbk') => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListMyTransactionApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    let arrayOfTryout = [];

                    if (res.result.length > 0) {
                        res.result.map((item) => {
                            if (item.produk.tryout.length > 0)
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
                    dispatch(fetchSuccess(''))
                    dispatch({ type: ADD_TRANSAKSI })
                } else {
                    console.log(res)
                    dispatch(fetchError('Gagal memproses transaksi'))
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchError('Gagal memproses transaksi'))
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