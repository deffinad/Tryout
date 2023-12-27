import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "./types"

export const fetchStart = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START })
    }
}

export const fetchSuccess = (message) => {
    return (dispatch) => {
        dispatch({ type: FETCH_SUCCESS, payload: message })
    }
}

export const fetchError = (message) => {
    return (dispatch) => {
        dispatch({ type: FETCH_ERROR, payload: message })
    }
}