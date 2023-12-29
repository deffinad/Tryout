import { API } from "../../appEnums";

export const getListUserApi = async () => {
    try {
        const response = await fetch(API.GET_LIST_USER, {
            method: 'GET',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY'
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailUserApi = async (id) => {
    try {
        const response = await fetch(API.GET_DETAIL_USER.replace('$id', id), {
            method: 'GET',
            headers: {
                'Authorization': 'iJA81HfgjmqWibwwURLY'
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
                'Authorization': 'iJA81HfgjmqWibwwURLY',
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
                'Authorization': 'iJA81HfgjmqWibwwURLY',
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
                'Authorization': 'iJA81HfgjmqWibwwURLY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}