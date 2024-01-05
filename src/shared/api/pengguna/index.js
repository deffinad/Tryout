import { API } from "../../appEnums";

export const authLogin = async (payload) => {
    const response = await fetch(API.AUTH_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    return response.json();
}

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

export const updateUserApi = async (id, payload) => {
    try {
        const response = await fetch(API.UPDATE_USER.replace('$id', id), {
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

export const deleteUserApi = async (id) => {
    try {
        const response = await fetch(API.DELETE_USER.replace('$id', id), {
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

export const addUserApi = async (payload) => {
    try {
        const response = await fetch(API.ADD_USER, {
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