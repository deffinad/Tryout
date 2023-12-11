// import type action
import { GET_DATA_PENGGUNA, GET_DETAIL_PENGGUNA } from "../actions/types";

const users = [
    {
        id: 1,
        nama: 'Lilis Sukmawati',
        email: 'lilis@gmail.com',
        asal_sekolah: 'SMK 1',
        ttl: '13/08/2000',
        jenis_kelamin: 'Perempuan',
        no_hp: '085764321234'
    },
    {
        id: 2,
        nama: 'Fauziah Dharmawanti',
        email: 'fauziah@gmail.com',
        asal_sekolah: 'SMK 2',
        ttl: '09/11/2000',
        jenis_kelamin: 'Perempuan',
        no_hp: '085764321234'
    },
]

const initialState = {
    datas: users,
    detail: null
}

const dataPenggunaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PENGGUNA:
            return {
                ...state,
                datas: action.payload
            };
        case GET_DETAIL_PENGGUNA:
            const data = [...state.datas];
            const detailItem = data.find(item => item.id === Number(action.payload));
            return {
                ...state,
                detail: detailItem
            };
        default:
            return state;
    }
}

export default dataPenggunaReducer;
