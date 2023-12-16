import { addProdukApi, deleteProdukApi, getDetailProdukApi, getListProdukApi, updateProdukApi } from "../../shared/api/produk";
import { CLEAR_DETAIL_PAKET, GET_DETAIL_PAKET, GET_LIST_PAKET } from "./types";
import { fetchError, fetchStart, fetchSuccess } from './common.action';

export const getListProduk = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListProdukApi()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_PAKET, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const getDetailProduk = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getDetailProdukApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch({ type: GET_DETAIL_PAKET, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}

export const addProduk = (payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        addProdukApi(payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Tambah Produk Berhasil'))
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

export const updateProduk = (id, payload, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        updateProdukApi(id, payload)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Update Produk Berhasil'))
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

export const deleteProduk = (id, setRefresh) => {
    return (dispatch) => {
        dispatch(fetchStart())
        deleteProdukApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess('Hapus Produk Berhasil'))
                    setRefresh(true)
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error   ))
            })
    }
}

export const clearDetailPaket = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_DETAIL_PAKET })
    }
}