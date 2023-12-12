// import type action
import { GET_LIST_MATERI, GET_DETAIL_MATERI } from "../actions/types";

const listMateri = [
    {
        id: 1,
        nama: 'Penalaran Umum'
    },
    {
        id: 2,
        nama: 'Pengetauhan dan Pemahaman Umum'
    },
    {
        id: 3,
        nama: 'Pengetauhan Kuantitatif'
    }
]

const initialState = {
    list: listMateri,
    detail: null
}

const materiTryoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_MATERI:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_MATERI:
            const lists = [...state.list];
            const detailItem = lists.find(item => item.id === Number(action.payload));
            return {
                ...state,
                detail: detailItem
            };
        default:
            return state; 
    }
}

export default materiTryoutReducer;