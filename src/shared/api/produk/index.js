import { API } from "../../appEnums";

export const getListProdukApi = async () => {
    try {
        const response = await fetch(API.GET_LIST_PRODUK, {
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

export const getDetailProdukApi = async (id) => {
    try {
        const response = await fetch(API.GET_DETAIL_PRODUK.replace('$id', id), {
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

export const addProdukApi = async (payload) => {
    try {
        const response = await fetch(API.ADD_PRODUK, {
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

export const updateProdukApi = async (id, payload) => {
    try {
        const response = await fetch(API.UPDATE_PRODUK.replace('$id', id), {
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

export const deleteProdukApi = async (id) => {
    try {
        const response = await fetch(API.DELETE_PRODUK.replace('$id', id), {
            method: 'DELETE',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}