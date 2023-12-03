import React from 'react'

export const ItemCardPembayaran = () => {
    return (
        <div className='w-full rounded-3xl shadow-lg flex flex-col p-6 bg-white'>
            <div className='flex flex-col gap-2 border-b-4 pb-4'>
                <h1 className='uppercase text-3xl font-semibold '>Paket Premium</h1>

                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-lg font-medium text-gray-400 line-through'>Rp. 650.000</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-secondary'>Rp. 650.000</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-6 gap-4 pt-4'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <img alt='' src='/assets/img/checklist-verified.png'/>
                    </div>
                    <p>Try Out UTBK</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <img alt='' src='/assets/img/checklist-verified.png'/>
                    </div>
                    <p>Try Out UTBK</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <img alt='' src='/assets/img/checklist-verified.png'/>
                    </div>
                    <p>Try Out UTBK</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <img alt='' src='/assets/img/checklist-verified.png'/>
                    </div>
                    <p>Try Out UTBK</p>
                </div>
            </div>

        </div>
    )
}
