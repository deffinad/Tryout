import React from "react";

const TextInput = ({
    name = '',
    label = '',
    value = '',
    type = 'text',
    onChange = () => {},
    placeholder = 'Ketikkan Sesuatu',
    disabled = false
}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${disabled ? 'cursor-not-allowed' : 'cursor-auto'}`}
                disabled={disabled}
            />
        </>
    )
}

export default TextInput;