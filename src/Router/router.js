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
        path: "/beranda",
        element: <Dashboard />,
    },
    {
        path: "/profile-saya",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/edit/:id",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/riwayat-pembelian",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/riwayat-pembelian/detail/:id",
        element: <ProfilePage />,
    },
    {
        path: "/profile-saya/pengaturan",
        element: <ProfilePage />,
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
        path: "/to-saya/:menu",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/:menu/lihat-nilai-keseluruhan",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/:menu/detail/:id",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/:menu/beranda/:id",
        element: <MyTryOut />,
    },
    {
        path: "/to-saya/:menu/soal/:id",
        element: <MyTryOut />,
    },
]);