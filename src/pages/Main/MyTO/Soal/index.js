import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa6'
import { Button } from '../../../../components/Button'
import { RadioButton } from '../../../../components/RadioButton'
import { useSelector } from 'react-redux'

export const SoalTryOut = () => {
    const [activeSoalIndex, setActiveSoalIndex] = useState(1)
    const { open } = useSelector(state => state.sidebar)
    const renderNoSoal = () => {
        let arr = []
        for (let i = 1; i <= 30; i++) {
            let item = <button onClick={() => setActiveSoalIndex(i)} className={`rounded-full w-12 h-12 ${activeSoalIndex === i ? 'bg-secondary' : 'bg-gray-400'} flex items-center justify-center text-white text-lg transition-all duration-300`}>
                <p>{i}</p>
            </button>;

            arr.push(item)
        }
        return arr
    }
    return (
        <section className='flex flex-col gap-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
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

            <div className='mt-4 grid lg:grid-cols-12 grid-cols-1 gap-8'>
                <div className='lg:col-span-9'>
                    <div className='min-h-[500px] shadow-lg bg-white rounded-3xl p-6 pt-16 relative flex flex-col gap-6'>
                        <div className='absolute top-0 left-0 py-1 w-28 flex items-center justify-center text-white rounded-tl-3xl rounded-br-lg bg-primary'>
                            <p>Soal {activeSoalIndex}</p>
                        </div>
                        <div className='bg-gray-100 py-2'>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>

                        <div className='flex flex-col'>
                            <RadioButton title={'Lorem Ipsum Color Sit Amet'} />
                            <RadioButton title={'Lorem Ipsum Color Sit Amet'} />
                            <RadioButton title={'Lorem Ipsum Color Sit Amet'} />
                            <RadioButton title={'Lorem Ipsum Color Sit Amet'} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <Button title={'Sebelumnya'} onClick={() => setActiveSoalIndex(activeSoalIndex - 1)}/>
                            <Button title={'Selanjutnya'} onClick={() => setActiveSoalIndex(activeSoalIndex + 1)} />
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-3 lg:block hidden'>
                    <div className='flex flex-col gap-8'>
                        <div className={`grid ${open ? 'lg:grid-cols-4' : 'grid-cols-5'} gap-y-2`}>
                            {renderNoSoal()}
                        </div>

                        <div>
                            <Button title={'Selesai'} />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
