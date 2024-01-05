import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../api/pengguna';

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
        const response = await authLogin(payload);
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.result));
            return {
                status: 200,
                role: response.result.role
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