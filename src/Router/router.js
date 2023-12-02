import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Main/Dashboard';
import DaftarTryOut from '../pages/Main/DaftarTO';
import Pembayaran from '../pages/Main/Pembayaran';
import MyTryOut from '../pages/Main/MyTO';
import ProfilePage from '../pages/Main/Profile';

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
        element: <Dashboard />,
    },
    {
        path: "/profile-saya",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/:page",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/edit/:id",
        element: <ProfilePage />,
    },
    {
        path: "/daftar/:id",
        element: <DaftarTryOut />,
    },
    {
        path: "/pembayaran",
        element: <Pembayaran />,
    },
    {
        path: "/my-to/utbk",
        element: <MyTryOut />,
    },
    {
        path: "/my-to/utbk/:page",
        element: <MyTryOut />,
    },
    {
        path: "/my-to/utbk/detail/:id",
        element: <MyTryOut />,
    },
]);