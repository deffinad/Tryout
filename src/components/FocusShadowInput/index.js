import React from "react";

const FocusShadowInput = ({ value = '', onChange = () => {} }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
        />
    )
}

export default FocusShadowInput;