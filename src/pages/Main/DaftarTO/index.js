import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../components/Layout'
import Utbk from './UTBK'
import Poltekses from './Poltekses'
import UjianKedinasan from './UjianKedinasan'

const DaftarTryOut = () => {
    const { id } = useParams()
    return (
        <Layout>
            {
                id === 'utbk' ? <Utbk/> :
                    id === 'poltekses' ? <Poltekses/> :
                        id === 'kedinasan' ? <UjianKedinasan/> : null
            }
        </Layout>
    )
}

export default DaftarTryOut