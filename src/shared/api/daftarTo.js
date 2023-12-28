import { API } from "../appEnums"

export const getListProdukApi = async (kategori) => {
    const response = await fetch(API.GET_LIST_PRODUK.replace('$kategori', kategori), {
        method: 'get',
        headers: {
            'Authorization': localStorage.getItem('token'), 
        }
    })

    return response.json();
}