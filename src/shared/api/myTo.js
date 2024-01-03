import { API } from "../appEnums";

export const getListMyTransactionApi = async (kategori) => {
    try {
        const response = await fetch(API.GET_LIST_TRANSAKSI.replace('$kategori', kategori), {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailMyTransactionApi = async (id) => {
    try {
        const response = await fetch(API.GET_DETAIL_TRANSAKSI.replace('$id', id), {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const addToMyTransactionApi = async (payload) => {
    try {
        const response = await fetch(API.ADD_TRANSAKSI, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailTryoutApi = async (kategori, id) => {
    try {
        const response = await fetch(API.GET_DETAIL_TRYOUT.replace('$id', id).replace('$kategori', kategori), {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getListSoalTryoutApi = async (kategori, id_tryout, id_materi) => {
    try {
        const response = await fetch(API.GET_LIST_SOAL_TRYOUT.replace('$id', id_tryout).replace('$kategori', kategori).replace('$id_materi', id_materi), {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}