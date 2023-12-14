import { GET_DETAIL_PAKET, GET_LIST_PAKET } from "../actions/types"

const listPaket = [
    {
        id: 1,
        jenis_to: 'UTBK - SNBT',
        nama_paket: 'Premium 1',
        deskripsi: 'Deskripsi',
        harga: 100000,
        premium: true
    },
    {
        id: 2,
        jenis_to: 'UTBK - SNBT',
        nama_paket: 'Paket 2',
        deskripsi: 'Deskripsi',
        harga: 79000,
        premium: false
    },
]

const initialState = {
    list: listPaket,
    detail: null
}

const paketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PAKET:
            return {
                ...state,
                list: action.payload
            };
        case GET_DETAIL_PAKET:
            return {
                ...state,
                detail: action.payload
            };
        default:
            return state
    }
}

export default paketReducer;