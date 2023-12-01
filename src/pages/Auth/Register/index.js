import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import InlineIconInput from "../../../components/InlineIconInput";
import PasswordInput from "../../../components/PasswordInput";
import DropdownInput from "../../../components/DropdownInput";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [noHp, setNoHp] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [asalSekolah, setAsalSekolah] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');

    const pilihanJnsKelamin = [
        { name: 'Laki-Laki', value: 'Laki-Laki' },
        { name: 'Perempuan', value: 'Perempuan' },
    ]

    const handleRegister = () => {
        const payload = {
            'nama_lengkap': namaLengkap,
            'asal_sekolah': asalSekolah,
            'tgl_lahir': tglLahir,
            'jenis_kelamin': jenisKelamin,
            'no_hp': noHp,
            'email': email,
            'username': uname,
            'password': password
        }

        console.log(payload);
    }

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full pt-[90px] p-10 bg-neutral-200">
                <div className="mt-5 grid grid-cols-2">
                    <div className="p-2 flex item-center justify-center">
                        <div className="px-10 py-2 w-[568px] bg-primary rounded-[128px] flex flex-col justify-center gap-5">
                            <div className="text-center">
                                <h1 className="text-[35px] text-white font-bold">Daftar</h1>
                            </div>
                            <div className="flex flex-col gap-7">
                                <InlineIconInput
                                    name="namaLengkap"
                                    value={namaLengkap}
                                    placeholder="Nama Lengkap"
                                    onchange={(e) => setNamaLengkap(e.target.value)}
                                />
                                <InlineIconInput
                                    name="asalSekolah"
                                    value={asalSekolah}
                                    placeholder="Asal Sekolah"
                                    onchange={(e) => setAsalSekolah(e.target.value)}
                                />
                                <InlineIconInput
                                    type="date"
                                    name="tglLahir"
                                    value={tglLahir}
                                    placeholder="Tanggal Lahir"
                                    onchange={(e) => setTglLahir(e.target.value)}
                                />
                                <DropdownInput
                                    name="jenisKelamin"
                                    value={jenisKelamin}
                                    option={pilihanJnsKelamin}
                                    placeholder="Jenis Kelamin"
                                    onChange={(e) => setJenisKelamin(e.target.value)}
                                />
                                <InlineIconInput
                                    type="phone"
                                    name="noHp"
                                    value={noHp}
                                    placeholder="No. Hp"
                                    onchange={(e) => setNoHp(e.target.value)}
                                />
                                <InlineIconInput
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onchange={(e) => setEmail(e.target.value)}
                                />
                                <InlineIconInput
                                    value={uname}
                                    placeholder="Username"
                                    onchange={(e) => setUname(e.target.value)}
                                />
                                <PasswordInput
                                    name="password"
                                    showHideButton
                                    value={password}
                                    placeholder="Password"
                                    onchange={(e) => setPassword(e.target.value)}
                                />
                                <Button title={'Daftar'} bgColor={'bg-secondary'} onClick={handleRegister} textColor={'text-white'} />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row gap-4">
                                    <h6 className="font-bold text-secondary">Sudah Punya Akun?</h6>
                                    <h6 style={{ cursor: 'pointer' }} className="font-semibold text-white flex-1 hover:underline" onClick={() => navigate('/masuk')}>Masuk</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <img alt="" src={'/assets/img/daftar.png'} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterPage; 