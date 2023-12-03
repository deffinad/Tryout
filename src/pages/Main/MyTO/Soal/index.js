import React from 'react'
import { FaFile } from 'react-icons/fa6'
import { Button } from '../../../../components/Button'

export const SoalTryOut = () => {
    const renderNoSoal = () => {
        let arr = []
        for (let i = 1; i <= 30; i++) {
            let item = <div className='rounded-full w-12 h-12 bg-secondary flex items-center justify-center text-white text-lg'>
                <p>{i}</p>
            </div>;

            arr.push(item)
        }
        return arr
    }
    return (
        <section className='flex flex-col gap-8'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">SNBPT - TPS</h1>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-xl '>Penalaran Umum</p>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2'>
                                <FaFile />
                                <p>30 Soal</p>
                            </div>

                            <div>
                                <p>Try Out #8</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end'>
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

            <div className='mt-4 grid grid-cols-12 gap-8'>
                <div className='col-span-9'>
                    <div className='h-[500px] shadow-lg bg-white rounded-3xl p-6 '>

                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-5 gap-y-2'>
                            {renderNoSoal()}
                        </div>

                        <div>
                            <Button title={'Selesai'}/>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
