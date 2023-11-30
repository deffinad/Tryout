import React from "react";

const InlineIconInput = ({ value = '', onchange = () => { }, icon = '' }) => {
    return (
        <div class="relative flex items-center w-full">
            <input
                type="text"
                value={value}
                onChange={onchange}
                className="peer h-10 w-full rounded-md bg-gray-50 px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                {icon}
            </span>
        </div>
    )
}

export default InlineIconInput;