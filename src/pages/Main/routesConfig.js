const routesMain = [
    {
        id: 'main',
        title: 'Main',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                icon: '',
                title: 'Dashboard',
                type: 'item',
                url: ''
            },
            {
                id: 'list-tryout',
                icon: '',
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
                icon: '',
                title: 'Try Out Saya',
                type: 'item',
                url: ''
            },
            {
                id: 'payment',
                icon: '',
                title: 'Payment',
                type: 'item',
                url: ''
            },
            {
                id: 'panduan',
                icon: '',
                title: 'Panduan',
                type: 'item',
                url: ''
            },
        ]
    }
]

export default routesMain
