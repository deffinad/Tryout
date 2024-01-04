import React from "react";

const InlineIconInput = ({ label = '', name = '', value = '', type = 'text', onchange = () => { }, iconPrefix = '', iconSuffix = '', placeholder = 'Ketikkan Sesuatu', outline = false }) => {
    return (
        <div className="group p-2">
            {label !== '' &&
                <label htmlFor={name} className="block w-full pb-2 text-md font-medium  transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {label}
                </label>
            }
            <div className="relative flex items-center w-full">
                {
                    type === 'file' ? (
                        <input
                            name={name}
                            type={type}
                            onChange={onchange}
                            className={`peer relative h-10 w-full rounded-md bg-gray-50 pt-1 ${iconPrefix !== '' ? 'pl-12' : 'pl-4'} ${iconSuffix !== '' ? 'pr-10' : 'pr-4'} ${outline ? 'outline outline-1 outline-blue-400' : 'outline-none'} drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
                        />
                    ) : (
                        <>
                            <input
                                id={name}
                                name={name}
                                type={type}
                                value={value}
                                onChange={onchange}
                                placeholder={placeholder}
                                className={`peer relative h-10 w-full rounded-md bg-gray-50 ${iconPrefix !== '' ? 'pl-12' : 'pl-4'} ${iconSuffix !== '' ? 'pr-10' : 'pr-4'} ${outline ? 'outline outline-1 outline-blue-400' : 'outline-none'} drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
                            />
                            {
                                iconPrefix !== '' &&
                                <span className="material-symbols-outlined absolute left-3 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                                    {iconPrefix}
                                </span>
                            }
                            {
                                iconSuffix !== '' &&
                                <span className="material-symbols-outlined absolute right-4 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                                    {iconSuffix}
                                </span>
                            }
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default InlineIconInput;