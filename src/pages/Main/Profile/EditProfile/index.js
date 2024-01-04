import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button";
import DropdownInput from "../../../../components/DropdownInput";
import InlineIconInput from "../../../../components/InlineIconInput";
import { FaPen } from "react-icons/fa6";
import useAuth from "../../../../shared/hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateProfileUser } from "../../../../Redux/actions/auth.action";

const EditProfile = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [noHp, setNoHp] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [asalKota, setAsalKota] = useState('');
    const [uname, setUname] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [asalSekolah, setAsalSekolah] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');

    const pilihanJnsKelamin = [
        { name: 'Laki-Laki', value: 'Laki-Laki' },
        { name: 'Perempuan', value: 'Perempuan' },
    ]

    useEffect(() => {
        if (user !== null) {
            setNoHp(user?.no_hp);
            setEmail(user?.email);
            setAvatar(user?.avatar !== "" ? user?.avatar : '/assets/img/avatar.png');
            setProvinsi(user?.provinsi);
            setTglLahir(user?.tgl_lahir);
            setAsalKota(user?.asal_kota);
            setUname(user?.username);
            setNamaLengkap(user?.nama);
            setAsalSekolah(user?.asal_sekolah);
            setJenisKelamin(user?.jenis_kelamin);
        }
        return () => resetState();
    }, [user])

    const handleSaveEdit = () => {
        const payload = {
            'role': user?.role,
            'password': user?.password,
            'nama': namaLengkap,
            'asal_sekolah': asalSekolah,
            'asal_kota': asalKota,
            'provinsi': provinsi,
            'tgl_lahir': tglLahir,
            'jenis_kelamin': jenisKelamin,
            'no_hp': noHp,
            'email': email,
            'username': uname,
            'avatar': avatar
        }

        dispatch(updateProfileUser(user.token, payload, navigate));
    }

    const resetState = () => {
        setNoHp('');
        setEmail('');
        setProvinsi('');
        setTglLahir('');
        setAsalKota('');
        setUname('');
        setNamaLengkap('');
        setAsalSekolah('');
        setJenisKelamin('');
    }

    const handleChangeAvatar = async (file) => {
        const base64Avatar = await convertImageToBase64(file);
        setAvatar(base64Avatar);
    }

    const convertImageToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();

            reader.onload = function (e) {
                var imageBase64 = e.target.result;
                resolve(imageBase64);
            };

            reader.onerror = function (error) {
                reject(error);
            };

            reader.readAsDataURL(image);
        });
    };

    return (
        <div className="flex flex-col">
            {/* profile photo */}
            <div className="flex flex-row justify-start gap-8 mb-10">
                <div className="relative">
                <img className="mb-3 rounded-full shadow-lg w-56 h-56 ring-2 ring-gray-300" src={avatar} alt="" />
                    <div style={{ cursor: 'pointer' }} className="absolute flex items-center w-10 h-10 justify-center bg-primary border-2 border-white rounded-full top-1 right-4 dark:border-gray-900 hover:bg-blue-700">
                        <label htmlFor="avatar" ><FaPen size={23} className="text-white" /></label>
                    </div>
                    <input onChange={(e) => handleChangeAvatar(e.target.files[0])} id="avatar" name="avatar" type="file" style={{ display: 'none' }} />
                </div>
                <div className="flex flex-col justify-center items-centers gap-2">
                    <input
                        type='text'
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        className={`peer relative h-10 w-full rounded-md bg-inherit text-3xl font-semibold pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg`}
                    />
                    <h2 className="text-2xl font-medium uppercase">Asal Sekolah</h2>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between mb-1">
                    <h1 className="text-xl font-semibold">Data Pribadi</h1>
                    <div className="flex flex-row justify-between gap-4">
                        <Button
                            size="sm"
                            hoverBgColor={'hover:bg-red-900'}
                            title={'Batal'}
                            bgColor={'bg-bgRed'}
                            textColor={'text-white'}
                            onClick={() => navigate('/profile-saya')}
                        />
                        <Button
                            size="sm"
                            hoverBgColor={'hover:bg-yellow-400'}
                            title={'Simpan Perubahan'}
                            bgColor={'bg-secondary'}
                            textColor={'text-gray-900'}
                            onClick={handleSaveEdit}
                        />
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-3xl p-8 mb-5">
                    <div className="grid grid-cols-3 grid-rows-3 gap-10">
                        <InlineIconInput
                            name="namaLengkap"
                            value={namaLengkap}
                            label="Nama Lengkap"
                            placeholder="Nama Lengkap"
                            onchange={(e) => setNamaLengkap(e.target.value)}
                        />
                        <DropdownInput
                            value={jenisKelamin}
                            name="jenis-kelamin"
                            label="Jenis Kelamin"
                            option={pilihanJnsKelamin}
                            placeholder="Jenis Kelamin"
                            onChange={(e) => setJenisKelamin(e.target.value)}

                        />
                        <InlineIconInput
                            type="date"
                            name="tgl-lahir"
                            value={tglLahir}
                            label="Tanggal Lahir"
                            placeholder="Tanggal Lahir"
                            onchange={(e) => setTglLahir(e.target.value)}
                        />
                        <InlineIconInput
                            name="asal-sekolah"
                            value={asalSekolah}
                            label="Asal Sekolah"
                            placeholder="Asal Sekolah"
                            onchange={(e) => setAsalSekolah(e.target.value)}
                        />
                        <InlineIconInput
                            name="asal-kota"
                            value={asalKota}
                            label="Asal Kota"
                            placeholder="Asal Kota"
                            onchange={(e) => setAsalKota(e.target.value)}
                        />
                        <InlineIconInput
                            name="provinsi"
                            value={provinsi}
                            label="Provinsi"
                            placeholder="Provinsi"
                            onchange={(e) => setProvinsi(e.target.value)}
                        />
                        <InlineIconInput
                            type="phone"
                            name="no-hp"
                            value={noHp}
                            label="No HP/ Whatsapp"
                            placeholder="No Hp/ Whatsapp"
                            onChange={(e) => setNoHp(e.target.value)}
                        />
                        <InlineIconInput
                            type="email"
                            name="email"
                            value={email}
                            label="Email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;