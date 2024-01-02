import { useState, useEffect } from 'react';
import { authLogin } from '../api/auth';
import { useDispatch } from 'react-redux';
import { fetchError, fetchStart, fetchSuccess } from '../../Redux/actions/common.actions'

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const dispatch = useDispatch()

    const checkAuthentication = () => {
        const userToken = localStorage.getItem('user');
        const objUser = JSON.parse(userToken);
        setUser(objUser);
        setAuthenticated(!!userToken);
        setToken(objUser?.token);
        if (objUser?.token !== undefined) {
            localStorage.setItem('token', objUser?.token);
        };
    };

    useEffect(() => {
        checkAuthentication();
    }, []); // Run once on component mount

    const login = async (payload) => {
        setAuthenticated(true);
        dispatch(fetchStart())
        const response = await authLogin(payload);
        if (response.status === 200) {
            dispatch(fetchSuccess('Login Berhasil'))
            localStorage.setItem('user', JSON.stringify(response.result));
            return {
                status: 200,
                role: response.result.role
            };
        } else {
            dispatch(fetchError(response.message))
            alert('Gagal Login')
            return {
                status: 403,
                role: ''
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthenticated(false);
    };

    return {
        authenticated,
        login,
        logout,
        user,
        token
    };
};

export default useAuth;
