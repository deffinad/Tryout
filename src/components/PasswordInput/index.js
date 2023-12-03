import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ label = '', name = '', value = '', onchange = () => { }, iconPrefix = '', showHideButton = true, placeholder = 'Ketikkan Sesuatu', outline = false, }) => {
    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(prev => !prev);
    }

    return (
        <div className="p-2">
            {label !== '' &&
                <label htmlFor={name} className="block w-full pb-2 text-md font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {label}
                </label>
            }
            <div className="relative flex items-center w-full">
                <input
                    name={name}
                    type={!showPass ? "password" : "text"}
                    value={value}
                    onChange={onchange}
                    placeholder={placeholder}
                    className={`peer relative h-10 w-full rounded-md bg-gray-50 ${iconPrefix !== '' ? 'pl-12' : 'pl-4'} ${showHideButton ? 'pr-10' : 'pr-4'} ${outline ? 'outline outline-1 outline-blue-400' : 'outline-none'} drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
                />
                {iconPrefix &&
                    <span className="material-symbols-outlined absolute left-3 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                        {iconPrefix}
                    </span>
                }
                {showHideButton &&
                    <span className="material-symbols-outlined absolute right-4 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                        {!showPass ? (
                            <FaRegEye size={18} style={{ cursor: 'pointer' }} onClick={handleShowPass} />
                        ) : (
                            <FaRegEyeSlash size={18} style={{ cursor: 'pointer' }} onClick={handleShowPass} />
                        )}
                    </span>
                }
            </div>
        </div>
    )
}

export default PasswordInput;