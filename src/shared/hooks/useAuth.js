import { useState, useEffect } from 'react';
import { authLogin } from '../api/auth';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    const checkAuthentication = () => {
        const userToken = localStorage.getItem('user');
        const objUser = JSON.parse(userToken);
        setUser(objUser);
        setAuthenticated(!!userToken);
        setToken(objUser?.token);
        localStorage.setItem('token', objUser?.token);
    };

    useEffect(() => {
        checkAuthentication();
    }, []); // Run once on component mount

    const login = async (payload) => {
        setAuthenticated(true);
        const response = await authLogin(payload);
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.result));
            return 200;
        } else {
            return 403;
        }
    };

    const logout = () => {
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
