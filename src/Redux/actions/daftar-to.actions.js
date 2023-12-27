import { getListProdukApi } from "../../shared/api/daftarTo";
import { GET_LIST_PRODUK } from "./types";

export const getListProduk = (kategori = 'utbk') => {
    return (dispatch) => {
        getListProdukApi(kategori)
            .then((res) => {
                if (res.status === 200) {
                    dispatch({ type: GET_LIST_PRODUK, payload: res.result })
                } else {
                    alert('Failed to fetch', res.messages);
                }
            })
            .catch((error) => {
                alert('Failed to fetch', error);
            })
    }
}