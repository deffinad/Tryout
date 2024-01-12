import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import { useRoutes } from 'react-router-dom';
import { router } from '../../router/router';
import { useDispatch, useSelector } from 'react-redux';
import { initSidebar } from '../../redux/actions/sidebar.action';
import Lottie from 'lottie-react';
import Loading from './Loading.json'
import toast from 'react-hot-toast';
import { fetchError, fetchSuccess } from '../../redux/actions/common.action';

const Layout = () => {
    const dispatch = useDispatch();
    const { open } = useSelector(state => state.sidebar);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    useEffect(() => {
        setToggleSidebar(open)
    }, [open])

    const handleToggleSidebar = (param) => {
        dispatch(initSidebar(param))
    }

    const element = useRoutes(router);
    const { loading, message, error } = useSelector(state => state.common)

    useEffect(() => {
        if (message !== '') {
            toast.success(message, {
                duration: 3500,
                position: 'top-right',
            })
            dispatch(fetchSuccess(''))
        }
        if (error !== '') {
            toast.error(error, {
                duration: 3000,
                position: 'top-right',
            })
            dispatch(fetchError(''))
        }
    }, [message, error])

    return (
        <section className='overflow-hidden z-0'>
            <Navbar toggle={toggleSidebar} setToggle={() => handleToggleSidebar(!open)} />
            <div className={`pt-[90px] h-[100vh] max-h-[100%] ${toggleSidebar ? 'lg:ml-[270px] ml-0' : 'ml-[0]'} mr-0 transition-all duration-500 ${loading ? 'overflow-hidden' : 'overflow-y-auto'} relative `}>
                <div className={`min-h-[89vh] p-16 bg-gray-100 z-10`}>
                    {element}
                </div>
                {
                    loading &&
                    <div className='absolute w-full top-0 h-[100vh] z-50 flex items-center justify-center'>
                        <Lottie animationData={Loading} loop={true} style={{ height: 100, width: 100 }} />
                    </div>
                }
            </div>

            <Sidebar toggle={toggleSidebar} />
        </section>
    )
}

export default Layout