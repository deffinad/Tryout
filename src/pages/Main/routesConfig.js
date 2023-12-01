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
                        id: 'list-utbk-snbt',
                        icon: '',
                        title: 'UTBK - SNBT',
                        type: 'item',
                        pathUrl: '/daftar/utbk'
                    },
                    {
                        id: 'list-poltekses',
                        icon: '',
                        title: 'Poltekses',
                        type: 'item',
                        pathUrl: '/daftar/poltekses'
                    },
                    {
                        id: 'list-ujian-kedinasan',
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
                type: 'collapse',
                children: [
                      {
                        id: 'my-utbk-snbt',
                        icon: '',
                        title: 'UTBK - SNBT',
                        type: 'item',
                        pathUrl: '/my-to/utbk'
                    },
                    {
                        id: 'my-poltekses',
                        icon: '',
                        title: 'Poltekses',
                        type: 'item',
                        pathUrl: '/my-to/poltekses'
                    },
                    {
                        id: 'my-ujian-kedinasan',
                        icon: '',
                        title: 'Ujian Kedinasan',
                        type: 'item',
                        pathUrl: '/my-to/kedinasan'
                    },
                ]
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
