import { API } from "../../appEnums";

export const getListPembelianApi = async () => {
    try {
        const response = await fetch(API.GET_PEMBELIAN.replace(), {
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