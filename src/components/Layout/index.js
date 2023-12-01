import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from '../Footer'

const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [widthContent, setWidthContent] = useState(window.innerWidth)
    useEffect(() => {
        if (toggleSidebar) {
            setWidthContent(prev => prev - 250)
        } else {
            setWidthContent(window.innerWidth)
        }
    }, [toggleSidebar])

    return (
        <section className='overflow-hidden z-0'>
            <Navbar toggle={toggleSidebar} setToggle={() => setToggleSidebar(!toggleSidebar)} />
            <div className={`pt-[90px] h-[100vh] max-h-[100%] ${toggleSidebar ? 'translate-x-[250px]' : 'translate-x-0'} transition-all duration-500 overflow-auto`} style={{ width: widthContent }}>
                <div className='min-h-[100vh] p-16'>
                    {children}
                </div>
                <Footer />
            </div>

            <Sidebar toggle={toggleSidebar} />
        </section>
    )
}

export default Layout