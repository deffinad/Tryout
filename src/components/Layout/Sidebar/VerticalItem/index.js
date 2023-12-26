import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const VerticalItem = ({ item, setActive }) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const [activeItem, setActiveItem] = useState(false);

  useEffect(() => {
    setActiveItem(pathname === item.pathUrl)
  }, [pathname, item])

  return (
    <button
      key={item.id}
      onClick={() => {
        navigation(item.pathUrl)
        setActive(item)
      }}
      className={`h-auto my-[0.25px] cursor-pointer px-[16px] py-4  relative transition-all duration-500 ${activeItem ? 'bg-secondary shadow-lg' : 'bg-transparent'} w-full flex flex-row items-center gap-3`}
    >
      {
        item.icon && (
          <div >
            {item.icon}
          </div>
        )
      }
      <p className={`${activeItem ? 'text-primary' : ''} text-base capitalize ${activeItem ? 'font-semibold' : 'font-medium'}`}>
        {item.title}
      </p>
    </button>
  )
}

export default VerticalItem