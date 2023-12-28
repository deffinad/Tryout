import { API } from "../appEnums"

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