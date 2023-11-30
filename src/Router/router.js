import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import LandingPage from '../pages/LandingPage';

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
]);