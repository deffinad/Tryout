import React from 'react'

export const Footer = ({ bgColor }) => {
    return (
        <section>
            <div className={`w-full ${bgColor ? bgColor : 'bg-primary'} p-16 grid grid-cols-12 gap-16 text-white`}>
                <div className='col-span-5 flex flex-col gap-6'>
                    <h1 className='font-bold uppercase text-xl'>logonamaweb</h1>
                    <p>LOGONAMAWEB merupakan sebuah platform try out yang menyediakan berbagai macam solusi belajar khususnya untuk siswa SMA dan Alumni untuk persiapan tes masuk Perguruan Tinggi</p>
                </div>
                <div className='col-span-2 flex flex-col gap-6'>
                    <h1 className='font-bold uppercase text-xl'>paket</h1>
                    <div className='flex flex-col'>
                        <p>Paket 01</p>
                        <p>Paket 02</p>
                        <p>Paket 03</p>
                    </div>
                </div>
                <div className='col-span-3 flex flex-col gap-6'>
                    <h1 className='font-bold uppercase text-xl'>lainnya</h1>
                    <p>Panduan Penggunaan Platform</p>
                </div>
                <div className='col-span-2 flex flex-col gap-6'>
                    <h1 className='font-bold uppercase text-xl'>kontak</h1>
                    <div className='flex flex-col'>
                        <p>Paket 01</p>
                        <p>Paket 02</p>
                        <p>Paket 03</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
