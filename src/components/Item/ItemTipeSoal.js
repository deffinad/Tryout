import React from 'react'
import { FaChevronRight, FaClock, FaFile } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

const ItemTipeSoal = ({ data, menu, idTransaksi, idTryout, type }) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => {
                if(type === undefined){
                    navigate(`/to-saya/${menu}/${idTransaksi}/${idTryout}/soal/${data.id_materi}`)
                }else{
                    navigate(`/to-saya/${menu}/${idTransaksi}/${idTryout}/pembahasan/${data.id_materi}`)
                }
            }}
            className='flex-1 flex flex-col p-6 h-[150px] shadow-lg rounded-3xl bg-white lg:gap-0 gap-2'
        >
            <div className='flex-1 text-start'>
                <h1 className='font-bold text-xl'>{data.nama}</h1>
            </div>
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <FaFile />
                        <p>{data.jumlah_soal} soal</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaClock />
                        <p>{data.waktu_mengerjakan} menit</p>
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