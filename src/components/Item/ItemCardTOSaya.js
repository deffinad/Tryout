import React from 'react'
import { FaList } from 'react-icons/fa6'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

const ItemCardTOSaya = ({ data, menu }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/to-saya/${menu}/beranda/soal/1`)
    }

    return (
        <div className={`w-full h-[320px] rounded-[50px] shadow-lg flex flex-col ${data.produk.jenis === 'premium' ? 'bg-bgRed' : data.produk.jenis === 'paket' ? 'bg-secondary' : 'bg-textOrange'}`}>
            <div className='flex flex-1'>
                <div className='flex-1 flex flex-col gap-2 pt-6 pl-6 pb-6 pr-2 text-white'>
                    <div className='flex-1 flex items-center'>
                        <h1 className='font-bold text-3xl'>{data.produk.nama}</h1>
                    </div>
                    {
                        data.produk.jenis === 'paket' ? (
                            <div className='flex-1 flex'>
                                <div className='grid grid-cols-2 gap-x-6'>
                                    {data.produk.tryout.length > 0 && data.produk.tryout.map(item => (
                                        <div className='flex flex-row w-full items-center gap-1'>
                                            <FaList />
                                            <p className='text-sm capitalize'>{item.nama}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='w-36 bg-white border-4 rounded-tl-[100px] rounded-tr-[50px] flex flex-col items-center justify-center gap-4'>
                    <img alt='' src={data.produk.jenis === 'premium' ? '/assets/img/premium.png' : '/assets/img/paket.png'} className='w-24 h-24' />
                    <p className='text-lg font-semibold capitalize'>{data.produk.jenis}</p>
                </div>
            </div>
            <div className='bg-white rounded-b-[50px] px-8 py-4'>
                <div className='flex flex-col justify-center h-full gap-2'>
                    <p className='font-semibold'>Pengerjaan dimulai pada 01 Januari 2024</p>
                    <Button title={'Mulai Mengerjakan'} onClick={() => handleNavigate()} />
                </div>
            </div>

        </div>
    )
}

export default ItemCardTOSaya