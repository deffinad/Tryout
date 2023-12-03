import React from "react";

const DropdownInput = ({ label = '', value = '', name = '', option = [], onChange = () => { }, placeholder = '' }) => {

    return (
        <div>
            {label !== '' &&
                <label for={name} class="block w-full pb-2 text-md font-medium  transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {label}
                </label>
            }
            <select id={name} value={value} name={name} onChange={onChange} className={`peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-4 outline outline-1 outline-blue-400 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}>
                <option selected value=''>{placeholder}</option>
                {option.length > 0 && option.map(data => (
                    <option key={data.value} value={data.value}>{data.name}</option>
                ))}
            </select>
        </div>
    )
}

export default DropdownInput;