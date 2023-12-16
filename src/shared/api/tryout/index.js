import { API } from "../../appEnums";

export const getListTryoutApi = async (kategori) => {
    try {
        const response = await fetch(API.GET_LIST_TRYOUT.replace('$kategori', kategori), {
            method: 'GET',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailTryoutApi = async (id, kategori) => {
    try {
        const response = await fetch(API.GET_DETAIL_TRYOUT.replace('$kategori', kategori).replace('$id', id), {
            method: 'GET',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const addTryoutApi = async (data) => {
    try {
        const response = await fetch(API.ADD_TRYOUT, {
            method: 'POST',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const updateTryoutApi = async (id, data) => {
    try {
        const response = await fetch(API.UPDATE_TRYOUT.replace('$id', id), {
            method: 'PUT',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const deleteTryoutApi = async (id) => {
    try {
        const response = await fetch(API.DELETE_TRYOUT.replace('$id', id), {
            method: 'DELETE',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}