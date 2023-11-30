import React from 'react'

const VerticalItem = ({ item, level, active, setActive }) => {
  return (
    <button className={`h-auto my-[0.25px] cursor-pointer px-[16px] py-2 relative transition-all bg-secondary w-full shadow-sm flex flex-row items-center gap-3`}>
      {
        item.icon && (
          item.icon
        )
      }
      <p className='text-primary text-lg capitalize font-semibold'>
        {item.title}
      </p>
    </button>
  )
}

export default VerticalItem