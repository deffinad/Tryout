import React from 'react'
import ItemCardTO from '../../../../components/Item/ItemCardTO'

const Poltekses = () => {
  return (
    <section className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold text-gray-700'>Daftar Poltekses</h1>

        <div className='grid grid-cols-3 gap-6'>
            <ItemCardTO/>
            <ItemCardTO/>
            <ItemCardTO/>
            <ItemCardTO/>
        </div>
        
    </section>
  )
}

export default Poltekses