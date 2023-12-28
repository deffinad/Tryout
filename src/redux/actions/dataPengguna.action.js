import { getDetailUserApi, getListUserApi } from "../../shared/api/pengguna";
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