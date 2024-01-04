import { getDetailMyTransactionApi, getListMyTransactionApi } from "../../shared/api/myTo"
import { fetchError, fetchStart, fetchSuccess } from "./common.actions"
import { GET_DETAIL_RIWAYAT_PEMBELIAN, GET_RIWAYAT_PEMBELIAN } from "./types";

export const getRiwayatPembelian = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        getListMyTransactionApi('all')
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''));
                    dispatch({type: GET_RIWAYAT_PEMBELIAN, payload: res })
                } else {
                    console.log(res);
                    dispatch(fetchError('Gagal memuat data'));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchError('Gagal memuat data. Kesalahan Server'))
            })
    }
}

export const getDetailRiwayat = (id) => {
    return (dispatch) => {
        dispatch(fetchStart());
        getDetailMyTransactionApi(id)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''));
                    dispatch({ type: GET_DETAIL_RIWAYAT_PEMBELIAN, payload: res });
                } else {
                    console.log(res);
                    dispatch(fetchError('Gagal memuat detail'));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchError('Gagal memuat detail. Kesalahan Server'))
            })
    }
}