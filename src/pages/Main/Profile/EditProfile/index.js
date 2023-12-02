import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button";
import DropdownInput from "../../../../components/DropdownInput";
import InlineIconInput from "../../../../components/InlineIconInput";

const EditProfile = () => {
    // const navigate = useNavigate();
    const [noHp, setNoHp] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [asalKota, setAsalKota] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [asalSekolah, setAsalSekolah] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');

    const pilihanJnsKelamin = [
        { name: 'Laki-Laki', value: 'Laki-Laki' },
        { name: 'Perempuan', value: 'Perempuan' },
    ]

    const handleSaveEdit = () => {
        const payload = {
            'nama_lengkap': namaLengkap,
            'asal_sekolah': asalSekolah,
            'asal_kota': asalKota,
            'provinsi': provinsi,
            'tgl_lahir': tglLahir,
            'jenis_kelamin': jenisKelamin,
            'no_hp': noHp,
            'email': email,
            'username': uname,
        }

        console.log(payload);
    }

    return (
        <div className="flex flex-col mt-10">
            {/* profile photo */}
            <div className="flex flex-row justify-start gap-8 mb-10">
                <img className="mb-3 rounded-full shadow-lg" src="/assets/img/avatar.png" alt="" />
                <div className="flex flex-col justify-center items-centers gap-2">
                    <h1 className="text-3xl font-semibold uppercase">Username</h1>
                    <h2 className="text-2xl font-medium uppercase">Asal Sekolah</h2>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between mb-1">
                    <h1 className="text-xl font-semibold">Data Pribadi</h1>
                    <Button
                        size="sm"
                        hoverBgColor={'hover:bg-yellow-400'}
                        title={'Simpan Perubahan'}
                        bgColor={'bg-secondary'}
                        textColor={'text-gray-900'}
                        onClick={handleSaveEdit}
                    />
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