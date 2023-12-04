import React from 'react'

export const RadioButton = ({title}) => {
    return (
        <div class="flex items-center ps-4 rounded">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 text-primary bg-gray-100 border-gray-300" />
            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-base font-medium">{title}</label>
        </div>
    )
}
