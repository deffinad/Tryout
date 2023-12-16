import React from "react";

const TextInputDropdown = ({
    name = '',
    label = '',
    value = '',
    onChange = () => { },
    options = []
}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select value={value} onChange={onChange} id={name} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {options.length > 0 ? (
                    <>
                        {options.map(item => (
                            <option key={item.name} value={item.value}>{item.name}</option>
                        ))}
                    </>
                ) : null}
            </select>
        </>
    )
}

export default TextInputDropdown;