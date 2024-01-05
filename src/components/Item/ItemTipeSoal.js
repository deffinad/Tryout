import React from 'react'
import { FaChevronRight, FaClock, FaFile } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

const ItemTipeSoal = ({ data, menu, idTransaksi, idTryout, type }) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => {
                if (type === undefined) {
                    if(!data.sudah_dikerjakan){
                        navigate(`/to-saya/${menu}/${idTransaksi}/${idTryout}/soal/${data.id_materi}`)
                    }
                } else {
                    navigate(`/to-saya/${menu}/${idTransaksi}/${idTryout}/pembahasan/${data.id_materi}`)
                }
            }}
            className={`flex-1 flex flex-col p-6 min-h-[170px] shadow-lg rounded-3xl bg-white lg:gap-2 gap-2 ${type === undefined && data.sudah_dikerjakan ? 'cursor-no-drop' : 'cursor-pointer'}`}
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

            <div className='flex items-center gap-2'>
                <div className={`${data.sudah_dikerjakan ? 'bg-green-300' : 'bg-red-300'} rounded px-2 py-1`}>
                    <p>{data.sudah_dikerjakan ? 'Sudah Dikerjakan' : 'Belum Dikerjakan'}</p>
                </div>
            </div>
        </button >
    )
}

export default ItemTipeSoal