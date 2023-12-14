import DataPengguna from "../pages/DataPengguna";
import MateriTryout from "../pages/MateriTryout";
import PaketTryout from "../pages/PaketTryout";

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
        path: '/paket',
        element: <PaketTryout />
    }
]