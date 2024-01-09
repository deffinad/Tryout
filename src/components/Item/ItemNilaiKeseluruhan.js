import React from 'react'
import { Button } from "../Button";
import { useNavigate } from 'react-router-dom';

const ItemNilaiKeseluruhan = ({ menu, data, key }) => {
    const navigate = useNavigate();

    const formattedNilai = (nilai) => {
        if (Number.isInteger(nilai)) {
           return nilai; 
        } else {
           return nilai.toFixed(2);
        }
     }

    return (
        <div className="grid grid-cols-2 grid-rows-1 gap-4 py-5 border-b-4 border-blue-200">
            <div className='grid grid-cols-4 grid-rows-1 gap-5'>
                <div className='col-span-1 flex items-center'>
                    <div className="flex justify-end">
                        <img alt='' width={'80px'} src='/assets/img/pngwing.png' />
                    </div>
                </div>
                <div className='col-span-3 flex flex-row items-center'>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-semibold uppercase">{data.nama}</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                    <p className='font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata</p>
                    <div className='px-4 py-2 w-[120px] h-auto bg-secondary text-white flex justify-center items-center text-4xl font-semibold rounded-full'>
                        {formattedNilai(data.rata_nilai)}
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="flex flex-col h-full justify-center gap-5">
                        <Button size="sm" title={'Lihat Selengkapnya'} bgColor={'bg-primary'} textColor={'text-white'} onClick={() => navigate(`/to-saya/${menu}/detail/${data.id_tryout}`)} />
                        <Button size="sm" title={'Pembahasan'} bgColor={'bg-bgRed'} textColor={'text-white'} hoverBgColor="hover:bg-red-900" onClick={() => navigate(`/to-saya/${menu}/beranda/${data.id_transaksi}/${data.id_tryout}/pembahasan`)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemNilaiKeseluruhan