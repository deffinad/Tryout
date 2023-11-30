import React from 'react'
import VerticalItem from '../VerticalItem'
import VerticalCollapse from '../VerticalCollapse'

const VerticalGroup = ({item,level}) => {
  return (
    <>
    <div className={`h-[40px] my-[0.25px] pl-[16px] pr-[16px] font-semibold cursor-pointer transition-all `}>
      {item.title}
    </div>

    {
      item.children && (
        <>
        {
          item.children.map(item => (
            <div>
              {item.type === 'group' && <VerticalGroup item={item} level={level}/>}
              {item.type === 'collapse' && <VerticalCollapse item={item} level={level}/>}
              {item.type === 'item' && <VerticalItem item={item} level={level}/>}
            </div>
          ))
        }
        </>
      )
    }
    </>
  )
}

export default VerticalGroup