import React, { useCallback } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../shared/hooks/useAuth'

export const Navbar = ({ toggle = false, setToggle }) => {
    const navigation = useNavigate()
    const { user, logout } = useAuth()
    const { pathname } = useLocation()

    const renderAvatar = useCallback(() => {
        if (user){
            if (user.avatar !== '') return user.avatar;
            return '/assets/img/avatar.png'
        }
        
    }, [user])

    return (
        <div className='w-full bg-primary h-[90px] flex flex-row items-center justify-between text-textColor md:px-16 px-8 fixed z-10'>
            <div className='flex gap-6 items-center'>
                <button onClick={setToggle} className={`transform ${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                    {
                        pathname !== '/' && pathname !== '/daftar' && pathname !== '/masuk' ? (
                            toggle ? (
                                <FaXmark className='md:h-[32px] md:w-[32px] h-[24px] w-[24px]' />
                            ) : (
                                <FaBars className='md:h-[32px] md:w-[32px] h-[24px] w-[24px]' />
                            )
                        ) : null
                    }
                </button>
                <h1 className='font-bold text-base'>LOGONAMAWEB</h1>
            </div>

            {
                pathname !== '/daftar' && pathname !== '/masuk' ? (
                    <div>
                        <ul className='flex flex-row gap-6'>
                            {
                                user === undefined || user === null ? (
                                    <li>
                                        <button onClick={() => navigation('/masuk')}>Masuk</button>
                                    </li>
                                ) : (
                                    <li>
                                        <div className='flex flex-row gap-4'>
                                            <img 
                                                src={renderAvatar()} 
                                                alt="Rounded avatar" 
                                                className="w-10 h-10 rounded-full cursor-pointer"
                                                onClick={() => navigation('/profile-saya')} 
                                            />
                                            <button onClick={() => {
                                                logout()
                                                navigation('/')
                                            }}>
                                                Logout
                                            </button>
                                        </div>
                                    </li>
                                )}
                        </ul>
                    </div>
                ) : null
            }
        </div>
    )
}
