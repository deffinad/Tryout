import React from "react";
import ProfileSaya from "./ProfileSaya";
import EditProfile from "./EditProfile";
import { useLocation, useParams } from "react-router-dom";
import RiwayatPembelian from "./RiwayatPembelian";
import DetailRiwayatPembelian from "./DetailRiwayatPembelian";
import Pengaturan from "./Pengaturan";


const ProfilePage = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    return (
        <>
            {pathname === '/profile-saya' &&
                <ProfileSaya />
            }
            {pathname === '/profile-saya/riwayat-pembelian' &&
                <RiwayatPembelian />
            }
            {pathname === `/profile-saya/edit` &&
                <EditProfile />
            }
            {pathname === `/profile-saya/riwayat-pembelian/detail/${id}` &&
                <DetailRiwayatPembelian />
            }
            {pathname === `/profile-saya/pengaturan` &&
                <Pengaturan />
            }
        </>
    )
}

export default ProfilePage;