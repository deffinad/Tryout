import React from 'react'
import { FaList } from 'react-icons/fa6'
import { Button } from '../Button'

const ItemCardTO = () => {
    return (
        <div className='w-full h-[300px] rounded-[50px] shadow-lg flex flex-col bg-secondary'>
            <div className='flex flex-1'>
                <div className='flex-1 flex flex-col gap-2 pt-6 pl-6 pb-6 pr-2'>
                    <div className='flex-1 flex items-center'>
                        <h1 className='font-bold text-3xl text-gray-700'>Paket Tryout SNBT 2024</h1>
                    </div>
                    <div className='flex-1 flex'>
                        <div className='grid grid-cols-2 gap-x-6'>
                            <div className='flex flex-row w-full items-center gap-1'>
                                <FaList/>
                                <p className='text-sm capitalize'>Try Out #1</p>
                            </div>
                            <div className='flex flex-row w-full items-center gap-1'>
                                <FaList/>
                                <p className='text-sm capitalize'>Try Out #2</p>
                            </div>
                            <div className='flex flex-row w-full items-center gap-1'>
                                <FaList/>
                                <p className='text-sm capitalize'>Try Out #3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-36 bg-white border-4 rounded-tl-[100px] rounded-tr-[50px] flex flex-col items-center justify-center gap-4'>
                    <img alt='' src='/assets/img/paket.png' className='w-24 h-24' />
                    <p className='text-lg text-gray-700 font-semibold'>Paket</p>
                </div>
            </div>
            <div className='h-[100px] bg-white rounded-b-[50px] px-8 py-2'>
                <div className='flex items-center justify-between h-full'>
                    <div className='flex flex-col gap-1 justify-center'>
                        <p className='font-bold'>Harga Paket</p>
                        <p className='text-2xl font-semibold text-textColorRed'>Rp. 500.000</p>
                    </div>

                    <Button title={'Beli'}/>

                </div>
            </div>

        </div>
    )
}

export default ItemCardTO