import moment from "moment";
import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { stringToRupiah } from "../../shared/appEnums";

const ItemCardRiwayatPembayaran = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className="px-6 py-4 rounded-3xl bg-gray-200 flex flex-col">
            <div className="flex flex-row justify-between pb-3 border-b-2 border-blue-300">
                <div className="flex flex-row gap-2 items-center">
                    <img src="/assets/img/pngwing.png" alt="" className="w-10" />
                    <h1 className="text-2xl font-semibold">{item?.produk.nama}</h1>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-3">
                    <div className="text-black font-medium">No Order.</div>
                    <div className="font-normal">{item?.id}</div>
                    <div className="text-black font-medium">Tanggal Order.</div>
                    <div className="font-normal">{moment(item?.tanggal).format('DD/MM/YYYY')}</div>
                </div>
            </div>
            <div className="flex flex-row justify-between pt-3">
                <h1 className="text-primary font-bold text-lg">Rp. {stringToRupiah(item?.produk.harga)}</h1>
                <div className="flex flex-row gap-3">
                    <Button
                        size="sm"
                        title={'Lihat Detail'}
                        textColor={'text-primary'}
                        bgColor={'bg-white shadow-sm'}
                        hoverBgColor={"hover:shadow-lg"}
                        onClick={() => navigate(`/profile-saya/riwayat-pembelian/detail/${item?.id}`)}
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
    )
}

export default ItemCardRiwayatPembayaran;