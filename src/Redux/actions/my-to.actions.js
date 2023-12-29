import { addToMyTransactionApi, getListMyTransactionApi } from "../../shared/api/myTo"
import { fetchStart, fetchSuccess, fetchError } from "./common.actions"
import { ADD_TRANSAKSI, GET_DETAIL_TRANSAKSI, GET_LIST_TRANSAKSI } from "./types"

export const getListMyTransaction = (kategori = 'utbk') => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListMyTransactionApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    let arrayOfTryout = [];

                    if (res.result.length > 0 && res.result.produk.tryout.length > 0) {
                        res.result.map(item => {
                            return arrayOfTryout = [...arrayOfTryout, ...item.produk.tryout]
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