import { API } from "../appEnums"

export const getTokenSnapApi = async (payload) => {
    const response = await fetch(API.GET_TOKEN_SNAP, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    return response.json()
}