import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import LandingPage from '../pages/LandingPage';
import Main from '../pages/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/masuk",
        element: <LoginPage />,
    },
    {
        path: "/daftar",
        element: <RegisterPage />,
    },
    {
        path: "/home",
        element: <Main />,
    },
]);