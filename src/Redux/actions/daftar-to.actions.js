import { getListProdukApi } from "../../shared/api/daftarTo";
import { fetchError, fetchStart, fetchSuccess } from "./common.actions";
import { GET_LIST_PRODUK } from "./types";

export const getListProduk = (kategori = 'utbk') => {
    return (dispatch) => {
        dispatch((fetchStart()))
        getListProdukApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_PRODUK, payload: res.result })
                } else {
                    dispatch(fetchError('Gagal Memuat List', res.errors))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}