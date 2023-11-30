import React from "react";
import { FaRegEye } from "react-icons/fa6";

const PasswordInput = ({ value = '', onchange = () => { }, iconPrefix = '', showHideButton = true, placeholder = 'Ketikkan Sesuatu' }) => {
    return (
        <div class="relative flex items-center w-full">
            <input
                type="password"
                value={value}
                onChange={onchange}
                placeholder={placeholder}
                className={`peer relative h-10 w-full rounded-md bg-gray-50 ${iconPrefix !== '' ? 'pl-12' : 'pl-4'} ${showHideButton ? 'pr-10' : 'pr-4'} outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
            />
            {iconPrefix &&
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {iconPrefix}
                </span>
            }
            {showHideButton &&
                <span className="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    <FaRegEye size={18} style={{ cursor: 'pointer' }} />
                </span>
            }
        </div>
    )
}

export default PasswordInput;