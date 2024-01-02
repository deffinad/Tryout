import React from 'react'

export const RadioButton = ({ key, id, value, title, onChange, name, checked }) => {
    return (
        <div className={`flex items-center ps-4 rounded ${checked ? 'bg-blue-200' : ''} cursor-pointer`} key={key}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 text-primary bg-gray-100 border-gray-300" />
            <label htmlFor={id} className="w-full py-4 ms-2 text-base font-medium">
                {title}
            </label>
        </div>
    )
}
