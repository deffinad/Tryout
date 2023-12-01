import React from 'react'

const VerticalItem = ({ item, level, active, setActive }) => {
  let activeItem = active.id === item.id;

  return (
    <button
      key={item.id}
      onClick={() => setActive(item)}
      className={`h-auto my-[0.25px] cursor-pointer px-[16px] py-4  relative transition-all duration-500 ${activeItem ? 'bg-secondary shadow-lg' : 'bg-transparent'} w-full flex flex-row items-center gap-3`}
    >
      {
        item.icon && (
          <div className='text-gray-700'>
            {item.icon}
          </div>
        )
      }
      <p className={`${activeItem ? 'text-primary' : 'text-gray-700'} text-base capitalize ${activeItem ? 'font-semibold' : 'font-medium'}`}>
        {item.title}
      </p>
    </button>
  )
}

export default VerticalItem