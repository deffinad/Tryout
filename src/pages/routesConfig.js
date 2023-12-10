import { FaListCheck } from "react-icons/fa6";

export const routesMain = [
    {
        id: '/',
        // icon: <FaHouse style={{width:'24px', height: '24px'}} className="text-secondary"/>,
        icon: "FaHouse",
        title: 'Data Pengguna',
        type: 'item',
        pathUrl: '/'
    },
    {
        id: 'materi-tryout',
        icon: <FaListCheck style={{width:'24px', height: '24px'}} className="text-secondary"/>,
        title: 'Materi Tryout',
        type: 'collapse',
        children: [
            {
                id: 'materi-utbk',
                icon: '',
                title: 'UTBK',
                type: 'item',
                pathUrl: '/materi/utbk'
            },
            {
                id: 'materi-poltekes',
                icon: '',
                title: 'Poltekes',
                type: 'item',
                pathUrl: '/materi/poltekes'
            },
            {
                id: 'materi-kedinasan',
                icon: '',
                title: 'Kedinasan',
                type: 'item',
                pathUrl: '/materi/kedinasan'
            },
        ],
    },
] 