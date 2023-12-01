import React from 'react'
import ItemCardTO from '../../../../components/Item/ItemCardTO'

const Utbk = () => {
  return (
    <section className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold text-gray-700'>Daftar UTBK - SNBT</h1>

        <div className='grid grid-cols-3'>
            <ItemCardTO/>
        </div>
        
    </section>
  )
}

export default Utbk