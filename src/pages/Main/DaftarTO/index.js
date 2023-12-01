import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../components/Layout'

const DaftarTryOut = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <Layout>
            {
                id === 'utbk' ? <div>Daftar UTBK</div> :
                    id === 'poltekses' ? <div>Daftar Poltekses</div> :
                        id === 'kedinasan' ? <div>Daftar Ujian Kedinasan</div> : null
            }
        </Layout>
    )
}

export default DaftarTryOut