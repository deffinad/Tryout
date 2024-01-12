import { ADD_SOAL, CLEAR_DETAIL_SOAL, CLEAR_DETAIL_TRYOUT, CLEAR_LIST_TRYOUT, DELETE_DETAIL_TRYOUT, GET_DETAIL_SOAL, GET_DETAIL_TRYOUT, GET_LIST_TRYOUT, UPDATE_SOAL, UPDATE_TRYOUT, UPLOAD_FILE } from "../actions/types";

const initialState = {
    list: null,
    detail: null,
    soal: null,
    file: null
}

const tryoutReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_TRYOUT:
            return {
                ...state,
                list: action.payload
            }
        case GET_DETAIL_TRYOUT:
            return {
                ...state,
                detail: action.payload
            }
        case CLEAR_LIST_TRYOUT:
            return {
                ...state,
                list: null
            }
        case CLEAR_DETAIL_SOAL:
            return {
                ...state,
                soal: null
            }
        case CLEAR_DETAIL_TRYOUT:
            return {
                ...state,
                detail: null
            }
        case UPDATE_TRYOUT:
            return {
                ...state,
            }
        case ADD_SOAL:
            return {
                ...state,
            }
        case UPDATE_SOAL:
            return {
                ...state,
            }
        case GET_DETAIL_SOAL:
            return {
                ...state,
                soal: action.payload
            }
        case DELETE_DETAIL_TRYOUT:
            return {
                ...state,
            }
        case UPLOAD_FILE:
            return {
                ...state,
                file: action.payload.url,
            }
        default:
            return state;
    }
}

export default tryoutReducers;