import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../../../../components/PasswordInput';
import { FaChevronLeft, FaChevronRight, FaGear } from 'react-icons/fa6';
import { Button } from '../../../../components/Button';

const Pengaturan = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [open, setOpen] = useState({
        password: true,
        share: false,
        kritikSaran: false
    })

    const handleExtendCard = (key) => {
        setOpen({
            ...open,
            [key]: !open[key]
        })
    }


    return (
        <div className="flex flex-col gap-6">
            {/* header page section */}
            <header className="flex flex-row justify-between">
                <div className="flex flex-row justify-center items-center gap-6">
                    <FaChevronLeft size={17} className="text-secondary font-semibold cursor-pointer" onClick={() => navigate(-1)} />
                    <p className="font-semibold text-primary text-lg">Kembali</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <FaGear size={28} className="text-secondary font-extrabold" />
                    <p className="font-semibold text-primary text-lg">Pengaturan</p>
                </div>
            </header>
            {/* content section page*/}
            <div className="flex flex-col gap-4">
                {/* first conten header navigation content page*/}
                <button className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-between items-center gap-6" onClick={() => handleExtendCard('password')}>
                    <p className='text-primary font-medium text-lg'>Ubah Password</p>
                    <div className={`transform ${open.password ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                        <FaChevronRight size={18} className='text-primary font-extrabold' />
                    </div>
                </button>
                <div className={`flex flex-col ${open.password ? 'h-[176px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
                    <div className='flex justify-start items-center'>
                        <PasswordInput
                            value={oldPassword}
                            label='Password Lama'
                            placeholder='Ketik Password Lamamu'
                            onchange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row justify-start items-center gap-10'>
                        <PasswordInput
                            value={newPassword}
                            label='Password Baru'
                            placeholder='Ketik Password Barumu'
                            onchange={(e) => setNewPassword(e.target.value)}
                        />
                        <PasswordInput
                            value={confirmNewPassword}
                            label='Konfirmasi Password Baru'
                            placeholder='Ketik Password Barumu'
                            onchange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        <div>
                            <Button
                                size='sm'
                                title={'Perbarui Password'}
                                bgColor={'bg-secondary'}
                                textColor={'text-primary hover:font-semibold'}
                                hoverBgColor='hover:bg-yellow-400'
                                onClick={() => { }}
                            />
                        </div>
                    </div>
                </div>

                {/* second content header navigation content page */}
                <button className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-between items-center gap-6" onClick={() => handleExtendCard('share')}>
                    <p className='text-primary font-medium text-lg'>Share</p>
                    <div className={`transform ${open.share ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                        <FaChevronRight size={18} className='text-primary font-extrabold' />
                    </div>
                </button>
                <div className={`flex flex-col ${open.share ? 'h-[176px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
                    <h1 className='text-lg font-medium'>Bagikan ke:</h1>
                </div>

                {/* third content header navigation content page */}
                <button className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-between items-center gap-6" onClick={() => handleExtendCard('kritikSaran')}>
                    <p className='text-primary font-medium text-lg'>Kritik dan Saran</p>
                    <div className={`transform ${open.kritikSaran ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                        <FaChevronRight size={18} className='text-primary font-extrabold' />
                    </div>
                </button>
                <div className={`flex flex-col ${open.kritikSaran ? 'h-[176px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
                    <h1 className='text-lg font-medium'>Kritik dan Saran</h1>
                </div>
            </div>
        </div>
    )
}

export default Pengaturan;