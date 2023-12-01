import React from 'react'
import Layout from '../../../components/Layout'

const Dashboard = () => {
   return (
      <Layout>
         <h1 className='mb-5 text-2xl text-primary'>Hai, Username Selamat Datang Kembali!</h1>
         <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div className='grid grid-cols-4 grid-rows-1 gap-5'>
               <div className='col-span-1'>
                  <img alt='' width={'100%'} src='/assets/img/test1.png' />
               </div>
               <div className='col-span-3'>
                  <h1 className='text-2xl uppercase text-primary font-bold'>Tryout Saya</h1>
                  <div className='ps-4 grid gap-2'>
                     <div className='grid grid-rows-1 grid-cols-4 items-center'>
                        <p className='col-span-2'>Terdaftar</p>
                        <div className='p-1 w-[35px] text-center rounded-full col-span-1 bg-secondary font-semibold text-white text-[18px]'>
                           5
                        </div>
                     </div>
                     <div className='grid grid-rows-1 grid-cols-4 items-center'>
                        <p className='col-span-2'>Sudah Dikerjakan</p>
                        <div className='p-1 w-[35px] text-center rounded-full col-span-1 bg-primary font-semibold text-white text-[18px]'>
                           1
                        </div>
                     </div>
                     <div className='grid grid-rows-1 grid-cols-4 items-center'>
                        <p className='col-span-2'>Belum Dikerjakan</p>
                        <div className='p-1 w-[35px] text-center rounded-full col-span-1 bg-bgRed font-semibold text-white text-[18px]'>
                           4
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='grid grid-rows-1 grid-cols-2 gap-4'>
               <div className='col-span-1'>
                  <div className='h-[80%] bg-secondary text-white flex justify-center items-center text-[100px] rounded-full'>
                     111
                  </div>
                  <p className='mt-2 font-bold text-center text-[1rem] uppercase'>Ranking</p>
               </div>
               <div className='col-span-1'>
                  <div className='h-[80%] bg-primary text-white flex justify-center items-center text-[100px] rounded-full'>
                     532
                  </div>
                  <p className='mt-2 font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata TO</p>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Dashboard;