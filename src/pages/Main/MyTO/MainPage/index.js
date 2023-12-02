import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            Halaman Utama TO Saya
            <p onClick={() => navigate('/to-saya/utbk/lihat-nilai-keseluruhan')}>Lihat Nilai Keseluruhan</p>
        </div>
    )
}

export default MainPage;