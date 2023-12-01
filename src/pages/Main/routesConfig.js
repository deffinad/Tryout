import { FaCircleInfo, FaClipboard, FaFileInvoice, FaHouse, FaList } from "react-icons/fa6"

export const routesMain = [
    {
        id: 'main',
        title: 'Main',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                icon: <FaHouse style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Dashboard',
                type: 'item',
                pathUrl: '/home'
            },
            {
                id: 'list-tryout',
                icon: <FaList style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Daftar Try Out ',
                type: 'collapse',
                children: [
                    {
                        id: 'utbk-snbt',
                        icon: '',
                        title: 'UTBK - SNBT',
                        type: 'item',
                        pathUrl: '/daftar/utbk'
                    },
                    {
                        id: 'poltekses',
                        icon: '',
                        title: 'Poltekses',
                        type: 'item',
                        pathUrl: '/daftar/poltekses'
                    },
                    {
                        id: 'ujian-kedinasan',
                        icon: '',
                        title: 'Ujian Kedinasan',
                        type: 'item',
                        pathUrl: '/daftar/kedinasan'
                    },
                ],
            },
            {
                id: 'my-tryout',
                icon: <FaClipboard style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Try Out Saya',
                type: 'item',
                pathUrl: ''
            },
            {
                id: 'payment',
                icon: <FaFileInvoice style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Payment',
                type: 'item',
                pathUrl: ''
            },
            {
                id: 'panduan',
                icon: <FaCircleInfo style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Panduan',
                type: 'item',
                pathUrl: ''
            },
        ]
    }
]
