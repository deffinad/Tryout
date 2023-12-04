import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa6'
import { Button } from '../../../../components/Button'
import { RadioButton } from '../../../../components/RadioButton'

const Pembahasan = () => {
    const [activeSoalIndex, setActiveSoalIndex] = useState(1)
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
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">PEMBAHASAN SNBPT - TPS</h1>
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
            </div>

            <div className='mt-4 grid grid-cols-12 gap-8'>
                <div className='col-span-9 flex flex-col gap-6'>
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
                            <Button title={'Sebelumnya'} />
                            <Button title={'Selanjutnya'} />
                        </div>
                    </div>

                    <div className='shadow-lg bg-white rounded-3xl p-6 pt-16 relative flex flex-col gap-6'>
                        <div className='absolute top-0 left-0 py-1 w-40 flex items-center justify-center text-white rounded-tl-3xl rounded-br-lg bg-primary'>
                            <p>Pembahasan</p>
                        </div>
                        <div className='bg-gray-100 py-2'>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-5 gap-y-2'>
                            {renderNoSoal()}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Pembahasan