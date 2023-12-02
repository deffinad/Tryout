import React from "react";
import ProfileSaya from "./ProfileSaya";
import EditProfile from "./EditProfile";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import RiwayatPembelian from "./RiwayatPembelian";
import DetailRiwayatPembelian from "./DetailRiwayatPembelian";


const ProfilePage = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    return (
        <Layout>
            {pathname === '/profile-saya' &&
                <ProfileSaya />
            }
            {pathname === '/profile-saya/riwayat-pembelian' &&
                <RiwayatPembelian />
            }
            {pathname === `/profile-saya/edit/${id}` &&
                <EditProfile />
            }
            {pathname === `/profile-saya/riwayat-pembelian/detail/${id}` &&
                <DetailRiwayatPembelian />
            }
        </Layout>
    )
}

export default ProfilePage;