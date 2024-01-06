import React from 'react'
import 'moment/locale/id'
import moment from 'moment'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

const ItemCardTOSaya = ({ data, menu }) => {
    moment.locale('id');
    const today  = new Date();
    const navigate = useNavigate();
    const waktuPengerjaan = moment(data?.jadwal).format('LL');

    const handleNavigate = () => {
        navigate(`/to-saya/${menu}/beranda/${data.id_transaksi}/${data.id}`)
    }

    return (
        <div className={`w-full h-[320px] rounded-[50px] shadow-lg flex flex-col ${data?.jenis === 'premium' ? 'bg-bgRed' : data?.jenis === 'paket' ? 'bg-secondary' : 'bg-textOrange'}`}>
            <div className='flex flex-1'>
                <div className='flex-1 flex flex-col gap-2 pt-6 pl-6 pb-6 pr-2 text-white'>
                    <div className='flex-1 flex items-center'>
                        <h1 className='font-bold text-3xl'>{data?.nama}</h1>
                    </div>
                </div>
                <div className='w-36 bg-white border-4 rounded-tl-[100px] rounded-tr-[50px] flex flex-col items-center justify-center gap-4'>
                    <img alt='' src={data?.jenis === 'premium' ? '/assets/img/premium.png' : '/assets/img/paket.png'} className='w-24 h-24' />
                    <p className='text-lg font-semibold capitalize'>{data?.jenis ? data.jenis : ''}</p>
                </div>
            </div>
            <div className='bg-white rounded-b-[50px] px-8 py-4'>
                <div className='flex flex-col justify-center h-full gap-2'>
                    <p className='font-semibold'>Pengerjaan dimulai pada {waktuPengerjaan}</p>
                    <Button disabled={today <= new Date(waktuPengerjaan) || data?.status} title={data?.status ? 'Sudah Dikerjakan' : 'Mulai Mengerjakan'} bgColor={data?.status ? 'bg-green-500' : 'bg-blue-500'} hoverBgColor={data?.status ? 'bg-green-600' : 'bg-blue-600'} onClick={() => handleNavigate()} />
                </div>
            </div>

        </div>
    )
}

export default ItemCardTOSaya