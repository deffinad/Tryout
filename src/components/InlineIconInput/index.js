import React from "react";

const InlineIconInput = ({ name = '', value = '', type = 'text', onchange = () => { }, iconPrefix = '', iconSuffix = '', placeholder = 'Ketikkan Sesuatu' }) => {
    return (
        <div class="relative flex items-center w-full">
            <input
                name={name}
                type={type}
                value={value}
                onChange={onchange}
                placeholder={placeholder}
                className={`peer relative h-10 w-full rounded-md bg-gray-50 ${iconPrefix !== '' ? 'pl-12' : 'pl-4'} ${iconSuffix !== '' ? 'pr-10' : 'pr-4'} outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
            />
            {iconPrefix !== '' &&
                <span className="material-symbols-outlined absolute left-3 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {iconPrefix}
                </span>
            }
            {iconSuffix !== '' &&
                <span className="material-symbols-outlined absolute right-3 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {iconSuffix}
                </span>
            }
        </div>
    )
}

export default InlineIconInput;