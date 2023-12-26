import { API } from "../appEnums"

export const getListProdukApi = async () => {
    const response = await fetch(API.GET_LIST_PRODUK, {
        method: 'get',
        headers: {
            'Authorization': localStorage.getItem('token'), 
        }
    })

    return response.json();
}