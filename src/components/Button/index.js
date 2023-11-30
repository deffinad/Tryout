import React from 'react'

export const Button = ({type = 'contained', onClick = () => {}, bgColor, textColor, title, hoverBgColor }) => {
    return (
        type === 'contained' ? (
            <button onClick={onClick} className={`rounded-xl px-8 py-2 text-xl ${bgColor ? bgColor : 'bg-blue-500'} ${textColor ? textColor : 'text-blue-100' } hover:${hoverBgColor ? hoverBgColor : 'bg-blue-600'} duration-300`}>
                {title}
            </button>
        ) : (
            <button onClick={onClick} className="rounded-xl px-8 py-2 text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300">Large</button>
        )
    )
}
