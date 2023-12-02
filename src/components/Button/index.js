import React from 'react'

export const Button = ({type = 'contained', onClick = () => {}, bgColor, textColor, title, hoverBgColor = '', size = 'md' }) => {
    return (
        type === 'contained' ? (
            <button onClick={onClick} className={`rounded-xl ${size === 'md' ? 'py-2  px-8 text-xl' : size === 'lg' ? 'py-4 px-10 text-xl' : size === 'sm' ? 'py-1 px-4 text-[15px]' : ''}  ${bgColor ? bgColor : 'bg-blue-500'} ${textColor ? textColor : 'text-blue-100' } ${hoverBgColor !== '' ? hoverBgColor : 'hover:bg-blue-800'} duration-300`}>
                {title}
            </button>
        ) : (
            <button onClick={onClick} className="rounded-xl px-8 py-2 text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300">{title}</button>
        )
    )
}
