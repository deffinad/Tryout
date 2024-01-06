import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import ItemCardTO from '../../../components/Item/ItemCardTO'
import { getListProduk } from '../../../Redux/actions/daftar-to.actions'
import { API } from '../../../shared/appEnums'
import EmptyData from '../../../components/EmptyData'

const DaftarTryOut = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { list } = useSelector(state => state.produk);


    useEffect(() => {
        const midtransScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const midtransClientKey = API.CLIENT_KEY;

        let scriptTag = document.createElement('script');
        scriptTag.src = midtransScript;
        scriptTag.setAttribute('data-client-key', midtransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        }
    }, [])

    useEffect(() => {
        if (pathname === `/list-to/${id}`) {
            dispatch(getListProduk(id));
        }
    }, [dispatch, pathname, id])

    return (
        <section className='flex flex-col gap-8'>
            <h1 className='text-2xl font-bold capitalize'>Daftar {id}</h1>

            {
                list !== null && list.length > 0 ? (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                        {
                            list.map(item => (
                                <Fragment key={item.id}>
                                    <ItemCardTO data={item} kategori={id} />
                                </Fragment>
                            ))
                        }
                    </div>
                ): <EmptyData />
            }

        </section>
    )
}

export default DaftarTryOut