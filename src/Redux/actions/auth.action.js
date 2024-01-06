import Swal from "sweetalert2";
import { authRegister, getDashboardApi, updateProfileApi } from "../../shared/api/auth";
import { fetchError, fetchStart, fetchSuccess } from "./common.actions";
import { GET_DASHBOARD } from "./types";

export const register = (data, navigate) => {
    return (dispatch) => {
        dispatch((fetchStart()))
        authRegister(data)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    navigate('/masuk')
                    Swal.fire({
                        icon: 'success',
                        text: 'Berhasil Melakukan Pendaftaran'
                    })
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
                    newUserData['dasboard'] = currentUser.dashboard
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

export const getDashboard = () => {
    return (dispatch) => {
        dispatch((fetchStart()))
        getDashboardApi()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccess(''))
                    dispatch({ type: GET_DASHBOARD, payload: res.result })
                } else {
                    dispatch({ type: GET_DASHBOARD, payload: res.result })
                }
            })
            .catch((error) => {
                dispatch(fetchError(error))
            })
    }
}