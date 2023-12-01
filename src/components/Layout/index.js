import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from '../Footer'

const Layout = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false)

    return (
        <section className='overflow-hidden z-0'>
            <Navbar toggle={toggleSidebar} setToggle={() => setToggleSidebar(!toggleSidebar)} />
            <div className={`pt-[90px] h-[100vh] max-h-[100%] bg-red-200  ${toggleSidebar ? 'ml-[270px]' : 'ml-[0]'} mr-0 transition-all duration-500 overflow-auto`}>
                <div className='min-h-[100vh] p-16'>
                    Deffin
                </div>
                <Footer />
            </div>

            <Sidebar toggle={toggleSidebar} />
        </section>
    )
}

export default Layout