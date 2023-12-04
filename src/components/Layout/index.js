import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { initSidebar } from '../../redux/actions/sidebar.actions'

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const { open } = useSelector(state => state.sidebar);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    useEffect(() => {
        setToggleSidebar(open)
    }, [open])

    const handleToggleSidebar = (param) => {
        dispatch(initSidebar(param))
    }

    return (
        <section className='overflow-hidden z-0'>
            <Navbar toggle={toggleSidebar} setToggle={() => handleToggleSidebar(!open)} />
            <div className={`pt-[90px] h-[100vh] max-h-[100%] ${toggleSidebar ? 'ml-[270px]' : 'ml-[0]'} mr-0 transition-all duration-500 overflow-auto`}>
                <div className='min-h-[100vh] p-16 bg-gray-100'>
                    {children}
                </div>
                <Footer />
            </div>

            <Sidebar toggle={toggleSidebar} />
        </section>
    )
}

export default Layout