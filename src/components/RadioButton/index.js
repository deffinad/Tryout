import React from 'react'

export const RadioButton = ({ id, value, title, onChange, name, checked, disabled = false, answer = false, type = 'soal' }) => {
    let backgroundColor = ''
    if (type === 'pembahasan') {
        if (checked) {
            if (answer) {
                backgroundColor = 'bg-green-200'
            } else if (!answer) {
                backgroundColor = 'bg-red-200'
            }
        } else {
            if (answer) {
                backgroundColor = 'bg-green-200'
            } else if (!answer) {
                backgroundColor = ''
            }
        }
    } else {
        if (checked) {
            backgroundColor = 'bg-blue-200'
        }
    }
    return (
        <div className={`flex items-center px-4 rounded ${backgroundColor} cursor-pointer`} key={id}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="w-5 h-5 text-primary bg-gray-100 border-gray-300" />
            <label htmlFor={id} className="w-full py-4 ms-2 text-base font-medium">
                {title}
            </label>
        </div>
    )
}
