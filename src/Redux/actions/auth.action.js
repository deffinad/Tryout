import { authRegister, updateProfileApi } from "../../shared/api/auth";
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

export const updateProfileUser = (id, payload, navigate) => {
    return (dispatch) => {
        dispatch(fetchStart());
        updateProfileApi(id, payload)
            .then((res) => {
                if (res.status === 200) {
                    const currentUser = JSON.parse(localStorage.getItem('user'));
                    const newUserData = { ...payload };
                    newUserData['dashboard'] = currentUser.dashboard
                    newUserData['token'] = currentUser.token
                    localStorage.setItem('user', JSON.stringify(newUserData));

                    dispatch(fetchSuccess('Berhasil merubah data'));
                    setTimeout(() => {
                        navigate('/profile-saya')
                    }, [2000])
                } else {
                    console.log('error', res);
                    dispatch(fetchError('Gagal merubah data'));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchError(error));
            })
    }
}