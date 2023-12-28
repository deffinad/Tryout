import React from 'react'
import ItemTipeSoal from '../../../../components/Item/ItemTipeSoal'
import { useNavigate, useParams } from 'react-router-dom'

const BerandaTOSaya = () => {
    const {menu, type} = useParams()
    const navigate = useNavigate()
    
    return (
        <section className='flex flex-col gap-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">UTBK - SNBPT #1</h1>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-xl '>Masa Pengerjaan</p>
                        <p className='font-semibold text-base '>01 Januari 2024 - Tidak Ada Batas</p>
                        <p >Try Out dapat dikerjakan mulai pukul 09.00, 1 Januari 2024</p>
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

            <div className='grid grid-cols-2 mt-4 gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl text-secondary font-bold'>TPS</h1>
                    <div className='grid grid-cols-1 gap-4'>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl text-secondary font-bold'>TPS</h1>
                    <div className='grid grid-cols-1 gap-4'>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                        <ItemTipeSoal onClick={() => navigate(`/to-saya/${menu}/${type}/1`)}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BerandaTOSaya