import { FaCircleInfo, FaClipboard, FaFileInvoice, FaHouse, FaList } from "react-icons/fa6"

const routesMain = [
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
                url: ''
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
                        url: ''
                    },
                    {
                        id: 'poltekses',
                        icon: '',
                        title: 'Poltekses',
                        type: 'item',
                        url: ''
                    },
                    {
                        id: 'ujian-kedinasan',
                        icon: '',
                        title: 'Ujian Kedinasan',
                        type: 'item',
                        url: ''
                    },
                ],
            },
            {
                id: 'my-tryout',
                icon: <FaClipboard style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Try Out Saya',
                type: 'item',
                url: ''
            },
            {
                id: 'payment',
                icon: <FaFileInvoice style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Payment',
                type: 'item',
                url: ''
            },
            {
                id: 'panduan',
                icon: <FaCircleInfo style={{width:'24px', height: '24px'}} className="text-primary"/>,
                title: 'Panduan',
                type: 'item',
                url: ''
            },
        ]
    }
]

export default routesMain
