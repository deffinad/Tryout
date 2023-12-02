import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaBagShopping } from "react-icons/fa6";
import { Button } from "../../../../components/Button";

const RiwayatPembelian = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-6">
            {/* header page section */}
            <header className="flex flex-row justify-between">
                <div className="flex flex-row gap-6 justify-center items-center">
                    <FaChevronLeft size={17} className="text-secondary font-semibold cursor-pointer" onClick={() => navigate('/profile-saya')} />
                    <p className="font-semibold text-primary text-lg">Kembali ke Menu Akun</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <FaBagShopping size={28} className="text-secondary font-extrabold" />
                    <p className="font-semibold text-primary text-lg">Riwayat Pembelian</p>
                </div>
            </header>
            {/* content section page*/}
            <div className="flex flex-col gap-4">
                {/* header navigation content page*/}
                <div className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-start items-center gap-6">
                    <p className="text-secondary font-semibold text-lg cursor-pointer">
                        Menunggu Konfirmasi
                    </p>
                    <p className="text-primary font-normal text-lg cursor-pointer hover:text-blue-700">
                        Berhasil
                    </p>
                    <p className="text-primary font-normal text-lg cursor-pointer hover:text-blue-900">
                        Gagal
                    </p>
                </div>
                {/* content card section */}
                <div className="px-6 py-4 rounded-3xl bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between pb-3 border-b-2 border-blue-300">
                        <div className="flex flex-row gap-2 items-center">
                            <img src="/assets/img/pngwing.png" alt="" className="w-10" />
                            <h1 className="text-2xl font-semibold">Try Out SNBPT #1 2024/2025</h1>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-3">
                            <div className="text-black font-medium">No Order.</div>
                            <div className="font-normal">0102030499</div>
                            <div className="text-black font-medium">Tanggal Order.</div>
                            <div className="font-normal">00/00/000</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between pt-3">
                        <h1 className="text-primary font-bold text-lg">Rp. 15.000</h1>
                        <div className="flex flex-row gap-3">
                            <Button
                                size="sm"
                                title={'Lihat Detail'}
                                textColor={'text-primary'}
                                bgColor={'bg-white shadow-sm'}
                                hoverBgColor={"hover:shadow-lg"}
                                onClick={()=>navigate('/profile-saya/riwayat-pembelian/detail/1')}
                            />
                            <Button
                                bgColor={'bg-white shadow-sm'}
                                title={'Konfirmasi Pembayaran'}
                                hoverBgColor={"hover:shadow-lg"}
                                size="sm" textColor={'text-primary'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiwayatPembelian;