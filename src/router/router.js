import DataPengguna from "../pages/DataPengguna";
import MateriTryout from "../pages/MateriTryout";
import PaketTryout from "../pages/PaketTryout";
import Tryout from "../pages/Tryout";

export const router = [
    {
        path: '/',
        element: <DataPengguna />
    },
    {
        path: '/user/detail/:id',
        element: <DataPengguna />
    },
    {
        path: '/materi/:jenis',
        element: <MateriTryout />
    },
    {
        path: '/produk',
        element: <PaketTryout />
    },
    {
        path: '/tryout/:jenis',
        element: <Tryout />
    },
    {
        path: '/tryout/:jenis/:id',
        element: <Tryout />
    },
    {
        path: '/tryout/:jenis/:id/soal',
        element: <Tryout />
    }
]