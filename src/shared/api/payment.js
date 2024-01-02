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

export const getStatusPaymentApi = async (id) => {
    const order_id = `order-to-${id}`;
    const buffer = Buffer.from(API.SERVER_KEY);
    const encodedToken = buffer.toString('base64');

    const response = await fetch(API.GET_STATUS_PAYMENT.replace('$order_id', order_id), {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedToken}`
        }
    })

    return response.json();
}