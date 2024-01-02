import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import component
import MainPage from "./MainPage";
import DetailPage from "./DetailPage";
import BerandaTOSaya from "./Beranda";
import { SoalTryOut } from "./Soal";
import Pembahasan from "./Pembahasan";
import LihatNilaiKeseluruhan from "./LihatNilaiKeseluruhan";

const MyTryOut = () => {

    const { menu, id, id_transaksi, id_tryout, id_materi } = useParams();
    const { pathname } = useLocation()
    return (
        <>
            {
                pathname === `/to-saya/${menu}` ? <MainPage/> :
                pathname === `/to-saya/${menu}/lihat-nilai-keseluruhan` ? <LihatNilaiKeseluruhan/> :
                pathname === `/to-saya/${menu}/detail/${id}` ? <DetailPage/> :
                pathname === `/to-saya/${menu}/beranda/${id_transaksi}/${id_tryout}` ? <BerandaTOSaya/> :
                pathname === `/to-saya/${menu}/${id_transaksi}/${id_tryout}/soal/${id_materi}` ? <SoalTryOut/> :
                pathname === `/to-saya/${menu}/${id_transaksi}/${id_tryout}/pembahasan/${id_materi}` ? <Pembahasan/> :
                null
            }
        </>
    )
}

export default MyTryOut;