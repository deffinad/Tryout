import React, { useEffect, useState } from 'react'
import ItemTipeSoal from '../../../../components/Item/ItemTipeSoal'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearListTryout, getDetailTryout } from "../../../../Redux/actions/my-to.actions";
import moment from 'moment/moment';

moment.locale('id')

const BerandaTOSaya = () => {
    const { menu, id_tryout, id_transaksi, type } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { detail } = useSelector(state => state.myTo)
    const [state, setState] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });

    useEffect(() => {
        dispatch(getDetailTryout(menu, id_tryout))
        dispatch(clearListTryout())
    }, [])

    useEffect(() => {
        let newCountDate = 0
        if (detail !== null && type !== undefined) {
            detail.materi.map(item => {
                newCountDate = newCountDate + parseInt(item.waktu_mengerjakan)
            })
            const dateNow = new Date()
            dateNow.setMinutes(dateNow.getMinutes() + parseInt(newCountDate))
            const newDate = dateNow.getTime()
            setNewTime(newDate)
        }
    }, [detail])

    const setNewTime = (countdownDate) => {
        const currentTime = new Date().getTime();
        if (countdownDate >= currentTime) {

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    }

    return (
        <section className='flex flex-col gap-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
                <div className='flex flex-col gap-4 justify-between'>
                    {
                        type !== undefined ? (
                            <h1 className="text-xl font-bold uppercase">Pembahasan</h1>
                        ): null
                    }
                    <h1 className="text-4xl font-bold uppercase">{detail?.nama}</h1>
                    {
                        type === undefined ? (
                            <div className='flex flex-col'>
                                <p className='font-semibold text-xl '>Masa Pengerjaan</p>
                                <p className='font-semibold text-base '>{moment(detail?.jadwal).format('DD MMMM YYYY')} - Tidak Ada Batas</p>
                                <p >Try Out dapat dikerjakan mulai pukul 09.00, {moment(detail?.jadwal).format('DD MMMM YYYY')}</p>
                            </div>
                        ) : null
                    }
                </div>

                {
                    type === undefined ? (
                        <div className='flex lg:justify-end'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl font-bold'>Durasi Pengerjaan</h1>
                                <div className='flex gap-2 text-white'>
                                    <div className='w-20 h-24 bg-primary rounded-[36px] flex flex-col items-center justify-center'>
                                        <p className='text-4xl font-semibold'>{state.hours || '00'}</p>
                                        <p>Jam</p>
                                    </div>
                                    <div className='w-20 h-24 bg-secondary rounded-[36px] flex flex-col items-center justify-center'>
                                        <p className='text-4xl font-semibold'>{state.minutes || '00'}</p>
                                        <p>Menit</p>
                                    </div>
                                    <div className='w-20 h-24 bg-bgRed rounded-[36px] flex flex-col items-center justify-center'>
                                        <p className='text-4xl font-semibold'>{state.seconds || '00'}</p>
                                        <p>Detik</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>

            <div className='grid grid-cols-2 mt-4 gap-4'>
                {
                    detail?.materi.map(item => (
                        <ItemTipeSoal data={item} menu={menu} idTransaksi={id_transaksi} idTryout={id_tryout} type={type}/>
                    ))
                }
            </div>
        </section>
    )
}

export default BerandaTOSaya