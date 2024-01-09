import React, { Fragment, useEffect } from 'react'
import useAuth from '../../../shared/hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from '../../../Redux/actions/auth.action';

const Dashboard = () => {
   const { user } = useAuth();
   const dispatch = useDispatch()
   const { dashboard } = useSelector(state => state.profile)

   useEffect(() => {
      const dataDashboard = dispatch(getDashboard())
   }, [])

   const formattedNilai = (nilai) => {
      if (Number.isInteger(nilai)) {
         return nilai; 
      } else {
         return nilai.toFixed(2);
      }
   }

   return (
      <Fragment>
         {/* Greetings */}
         <h1 className='mb-8 text-2xl text-primary'>Hai, <span className='italic font-semibold'>{user?.nama}</span> Selamat Datang Kembali!</h1>
         {/* first card */}
         <div className='flex flex-col gap-10'>
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
                              {dashboard?.total || 0}
                           </div>
                        </div>
                        <div className='grid grid-rows-1 grid-cols-4 items-center'>
                           <p className='col-span-2'>Sudah Dikerjakan</p>
                           <div className='p-1 w-[35px] text-center rounded-full col-span-1 bg-primary font-semibold text-white text-[18px]'>
                              {dashboard?.dikerjakan || 0}
                           </div>
                        </div>
                        <div className='grid grid-rows-1 grid-cols-4 items-center'>
                           <p className='col-span-2'>Belum Dikerjakan</p>
                           <div className='p-1 w-[35px] text-center rounded-full col-span-1 bg-bgRed font-semibold text-white text-[18px]'>
                              {dashboard?.belum_dikerjakan || 0}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='grid grid-rows-1 grid-cols-2 gap-4'>
                  <div className='col-span-1'>
                     <div className='h-[80%] bg-secondary text-white flex justify-center items-center text-[100px] rounded-full'>
                        {dashboard?.ranking || 0}
                     </div>
                     <p className='mt-2 font-bold text-center text-[1rem] uppercase'>Ranking</p>
                  </div>
                  <div className='col-span-1'>
                     <div className='h-[80%] bg-primary text-white flex justify-center items-center text-[100px] rounded-full'>
                        {formattedNilai(dashboard?.nilai_rata ) || 0}
                     </div>
                     <p className='mt-2 font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata TO</p>
                  </div>
               </div>
            </div>
            {/* second card */}
            <div className='w-full bg-gray-200 p-6 shadow-lg'>
               {/* title */}
               <h1 className='text-textColorRed text-2xl font-semibold uppercase mb-5'>Kategori</h1>
               {/* row card */}
               <div className='grid grid-cols-3 grid-rows-1 gap-6'>
                  {/* first card */}
                  <div className='flex flex-col gap-2'>
                     <p className='text-textOrange text-[sm] font-bold uppercase'>SNBPT</p>
                     <div className='w-[25%]'>
                        <img alt='' src='/assets/img/graduation-hat.png' />
                     </div>
                     <p className='text-sm font-light'>Persiapan SNBT (Seleksi Nasional Berdasarkan Tes)
                        mode soal sesuai dengansoal SNBT Ter-Update,
                        dilengkapi Pembahasan, rangking nasional</p>
                  </div>
                  {/* second card */}
                  <div className='flex flex-col gap-2'>
                     <p className='text-textOrange text-[sm] font-bold uppercase'>Ujian Mandiri</p>
                     <div className='w-[25%]'>
                        <img alt='' src='/assets/img/exam.png' />
                     </div>
                     <p className='text-sm font-light'>Persiapan Ujian mandiri PTN seperti SIMAK UI, CBT
                        UGM, UM UNDIP, dsb dengan pembahasan lengkap</p>
                  </div>
                  {/* third card */}
                  <div className='flex flex-col gap-2'>
                     <p className='text-textOrange text-[sm] font-bold'>Ujian Kedinasan</p>
                     <div className='w-[25%]'>
                        <img alt='' src='/assets/img/city-hall.png' />
                     </div>
                     <p className='text-sm font-light'>Persiapan Ujian Kedinasan Seperti IPDN, STAN,
                        STIS, dsb, dengan sistem penilaian kedinasan,
                        pembahasan lengkap</p>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Dashboard;