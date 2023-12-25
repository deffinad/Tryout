import { getListPembelianApi } from "../../shared/api/pembelian"
import { fetchError, fetchStart, fetchSuccess } from "./common.action"
import { GET_LIST_PEMBELIAN } from "./types"

export const getListPembelian = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListPembelianApi()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_PEMBELIAN, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error));
            })
    }
}