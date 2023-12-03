import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();
    const { menu } = useParams()

    return (
        <div>
            <h1 className="text-2xl  font-semibold mb-8">MyTO Page</h1>

            Halaman Utama TO Saya
            <p onClick={() => navigate(`/to-saya/${menu}/lihat-nilai-keseluruhan`)}>Lihat Nilai Keseluruhan</p>
        </div>
    )
}

export default MainPage;