import { FaListCheck, FaBook } from "react-icons/fa6";

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
        icon: <FaListCheck style={{ width: '24px', height: '24px' }} className="text-secondary" />,
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
    {
        id: 'soal-tryout',
        icon: <FaBook style={{ width: '24px', height: '24px' }} className="text-secondary" />,
        title: 'Soal',
        type: 'collapse',
        children: [
            {
                id: 'soal-utbk',
                icon: '',
                title: 'UTBK',
                type: 'item',
                pathUrl: '/tryout/utbk'
            },
            {
                id: 'soal-poltekes',
                icon: '',
                title: 'Poltekes',
                type: 'item',
                pathUrl: '/tryout/poltekes'
            },
            {
                id: 'soal-kedinasan',
                icon: '',
                title: 'Kedinasan',
                type: 'item',
                pathUrl: '/tryout/kedinasan'
            },
        ],
    },
    {
        id: 'pembahasan',
        icon: "FaBookOpenReader",
        title: 'Pembahasan',
        type: 'item',
        pathUrl: '/pembahasan'
    },
    {
        id: 'list-paket',
        icon: "FaFolderOpen",
        title: 'Produk',
        type: 'item',
        pathUrl: '/produk'
    },
    {
        id: 'pembelian',
        icon: "FaCartShopping",
        title: 'Pembelian',
        type: 'item',
        pathUrl: '/pembelian'
    },
    {
        id: 'jadwal-tryout',
        icon: "FaRegCalendarDays",
        title: 'Jadwal Tryout',
        type: 'item',
        pathUrl: '/jadwal-tryout'
    },
] 