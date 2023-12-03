import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "../../../../components/Button";

const DetailRiwayatPembelian = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-6">
            {/* header page section */}
            <header className="flex flex-row justify-start items-center gap-6">
                <FaChevronLeft size={17} className="text-secondary font-semibold cursor-pointer" onClick={() => navigate(-1)} />
                <p className="font-semibold text-primary text-lg">Kembali</p>
            </header>
            {/* content section page*/}
            <div className="flex flex-col gap-4">
                {/* header navigation content page*/}
                <div className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-start items-center gap-6 text-primary font-medium text-lg">
                    Riwayat Pembelian / Detail Pembayaran
                </div>
                {/* content card section */}
                <div className="px-6 py-4 rounded-3xl bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-center items-center pb-3 border-b-2 border-blue-300">
                        <div className="flex flex-row gap-2 items-center">
                            <img src="/assets/img/pngwing.png" alt="" className="w-10" />
                            <h1 className="text-2xl font-semibold">Try Out SNBPT #1 2024/2025</h1>
                        </div>
                    </div>
                    <div className="flex fex-row justify-center items-center mt-1 mb-6">
                        <div className="grid grid-cols-4 grid-rows-1 gap-3">
                            <div className="text-black text-sm font-medium">No Order.</div>
                            <div className="font- text-sm">0102030499</div>
                            <div className="text-black text-sm font-medium">Tanggal Order.</div>
                            <div className="font-normal text-sm">00/00/000</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mb-6">
                        <h1 className="font-bold text-lg">Status Pembayaran</h1>
                        <div className="py-1 px-4 text-[15px] font-normal text-primary bg-bgWaiting rounded-3xl text-center">
                            Menunggu Konfirmasi
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col pb-3 border-b-2 border-blue-300">
                        <h1 className="mb-3 font-bold text-start text-lg">Ringkasan Pembelian</h1>
                        <div className="grid grid-rows-1 grid-cols-2">
                            <div className="flex flex-col gap-[7px]">
                                <p className="font-light">Try Out SNBPT #1 2024/2025</p>
                                <p className='pl-3 font-semibold'>1 Paket Try Out #1</p>
                                <p className="pl-3 font-semibold">Pembahasan Soal</p>
                            </div>
                            <div className="flex flex-row justify-end">
                                <p className="font-semibold">Rp. 15.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-3">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <p className="text-primary font-semibold">Total Bayar</p>
                            <p className="text-black font-semibold">Rp. 15.000</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center mb-4">
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <p className="text-primary font-semibold">Metode Bayar</p>
                                <img alt="Dana" src="/assets/img/dana.png" />
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-end">
                                <p className="text-[15px]">08xxxxxxxxx</p>
                                <p className="text-[15px]">a/n Lilis Sukmawati <span className="ms-2 py-1 px-2 text-sm rounded-full bg-black text-white cursor-pointer">Salin</span></p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button
                                bgColor={'bg-white shadow-sm rounded-full'}
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

export default DetailRiwayatPembelian;