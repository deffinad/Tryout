import React from 'react'

export const Button = ({type = 'contained', onClick = () => {}, bgColor, textColor, title, hoverBgColor = '', size = 'md', disabled = false }) => {
    const classNameContainedEnabled = `rounded-xl py-2 px-4 ${size === 'md' ? 'text-base' : size === 'lg' ? 'text-lg' : size === 'sm' ? 'text-[15px]' : ''}  ${bgColor ? bgColor : 'bg-blue-500'} ${textColor ? textColor : 'text-blue-100' } ${hoverBgColor !== '' ? hoverBgColor : 'hover:bg-blue-800'} duration-300`
    const classNameOutlinedEnabled = `rounded-xl px-8 py-2 text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300`
    const classNameContainedDisabled = `rounded-xl py-2 px-4 ${size === 'md' ? 'text-base' : size === 'lg' ? 'text-lg' : size === 'sm' ? 'text-[15px]' : ''}  ${bgColor ? bgColor : 'bg-blue-500'} ${textColor ? textColor : 'text-blue-100' } duration-300 cursor-not-allowed`
    const classNameOutlinedDisabled = `rounded-xl px-8 py-2 text-xl border-2 border-blue-500 text-blue-500 duration-300`

    return (
        type === 'contained' ? (
            <button disabled={disabled} onClick={onClick} className={disabled ? classNameContainedDisabled : classNameContainedEnabled}>
                {title}
            </button>
        ) : (
            <button disabled={disabled} onClick={onClick} className={disabled ? classNameOutlinedDisabled : classNameOutlinedEnabled}>{title}</button>
        )
    )
}
