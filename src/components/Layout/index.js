import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from '../Footer'
import Lottie from 'lottie-react'
import Loading from './Loading.json'
import { router } from '../../Router/router'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useRoutes } from 'react-router-dom'
import { initSidebar } from '../../Redux/actions/sidebar.actions'
import toast from 'react-hot-toast'

const Layout = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { open } = useSelector(state => state.sidebar);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const element = useRoutes(router);
    const { loading, message, error } = useSelector(state => state.common);

    useEffect(() => {
        setToggleSidebar(open)
    }, [open])

    useEffect(() => {
        if (message !== '') {
            toast.success(message, {
                duration: 3500,
                position: 'top-right',
            })
        }
        if (error) {
            toast.error(error, {
                duration: 3000,
                position: 'top-right',
            })
        }
    }, [message, error])

    const handleToggleSidebar = (param) => {
        dispatch(initSidebar(param))
    }

    useEffect(() => {
        const container = document.getElementById('element')
        container?.scrollTo(0, 0)
    }, [pathname])

    if (pathname === '/' || pathname === '/masuk' || pathname === '/daftar') {
        return (
            <>{element}</>
        )
    }

    return (
        <section className='overflow-hidden z-0'>
            <Navbar toggle={toggleSidebar} setToggle={() => handleToggleSidebar(!open)} />
            <div className={`pt-[90px] h-[100vh] max-h-[100%] ${toggleSidebar ? 'lg:ml-[270px] ml-0' : 'ml-[0]'} mr-0 transition-all duration-500 ${loading ? 'overflow-hidden' : 'overflow-y-auto'} relative `}>
                <div className='min-h-[100vh] p-16 bg-gray-100'>
                    {element}
                </div>
                <Footer />
                {
                    loading &&
                    <div className='absolute w-full top-0 h-[100vh] z-20 flex items-center justify-center'>
                        <Lottie animationData={Loading} loop={true} style={{ height: 100, width: 100 }} />
                    </div>
                }
            </div>
            <Sidebar toggle={toggleSidebar} />
        </section>
    )
}

export default Layout