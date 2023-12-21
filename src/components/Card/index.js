import React from "react";

const Card = ({ header = "", headerPlacement = 'left', children, style }) => {
    return (
        <div className={`${style} block w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700`}>
            {header !== "" &&
                <h5 className={`mb-2 text-2xl text-${headerPlacement} font-bold tracking-tight text-gray-900 dark:text-white`}>
                    {header}
                </h5>
            }
            {children}
        </div>
    )
}

export default Card;