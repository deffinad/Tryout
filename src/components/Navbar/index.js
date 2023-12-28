import React from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../shared/hooks/useAuth'

export const Navbar = ({ toggle = false, setToggle }) => {
    const navigation = useNavigate()
    const { user, logout } = useAuth()

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
                    {
                        user === undefined || user === null ? (
                            <li>
                                <button onClick={() => navigation('/masuk')}>Masuk</button>
                            </li>
                        ) : (
                            <li>
                                <button onClick={() => {
                                    logout()
                                    navigation('/')
                                }}>
                                    Logout
                                </button>
                            </li>
                        )}
                </ul>
            </div>
        </div>
    )
}
