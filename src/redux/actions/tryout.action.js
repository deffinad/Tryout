import { getListTryoutApi } from "../../shared/api/tryout"
import { fetchError, fetchStart, fetchSuccess } from "./common.action"
import { CLEAR_LIST_TRYOUT, GET_LIST_TRYOUT } from "./types"

export const clearListTryout = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_LIST_TRYOUT })
    }
}

export const getListTryout = (kategori) => {
    return (dispatch) => {
        dispatch(fetchStart())
        getListTryoutApi(kategori)
            .then((res) => {
                if(res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_LIST_TRYOUT, payload: res })
                } else {
                    dispatch(fetchError(res.messages))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}