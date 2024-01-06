import Lottie from 'lottie-react'
import React from 'react'
import EmptyList from './emptylist.json'
const EmptyData = () => {
  return (
    <div className='flex w-full items-center justify-center flex-col'>
        <Lottie animationData={EmptyList} loop={true} style={{ height: 300, width: 300 }} />
        <p className='text-gray-400 text-2xl font-semibold'>Tidak Ada Data</p>
    </div>
  )
}

export default EmptyData