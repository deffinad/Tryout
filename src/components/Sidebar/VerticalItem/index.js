import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const VerticalItem = ({ item, setActive }) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const [activeItem, setActiveItem] = useState(false);
  const IconComponent = FaIcons[item.icon];

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
      className={`h-auto my-[0.25px] cursor-pointer px-[16px] py-4  relative transition-all duration-500 ${activeItem ? 'bg-bgMenuActive shadow-lg' : 'bg-transparent'} w-full flex flex-row items-center gap-3`}
    >
      {
        item.icon && (
          <div >
            <IconComponent style={{ width: '24px', height: '24px' }} className={`${activeItem ? 'text-bgSidebar' : 'text-secondary'}`} />
          </div>
        )
      }
      <p className={`${activeItem ? 'text-bgSidebar' : 'text-textColor'} text-base capitalize ${activeItem ? 'font-bold' : 'font-medium'}`}>
        {item.title}
      </p>
    </button>
  )
}

export default VerticalItem