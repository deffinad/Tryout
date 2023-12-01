import React from 'react'
import ItemCardTO from '../../../../components/Item/ItemCardTO'

const UjianKedinasan = () => {
  return (
    <section className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold text-gray-700'>Daftar Ujian Kedinasan</h1>

        <div className='grid grid-cols-3 gap-6'>
            <ItemCardTO/>
            <ItemCardTO/>
            <ItemCardTO/>
            <ItemCardTO/>
        </div>
        
    </section>
  )
}

export default UjianKedinasan