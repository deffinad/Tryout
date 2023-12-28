import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ItemCardTO from '../../../components/Item/ItemCardTO'

const DaftarTryOut = () => {
    const { id } = useParams()
    return (
        <Layout>
            <section className='flex flex-col gap-8'>
                <h1 className='text-2xl font-bold capitalize'>Daftar {id}</h1>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <ItemCardTO type={'premium'} />
                    <ItemCardTO type={'premium'} />
                    <ItemCardTO type={'paket'} />
                    <ItemCardTO type={'biasa'} />
                </div>

            </section>
        </Layout>
    )
}

export default DaftarTryOut