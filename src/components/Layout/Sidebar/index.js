import React from 'react'

export const Sidebar = ({toggle}) => {
  return (
    <div className={`h-[100vh] w-[250px] z-10 bg-[#E5E5E5] fixed top-[90px] ${toggle ? 'translate-x-0' : '-translate-x-[250px]'} transition-all duration-500`}>

    </div>
  )
}
