import React, { useState } from 'react'
import VerticalGroup from './VerticalGroup'
import VerticalCollapse from './VerticalCollapse'
import VerticalItem from './VerticalItem'
import { routesMain } from '../../pages/routesConfig'

export const Sidebar = ({ toggle }) => {
  const [activeMenu, setActiveMenu] = useState({})
  return (
    <aside
      className={`h-[100vh] w-[270px] z-10 bg-bgSidebar fixed top-[90px] shadow-lg py-8 ${toggle ? 'translate-x-0' : '-translate-x-[270px]'} transition-all duration-500 overflow-y-auto`}
      style={{}}
      >
      {
        routesMain && routesMain.map(item => (
          <div key={item.id}>
            {item.type === 'group' && <VerticalGroup item={item} level={0} active={activeMenu} setActive={setActiveMenu} />}
            {item.type === 'collapse' && <VerticalCollapse item={item} level={0} active={activeMenu} setActive={setActiveMenu} />}
            {item.type === 'item' && <VerticalItem item={item} level={0} setActive={setActiveMenu} />}
          </div>
        ))
      }
    </aside>
  )
}
