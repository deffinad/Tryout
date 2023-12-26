import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import ItemCardTO from '../../../components/Item/ItemCardTO'
import { getListProduk } from '../../../Redux/actions/daftar-to.actions'

const DaftarTryOut = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { list } = useSelector(state => state.produk);

    useEffect(() => {
        if (pathname === '/list-to/utbk') {
            dispatch(getListProduk());
        }
    }, [dispatch, pathname])

    return (
        <section className='flex flex-col gap-8'>
            <h1 className='text-2xl font-bold capitalize'>Daftar {id}</h1>

            <div className='grid grid-cols-3 gap-6'>
                {list !== null ? (
                    list.map(item => (
                        <ItemCardTO data={item} />
                    ))
                ) : (<>Tidak Ada Data</>)}
            </div>

        </section>
    )
}

export default DaftarTryOut