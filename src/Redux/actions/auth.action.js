import { authRegister } from "../../shared/api/auth";
import { fetchError, fetchStart, fetchSuccess } from "./common.actions";

export const register = (data, navigate) => {
    return (dispatch) => {
        dispatch((fetchStart()))
        authRegister(data)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    navigate('/masuk')
                    alert('Berhasil Daftar')
                } else {
                    dispatch(fetchError('Gagal Memuat List', res.errors))
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}