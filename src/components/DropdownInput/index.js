import React from "react";

const DropdownInput = ({ name = '', option = [], onChange = () => { }, placeholder = '' }) => {
    
    return (
        <select name={name} onChange={onChange} className={`peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}>
            <option selected value=''>{placeholder}</option>
            {option.length > 0 && option.map(data => (
                <option key={data.value} value={data.value}>{data.name}</option>
            ))}
        </select>
    )
}

export default DropdownInput;