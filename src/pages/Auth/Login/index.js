import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import useAuth from "../../../shared/hooks/useAuth";
import PasswordInput from "../../../components/PasswordInput";
import { FaRegEnvelope, FaUnlockKeyhole } from "react-icons/fa6";
import InlineIconInput from "../../../components/InlineIconInput";
import Swal from "sweetalert2";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const isUserExist = localStorage.getItem('token');

    useEffect(() => {
        if (isUserExist !== null) {
            navigate('/beranda');
        };
    }, [])

    const handleLogin = async () => {
        const payload = {
            'username': uname.trim(),
            'password': password.trim()
        }

        const { status, role } = await login(payload);
        if (status === 200) {
            Swal.fire({
                icon: 'success',
                timer: 2000,
                text: 'Berhasil Login'
            })
            handleResetState();
            if (role === 'user') {
                setTimeout(() => {
                    navigate('/beranda');
                }, 3000)
            } else {
                window.location.href = "https://tryout-admin.vercel.app/";
            }
        } else {
            Swal.fire({
                icon: 'error',
                timer: 3000,
                title: 'Gagal Login!',
                text: 'Coba periksa lagi username dan password kamu'
            })
            handleResetState();
        }
    }

    const handleResetState = () => {
        setUname('');
        setPassword('');
    }

    if (isUserExist !== null) {
        return null;
    }

    return (
        <div className="w-full">
            {/* <Navbar /> */}
            <div className="w-full p-10 bg-neutral-200">
                <div className="mt-5 grid grid-cols-2">
                    <div className="p-2">
                        <img alt="" src={'/assets/img/masuk.png'} />
                    </div>
                    <div className="p-2 flex item-center justify-center">
                        <div style={{ backgroundColor: '#FFB84C' }} className="px-10 py-2 w-[568px] rounded-full flex flex-col justify-center gap-10">
                            <div className="text-center">
                                <h1 className="text-[35px] text-blue-900 font-bold">Masuk</h1>
                            </div>
                            <div className="flex flex-col gap-5">
                                <InlineIconInput
                                    value={uname}
                                    placeholder="Email/Username"
                                    iconPrefix={<FaRegEnvelope size={25} />}
                                    onchange={(e) => setUname(e.target.value)}
                                />
                                <PasswordInput
                                    showHideButton
                                    value={password}
                                    placeholder="Password"
                                    iconPrefix={<FaUnlockKeyhole size={25} />}
                                    onchange={(e) => setPassword(e.target.value)}
                                />
                                <Button title={'Masuk'} bgColor={'bg-blue-900'} onClick={handleLogin} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-1 justify-end">
                                        <h6 className="font-bold">Belum Punya Akun?</h6>
                                    </div>
                                    <h6 style={{ cursor: 'pointer' }} className="font-bold text-blue-900 flex-1 hover:text-blue-700 hover:underline" onClick={() => navigate('/daftar')}>Register</h6>
                                </div>
                                <div className="flex flex-1 flex-row gap-4">
                                    <div className="flex flex-1 justify-end">
                                        <h6 className="font-bold">Lupa Password?</h6>
                                    </div>
                                    <h6 style={{ cursor: 'pointer' }} className="font-bold text-blue-900 flex-1 hover:text-blue-700 hover:underline">Reset Password</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default LoginPage; 