import React from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

export const Navbar = ({ toggle = false, setToggle }) => {
    return (
        <div className='w-full bg-primary h-[90px] flex flex-row items-center justify-between text-textColor md:px-16 px-8 fixed z-10'>
            <div className='flex gap-6 items-center'>
                <button onClick={setToggle} className={`transform ${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                    {
                        toggle ? (
                            <FaXmark className='md:h-[32px] md:w-[32px] h-[24px] w-[24px]' />
                        ) : (
                            <FaBars className='md:h-[32px] md:w-[32px] h-[24px] w-[24px]' />
                        )
                    }
                </button>
                <h1 className='font-bold text-base'>LOGONAMAWEB</h1>
            </div>

            <div>
                <ul className='flex flex-row gap-6'>
                    <li>Masuk</li>
                    <li>Masuk</li>
                </ul>
            </div>
        </div>
    )
}
