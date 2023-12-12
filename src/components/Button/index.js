import React, { Fragment } from "react";

const Button = ({
    children,
    icon = '',
    classNames = '',
    title = "click me",
    onClick = () => { },
    textColor = 'text-white',
    bgColor = 'bg-primary',
    textColorHover = 'hover:text-white',
    iconPlacement = 'start',
    bgColorHover = '',
}) => {
    return (
        // <button type="button" className={`text-${textColor} hover:text-${textColorHover} bg-${bgColor} hover:bg-${bgColorHover} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2`}>
        //     {!children ? (
        //         <Fragment>
        //             {icon !== '' && iconPlacement === 'start' &&
        //                 { icon }
        //             }

        //             {title}

        //             {icon !== '' && iconPlacement === 'end' &&
        //                 { icon }
        //             }
        //         </Fragment>
        //     ) : (
        //         children
        //     )}
        // </button>
        <Fragment>
            {!children ? (
                <button onClick={onClick} type="button" className={`${textColor} ${textColorHover} ${bgColor} ${bgColorHover !== '' ? bgColorHover : ''} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}>
                    {icon !== '' && iconPlacement === 'start' &&
                        { icon }
                    }

                    {title}

                    {icon !== '' && iconPlacement === 'end' &&
                        { icon }
                    }
                </button>
            ) : (
                <button
                    type="button"
                    onClick={onClick}
                    className={`font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 ${classNames}`}
                >
                    {children}
                </button>
            )}
        </Fragment>
    )
}

export default Button;