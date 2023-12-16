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