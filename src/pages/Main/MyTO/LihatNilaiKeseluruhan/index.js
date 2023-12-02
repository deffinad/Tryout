import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button";

const LihatNilaiKeseluruhan = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 py-5 border-b-4 border-blue-200">
                <div className='grid grid-cols-4 grid-rows-1 gap-5'>
                    <div className='col-span-1'>
                        <div className="flex justify-end">
                            <img alt='' width={'80px'} src='/assets/img/pngwing.png' />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-semibold uppercase">Nilai Try Out</h1>
                            <h1 className="text-4xl font-semibold uppercase">UTBK - SNBPT #1</h1>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                    <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                        <p className='font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata</p>
                        <div className='h-[100px] w-[200px] bg-secondary text-white flex justify-center items-center text-[85px] rounded-full'>
                            786
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="flex flex-col h-full justify-center gap-5">
                            <Button size="sm" title={'Lihat Selengkapnya'} bgColor={'bg-primary'} textColor={'text-white'} onClick={() => navigate('/to-saya/utbk/detail/1')} />
                            <Button size="sm" title={'Pembahasan'} bgColor={'bg-bgRed'} textColor={'text-white'} hoverBgColor="hover:bg-red-900" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 py-5 border-b-4 border-blue-200">
                <div className='grid grid-cols-4 grid-rows-1 gap-5'>
                    <div className='col-span-1'>
                        <div className="flex justify-end">
                            <img alt='' width={'80px'} src='/assets/img/pngwing.png' />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-semibold uppercase">Nilai Try Out</h1>
                            <h1 className="text-4xl font-semibold uppercase">UTBK - SNBPT #1</h1>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                    <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                        <p className='font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata</p>
                        <div className='h-[100px] w-[200px] bg-secondary text-white flex justify-center items-center text-[85px] rounded-full'>
                            786
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="flex flex-col h-full justify-center gap-5">
                            <Button size="sm" title={'Lihat Selengkapnya'} bgColor={'bg-primary'} textColor={'text-white'} />
                            <Button size="sm" title={'Pembahasan'} bgColor={'bg-bgRed'} textColor={'text-white'} hoverBgColor="hover:bg-red-900" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LihatNilaiKeseluruhan;