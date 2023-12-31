import { ADD_ANSWER, CLEAR_LIST_SOAL_TRYOUT, GET_DETAIL_MY_TRYOUT, GET_DETAIL_TRANSAKSI, GET_DETAIL_TRYOUT, GET_LIST_MY_TRYOUT, GET_LIST_SOAL_TRYOUT, GET_LIST_TRANSAKSI, GET_MY_TRYOUT_ANSWER } from "../actions/types"

const initialState = {
    list: null,
    detail: null,
    listSoal: null,
    listNilaiKeseluruhan: null,
    myAnswer: null
}

const MyToReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_TRANSAKSI:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_TRANSAKSI:
            return {
                ...state,
                detail: action.payload
            }
        case GET_DETAIL_TRYOUT:
            return {
                ...state,
                detail: action.payload
            }
        case GET_LIST_SOAL_TRYOUT:
            return {
                ...state,
                listSoal: action.payload
            }
        case CLEAR_LIST_SOAL_TRYOUT:
            return {
                ...state,
                listSoal: null
            }
        case ADD_ANSWER:
            return {
                ...state,
            }
        case GET_LIST_MY_TRYOUT:
            return {
                ...state,
                listNilaiKeseluruhan: action.payload
            };
        case GET_DETAIL_MY_TRYOUT:
            return {
                ...state,
                detail: action.payload
            };
        case GET_MY_TRYOUT_ANSWER:
            return {
                ...state,
                myAnswer: action.payload
            };
        default:
            return state
    }
}

export default MyToReducers;