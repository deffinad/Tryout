import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Navbar />

            {/* HEADER */}
            <section className='h-[100vh] w-full pt-[90px]'>
                <div className='grid grid-cols-5 gap-6 h-full'>
                    <div className='h-full w-full col-span-2 flex flex-col justify-center items-start gap-6 px-16'>
                        <h3 className='text-2xl'>Selamat Datang di <span className='font-bold'>NAMAWEB</span></h3>
                        <p>
                            Platform edukasi yang menyediakan berbagai soal dan latihan try out secara gratis, praktis dan berkualitas dengan berbagai layanan dan program unggulan yang akan menjadi #TemanBelajar kamu dalam meraih impian.
                        </p>

                        <Button onClick={() => navigate('/daftar')} title={'Daftar Sekarang'} />
                    </div>
                    <div className='h-full w-full col-span-3 flex items-end justify-center'>
                        <img alt='' src='/assets/img/landing-page.png' className='w-10/12' />
                    </div>
                </div>
            </section>

            {/* FITUR */}
            <section className='w-full bg-secondary flex flex-col gap-14 px-6 py-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='capitalize text-3xl font-semibold'>kenapa harus pakai <span className='font-bold'>NAMAWEB</span> ? </h1>
                </div>
                <div className='grid grid-cols-3 gap-6 h-full'>
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
                <div className='grid grid-cols-4 gap-6 h-full'>
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
        <div className='grid grid-cols-6 h-full '>
            <div className='col-span-2 h-full flex items-center justify-center '>
                <img src={icon} alt='' className='w-28' />
            </div>
            <div className='col-span-4 h-full flex items-start'>
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