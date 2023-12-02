import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Main/Dashboard';
import DaftarTryOut from '../pages/Main/DaftarTO';
import Pembayaran from '../pages/Main/Pembayaran';
import MyTryOut from '../pages/Main/MyTO';

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
        path: "/list-to/:id",
        element: <DaftarTryOut />,
    },
    {
        path: "/pembayaran",
        element: <Pembayaran />,
    },
    {
        path: "/to-saya/utbk",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/utbk/:page",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/utbk/detail/:id",
        element: <MyTryOut />,
    },
]);