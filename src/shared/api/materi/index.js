import { API } from "../../appEnums";

export const getListMateriApi = async (kategori) => {
    try {
        const response = await fetch(API.GET_LIST_MATERI.replace('$kategori', kategori), {
            method: 'GET',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ'
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailMateriApi = async (id, kategori) => {
    try {
        const response = await fetch(API.GET_DETAIL_MATERI.replace('$kategori', kategori).replace('$id', id), {
            method: 'GET',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ'
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const updateMateriApi = async (id, payload) => {
    try {
        const response = await fetch(API.UPDATE_MATERI.replace('$id', id), {
            method: 'PUT',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const deleteMateriApi = async (id) => {
    try {
        const response = await fetch(API.DELETE_MATERI.replace('$id', id), {
            method: 'DELETE',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const addMateriApi = async (payload) => {
    try {
        const response = await fetch(API.ADD_MATERI, {
            method: 'POST',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}