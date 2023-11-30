import React, { useState } from 'react'
import routesMain from '../../../pages/Main/routesConfig'
import VerticalGroup from './VerticalGroup'
import VerticalCollapse from './VerticalCollapse'
import VerticalItem from './VerticalItem'

export const Sidebar = ({toggle}) => {
  const [activeMenu, setActiveMenu] = useState(routesMain[0])
  return (
    <div className={`h-[100vh] w-[250px] z-10 bg-[#E5E5E5] fixed top-[90px] py-8 ${toggle ? 'translate-x-0' : '-translate-x-[250px]'} transition-all duration-500`}>
      {
        routesMain && routesMain.map(item => (
          <div key={item.id}>
            {item.type === 'group' && <VerticalGroup item={item} level={0}/>}
            {item.type === 'collapse' && <VerticalCollapse item={item} level={0}/>}
            {item.type === 'item' && <VerticalItem item={item} level={0} active={activeMenu} setActive={setActiveMenu}/>}
          </div>
        ))
      }
    </div>
  )
}