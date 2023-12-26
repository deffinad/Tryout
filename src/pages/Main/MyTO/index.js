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

    const { menu, id, type } = useParams();
    const { pathname } = useLocation()
    return (
        <>
            {
                pathname === `/to-saya/${menu}` ? <MainPage/> :
                pathname === `/to-saya/${menu}/lihat-nilai-keseluruhan` ? <LihatNilaiKeseluruhan/> :
                pathname === `/to-saya/${menu}/detail/${id}` ? <DetailPage/> :
                pathname === `/to-saya/${menu}/beranda/${type}/${id}` ? <BerandaTOSaya/> :
                pathname === `/to-saya/${menu}/soal/${id}` ? <SoalTryOut/> :
                pathname === `/to-saya/${menu}/pembahasan/${id}` ? <Pembahasan/> :
                null
            }
        </>
    )
}

export default MyTryOut;