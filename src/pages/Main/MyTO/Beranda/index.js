import React, { useEffect } from 'react'
import ItemTipeSoal from '../../../../components/Item/ItemTipeSoal'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearListTryout, getDetailTryout } from "../../../../Redux/actions/my-to.actions";
import moment from 'moment/moment';

moment.locale('id')

const BerandaTOSaya = () => {
    const { menu, id_tryout, id_transaksi } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { detail } = useSelector(state => state.myTo)

    useEffect(() => {
        dispatch(getDetailTryout(menu, id_tryout))
        dispatch(clearListTryout())
    }, [])

    return (
        <section className='flex flex-col gap-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">{detail?.nama}</h1>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-xl '>Masa Pengerjaan</p>
                        <p className='font-semibold text-base '>{moment(detail?.jadwal).format('DD MMMM YYYY')} - Tidak Ada Batas</p>
                        <p >Try Out dapat dikerjakan mulai pukul 09.00, {moment(detail?.jadwal).format('DD MMMM YYYY')}</p>
                    </div>
                </div>

                <div className='flex lg:justify-end'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-bold'>Durasi Pengerjaan</h1>
                        <div className='flex gap-2 text-white'>
                            <div className='w-20 h-24 bg-primary rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>03</p>
                                <p>Jam</p>
                            </div>
                            <div className='w-20 h-24 bg-secondary rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>03</p>
                                <p>Menit</p>
                            </div>
                            <div className='w-20 h-24 bg-bgRed rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>03</p>
                                <p>Detik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-4 gap-4'>
                {
                    detail?.materi.map(item => (
                        <ItemTipeSoal data={item} menu={menu} idTransaksi={id_transaksi} idTryout={id_tryout}/>
                    ))
                }
            </div>
        </section>
    )
}

export default BerandaTOSaya