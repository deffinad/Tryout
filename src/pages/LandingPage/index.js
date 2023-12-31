import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
const LandingPage = () => {
    const navigate = useNavigate();
    const isUserExist = localStorage.getItem('token');
 
    useEffect(() => {
        if (isUserExist !== null) {
            navigate('/beranda');
        };
    }, [])

    if (isUserExist !== null) {
        return null;
    }

    return (
        <section className='w-full'>
            <Navbar />

            {/* HEADER */}
            <section className='lg:h-[100vh] h-auto w-full lg:pt-[90px] pt-[150px]'>
                <div className='grid lg:grid-cols-5 lg:gap-6 gap-16 h-full grid-cols-1'>
                    <div className='h-full w-full lg:col-span-2 flex flex-col justify-center items-start gap-6 lg:px-16 px-8'>
                        <h3 className='text-2xl'>Selamat Datang di <span className='font-bold'>NAMAWEB</span></h3>
                        <p>
                            Platform edukasi yang menyediakan berbagai soal dan latihan try out secara gratis, praktis dan berkualitas dengan berbagai layanan dan program unggulan yang akan menjadi #TemanBelajar kamu dalam meraih impian.
                        </p>

                        <Button onClick={() => navigate('/daftar')} title={'Daftar Sekarang'} />
                    </div>
                    <div className='h-full w-full lg:col-span-3 flex items-end justify-center'>
                        <img alt='' src='/assets/img/landing-page.png' className='w-10/12' />
                    </div>
                </div>
            </section>

            {/* FITUR */}
            <section className='w-full bg-secondary flex flex-col gap-14 px-6 py-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='capitalize text-3xl font-semibold'>kenapa harus pakai <span className='font-bold'>NAMAWEB</span> ? </h1>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 h-full'>
                    <ItemFitur icon={'/assets/img/smartphone.png'} title={'praktis'} subtitle={'mengerjakan try out dimana saja'} />
                    <ItemFitur icon={'/assets/img/goodwill.png'} title={'kredibel'} subtitle={'soal yang disajikan dibuat tim khusus dan menyesuaikan dengan soal SNBT ter-update'} />
                    <ItemFitur icon={'/assets/img/checklist.png'} title={'pembahasan'} subtitle={'pembahasan soal yang mudah dipahami'} />
                </div>
            </section>

            {/* JADWAL */}
            <section className='w-full  flex flex-col gap-14 px-6 py-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='uppercase text-3xl font-bold text-primary'>jadwal try out terkini</h1>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 h-full'>
                    <ItemJadwal jadwal={'01 Jan - 03 Jan 2024'} />
                    <ItemJadwal jadwal={'01 Jan - 03 Jan 2024'} />
                    <ItemJadwal jadwal={'01 Jan - 03 Jan 2024'} />
                    <ItemJadwal jadwal={'01 Jan - 03 Jan 2024'} />
                </div>
            </section>

            <Footer />
        </section>
    )
}

const ItemFitur = ({ icon, title, subtitle }) => {
    return (
        <div className='grid grid-cols-12 h-full lg:gap-0 gap-4'>
            <div className='col-span-4 h-full flex items-center justify-center '>
                <img src={icon} alt='' className='w-28' />
            </div>
            <div className='col-span-8 h-full flex items-start'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl uppercase font-bold text-textColorRed'>{title}</h1>
                    <p className='capitalize text-primary text-base'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

const ItemJadwal = ({ jadwal }) => {
    return (
        <div className='grid grid-cols-2 h-full gap-2'>
            <div className='h-full flex items-center justify-center '>
                <div className='bg-primary rounded-full h-[170px] w-[130px] p-4 text-white text-center flex items-center justify-center'>
                    <span className='text-3xl uppercase font-bold'>try out 01</span>
                </div>
            </div>
            <div className='h-full flex items-center w-[100px]'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl uppercase font-bold text-primary'>{jadwal}</h1>
                </div>
            </div>
        </div>
    )
}

export default LandingPage