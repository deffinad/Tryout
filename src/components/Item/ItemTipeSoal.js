import React from 'react'
import { FaChevronRight, FaClock, FaFile } from 'react-icons/fa6'

const ItemTipeSoal = ({ onClick }) => {
    return (
        <button onClick={onClick} className='flex-1 flex flex-col p-6 h-[150px] shadow-lg rounded-3xl bg-white'>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Penalaran Umum</h1>
            </div>
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <FaFile />
                        <p>30 soal</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaClock />
                        <p>30 menit</p>
                    </div>
                </div>

                <div>
                    <FaChevronRight />
                </div>
            </div>
        </button>
    )
}

export default ItemTipeSoal