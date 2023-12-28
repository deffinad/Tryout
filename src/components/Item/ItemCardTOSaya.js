import React from 'react'
import { FaList } from 'react-icons/fa6'
import { Button } from '../Button'

const ItemCardTOSaya = ({ type, onClick }) => {
    return (
        <div className={`w-full h-[250px] rounded-[50px] shadow-lg flex flex-col ${type === 'premium' ? 'bg-bgRed' : type === 'paket' ? 'bg-secondary' : 'bg-textOrange'}`}>
            <div className='flex flex-1'>
                <div className='flex-1 flex flex-col gap-2 pt-6 pl-6 pb-6 pr-2 text-white'>
                    <div className='flex-1 flex items-center'>
                        <h1 className='font-bold text-xl'>Paket Tryout SNBT 2024</h1>
                    </div>
                    {
                        type === 'paket' ? (
                            <div className='flex-1 flex'>
                                <div className='grid grid-cols-2 lg:gap-x-6 gap-x-2'>
                                    <div className='flex flex-row w-full items-center gap-1'>
                                        <FaList />
                                        <p className='text-sm capitalize'>Try Out #1</p>
                                    </div>
                                    <div className='flex flex-row w-full items-center gap-1'>
                                        <FaList />
                                        <p className='text-sm capitalize'>Try Out #2</p>
                                    </div>
                                    <div className='flex flex-row w-full items-center gap-1'>
                                        <FaList />
                                        <p className='text-sm capitalize'>Try Out #3</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='w-32 bg-white border-4 rounded-tl-[100px] rounded-tr-[50px] flex flex-col items-center justify-center gap-4'>
                    <img alt='' src={type === 'premium' ? '/assets/img/premium.png' : '/assets/img/paket.png'} className='w-14 h-14' />
                    <p className='text-lg font-semibold capitalize'>{type}</p>
                </div>
            </div>
            <div className='bg-white rounded-b-[50px] px-8 py-4'>
                <div className='flex flex-col justify-center h-full gap-2'>
                    <p className='font-semibold'>Pengerjaan dimulai pada 01 Januari 2024</p>
                    <Button title={'Mulai Mengerjakan'} onClick={onClick}/>
                </div>
            </div>

        </div>
    )
}

export default ItemCardTOSaya