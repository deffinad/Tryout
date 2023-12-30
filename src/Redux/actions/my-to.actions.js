import { addToMyTransactionApi, getListMyTransactionApi } from "../../shared/api/myTo"
import { getStatusPaymentApi } from "../../shared/api/payment"
import { fetchStart, fetchSuccess, fetchError } from "./common.actions"
import { ADD_TRANSAKSI, GET_DETAIL_TRANSAKSI, GET_LIST_TRANSAKSI, GET_STATUS_PAYMENT } from "./types"

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

export const getStatusPayment = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getStatusPaymentApi(id)
            .then((res) => {
                dispatch(fetchSuccess())
                dispatch({ type: GET_STATUS_PAYMENT, payload: res })
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchError('Gagal memproses!'))
            })
    }
}