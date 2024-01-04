import React, { useState } from 'react'
import VerticalItem from '../VerticalItem'
import { FaChevronRight } from 'react-icons/fa6'

const VerticalCollapse = ({ item, level, active, setActive }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div key={item.id}>
      <button
        onClick={() => setToggle(!toggle)}
        className={`h-auto my-[0.25px] cursor-pointer px-[16px] py-4 relative transition-all w-full flex flex-row gap-3`}>
        {
          item.icon && (
            <div >
              {item.icon}
            </div>
          )
        }
        <div className='flex flex-1 justify-between items-center'>
          <p className=' text-base capitalize font-medium'>
            {item.title}
          </p>

          <div className={`transform ${toggle ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
            <FaChevronRight className='text-base ' />
          </div>
        </div>
      </button>

      <div className={`${toggle ? 'h-[170px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
        {item.children && item.children.map(item => (
          <div key={item.id}>
            <VerticalItem item={item} active={active} setActive={setActive} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCollapse