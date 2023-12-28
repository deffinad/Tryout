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
                pathUrl: '/beranda'
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
                        pathUrl: '/list-to/utbk'
                    },
                    {
                        id: 'list-poltekes',
                        icon: '',
                        title: 'Poltekes',
                        type: 'item',
                        pathUrl: '/list-to/poltekes'
                    },
                    {
                        id: 'list-ujian-kedinasan',
                        icon: '',
                        title: 'Ujian Kedinasan',
                        type: 'item',
                        pathUrl: '/list-to/kedinasan'
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
                        pathUrl: '/to-saya/utbk'
                    },
                    {
                        id: 'my-poltekses',
                        icon: '',
                        title: 'Poltekses',
                        type: 'item',
                        pathUrl: '/to-saya/poltekses'
                    },
                    {
                        id: 'my-ujian-kedinasan',
                        icon: '',
                        title: 'Ujian Kedinasan',
                        type: 'item',
                        pathUrl: '/to-saya/kedinasan'
                    },
                ]
            },
            {
                id: 'payment',
                icon: <FaFileInvoice style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Payment',
                type: 'item',
                pathUrl: '/pembayaran'
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
