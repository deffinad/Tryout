import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import InlineIconInput from "../../../components/InlineIconInput";
import PasswordInput from "../../../components/PasswordInput";
import DropdownInput from "../../../components/DropdownInput";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/actions/auth.action";

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [noHp, setNoHp] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [asalSekolah, setAsalSekolah] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [asalKota, setAsalKota] = useState('');
    const [avatar, setAvatar] = useState(null)
    const isUserExist = localStorage.getItem('token');

    const pilihanJnsKelamin = [
        { name: 'Laki-Laki', value: 'Laki-Laki' },
        { name: 'Perempuan', value: 'Perempuan' },
    ]

    const handleRegister = () => {
        const payload = {
            'asal_kota': asalKota,
            'asal_sekolah': asalSekolah,
            'avatar': avatar,
            'email': email,
            'jenis_kelamin': jenisKelamin,
            'nama': namaLengkap,
            'password': password,
            'provinsi': provinsi,
            'role': 'user',
            'tgl_lahir': tglLahir,
            'no_hp': noHp,
            'username': uname,
        }

        if (asalKota === '' || asalSekolah === '' || email === '' || jenisKelamin === '' || namaLengkap === '' || password === '' || provinsi === '' || tglLahir === '' || noHp === '' || uname === '') {
            alert('Mohon Masukan Data Dengan Benar')
        } else {
            dispatch(register(payload, navigate))
        }

    }

    useEffect(() => {
        if (isUserExist !== null) {
            navigate('/beranda');
        };
    }, [])

    if (isUserExist !== null) {
        return null;
    }

    return (
        <div className="w-full">
            {/* <Navbar /> */}
            <div className="w-full p-10 bg-neutral-200">
                <div className="mt-5 grid grid-cols-2">
                    <div className="p-2 flex item-center justify-center">
                        <div className="px-10 py-16 w-[568px] bg-primary rounded-[128px] flex flex-col justify-center gap-5">
                            <div className="text-center">
                                <h1 className="text-[35px] text-white font-bold">Daftar</h1>
                            </div>
                            <div className="flex flex-col gap-4">
                                <InlineIconInput
                                    name="namaLengkap"
                                    value={namaLengkap}
                                    placeholder="Nama Lengkap"
                                    onchange={(e) => setNamaLengkap(e.target.value)}
                                />

                                <div className="flex flex-row gap-2">
                                    <div className="flex-1">
                                        <InlineIconInput
                                            name="asalSekolah"
                                            value={asalSekolah}
                                            placeholder="Asal Sekolah"
                                            onchange={(e) => setAsalSekolah(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <InlineIconInput
                                            name="asalKota"
                                            value={asalKota}
                                            placeholder="Asal Kota"
                                            onchange={(e) => setAsalKota(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <div className="flex-1">
                                        <InlineIconInput
                                            type="date"
                                            name="tglLahir"
                                            value={tglLahir}
                                            placeholder="Tanggal Lahir"
                                            onchange={(e) => setTglLahir(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <InlineIconInput
                                            name="provinsi"
                                            value={provinsi}
                                            placeholder="Provinsi"
                                            onchange={(e) => setProvinsi(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <div className="flex-1">
                                        <DropdownInput
                                            name="jenisKelamin"
                                            value={jenisKelamin}
                                            option={pilihanJnsKelamin}
                                            placeholder="Jenis Kelamin"
                                            onChange={(e) => setJenisKelamin(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <InlineIconInput
                                            type="phone"
                                            name="noHp"
                                            value={noHp}
                                            placeholder="No. Hp"
                                            onchange={(e) => setNoHp(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <InlineIconInput
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onchange={(e) => setEmail(e.target.value)}
                                />
                                <InlineIconInput
                                    type="file"
                                    name="avatar"
                                    onchange={(e) => {
                                        var reader = new FileReader();

                                        reader.onload = function (e) {
                                            var imageBase64 = e.target.result;
                                            setAvatar(imageBase64)
                                        };

                                        reader.readAsDataURL(e.target.files[0]);
                                    }}
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
                    <div className="p-2 flex flex-row items-center justify-center">
                        <img alt="" src={'/assets/img/daftar.png'} />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default RegisterPage; 