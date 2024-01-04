import React from "react";
import 'moment/locale/id';
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { FaBagShopping, FaChevronRight, FaDoorOpen, FaGear } from "react-icons/fa6"
import useAuth from "../../../../shared/hooks/useAuth";
moment.locale('id');
const ProfileSaya = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            {/* profile photo */}
            <div className="flex flex-row justify-start gap-8 mb-10">
                <img className="mb-3 rounded-full shadow-lg w-56 h-56 ring-2 ring-gray-300" src={user?.avatar !== "" ? user?.avatar : '/assets/img/avatar.png'} alt="" />
                <div className="flex flex-col justify-center items-centers gap-2">
                    <h1 className="text-3xl font-semibold">{user?.username}</h1>
                    <h2 className="text-2xl font-medium uppercase">{user?.asal_sekolah}</h2>
                </div>
            </div>
            {/* data pribadi card */}
            <div className="bg-white shadow-md rounded-3xl p-5 mb-5">
                <div className="border-b-2 border-blue-300 p-1 flex flex-row justify-between">
                    <h1 className="text-xl text-primary font-medium">Data Pribadi</h1>
                    <h1 style={{ cursor: 'pointer' }} className="text-secondary text-xl font-semibold hover:text-yellow-400" onClick={()=>navigate('/profile-saya/edit')}>
                        Edit
                    </h1>
                </div>
                <div className="p-3 flex flex-col gap-5">
                    <RowsProfile
                        firstTitle="Nama Lengkap"
                        firstContent={user?.nama}
                        secondTitle="Asal Sekolah"
                        secondContent={user?.asal_sekolah}
                    />
                    <RowsProfile
                        firstTitle="Jenis Kelamin"
                        firstContent={user?.jenis_kelamin}
                        secondTitle="Asal Kota"
                        secondContent={user?.asal_kota}
                    />
                    <RowsProfile
                        firstTitle="Tanggal Lahir"
                        firstContent={moment(user?.tgl_lahir).format('DD MMMM YYYY')}
                        secondTitle="Provinsi"
                        secondContent={user?.provinsi}
                    />
                </div>
            </div>
            {/* riwayat pembelian card */}
            <div className="bg-white shadow-md hover:shadow-lg rounded-3xl p-5 mb-5 cursor-pointer" onClick={()=>navigate('/profile-saya/riwayat-pembelian')}>
                <div className="flex flex-row justify-between items-center mx-2">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <FaBagShopping size={32} style={{ color: "#F1D64B" }} />
                        <h1 className="text-xl text-primary font-semibold">Riwayat Pembelian</h1>
                    </div>
                    <FaChevronRight size={22} style={{ color: "#F1D64B", cursor: 'pointer' }} />
                </div>
            </div>
            {/* setting card */}
            {/* <div className="bg-white shadow-md hover:shadow-lg rounded-3xl p-5 mb-5 cursor-pointer" onClick={()=>navigate('/profile-saya/pengaturan')}> 
                <div className="flex flex-row justify-between items-center mx-2">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <FaGear size={32} style={{ color: "#F1D64B" }} />
                        <h1 className="text-xl text-primary font-semibold">Pengaturan</h1>
                    </div>
                    <FaChevronRight size={22} style={{ color: "#F1D64B", cursor: 'pointer' }} />
                </div>
            </div> */}
            {/* keluar card */}
            <div className="bg-white shadow-md hover:shadow-lg rounded-3xl p-5 mb-5 cursor-pointer" onClick={()=>navigate('/masuk')}>
                <div className="flex flex-row justify-between items-center mx-2">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <FaDoorOpen size={32} style={{ color: "#F1D64B" }} />
                        <h1 className="text-xl text-primary font-semibold">Keluar</h1>
                    </div>
                    <FaChevronRight size={22} style={{ color: "#F1D64B", cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default ProfileSaya;

const RowsProfile = ({ firstTitle = 'First Title', secondTitle = 'SecondTitle', firstContent = 'Content Col 1', secondContent = 'Content Col 2' }) => {
    return (
        <div className="grid grid-cols-2 grid-rows-1">
            <div className="flex flex-col justify-center items-start">
                <p className="font-semibold">{firstTitle}</p>
                <p>{firstContent}</p>
            </div>
            <div className="flex flex-col justify-center items-start">
                <p className="font-semibold">{secondTitle}</p>
                <p>{secondContent}</p>
            </div>
        </div>
    )
}