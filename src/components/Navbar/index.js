import React, { useCallback } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import useAuth from "../../shared/hooks";

export const Navbar = ({ toggle = false, setToggle }) => {
    const { user } = useAuth()
    const currentUserData = JSON.parse(localStorage.getItem('user'));

    const renderAvatar = useCallback(() => {
        if (currentUserData) {
            if (currentUserData.avatar !== '') return currentUserData?.avatar;
            return '/assets/img/avatar.png'
        }

    }, [currentUserData])

    return (
        <div className='w-full bg-primary h-[90px] flex flex-row items-center justify-between text-textColor px-16 fixed z-10'>
            <div className='flex gap-6 items-center'>
                <button onClick={setToggle} className={`transform ${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                    {
                        toggle ? (
                            <FaXmark style={{ width: '32px', height: '32px' }} />
                        ) : (
                            <FaBars style={{ width: '32px', height: '32px' }} />
                        )
                    }
                </button>
                <h1 className='font-bold text-lg'>LOGONAMAWEB</h1>
            </div>

            <div>
                <img className="w-10 h-10 rounded-full" src={renderAvatar()} alt="Rounded avatar" />
            </div>
        </div>
    )
}
