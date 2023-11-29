import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full bg-primary h-[90px] flex flex-row items-center justify-between text-textColor px-6 fixed'>
        <div>
            <h1 className='font-bold text-lg'>LOGONAMAWEB</h1>
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
