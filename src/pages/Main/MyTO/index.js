import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import component
import MainPage from "./MainPage";
import Layout from "../../../components/Layout";
import LihatNilaiKeseluruhan from "./LihatNilaiKeseluruhan";
import DetailPage from "./DetailPage";
import BerandaTOSaya from "./Beranda";

const MyTryOut = () => {

    const { menu, id } = useParams();
    const { pathname } = useLocation()
    return (
        <Layout>
            {
                pathname === `/to-saya/${menu}` ? <MainPage/> :
                pathname === `/to-saya/${menu}/lihat-nilai-keseluruhan` ? <LihatNilaiKeseluruhan/> :
                pathname === `/to-saya/${menu}/detail/${id}` ? <DetailPage/> :
                pathname === `/to-saya/${menu}/beranda/${id}` ? <BerandaTOSaya/> :
                null
            }
        </Layout>
    )
}

export default MyTryOut;