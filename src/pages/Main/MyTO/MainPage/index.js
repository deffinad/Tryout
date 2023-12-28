import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../../components/Button";
import ItemCardTOSaya from "../../../../components/Item/ItemCardTOSaya";

const MainPage = () => {

    const navigate = useNavigate();
    const { menu, id } = useParams()

    return (
        <section className='flex flex-col gap-8'>
            <h1 className="text-2xl font-bold">Progress Try Out UTBK - SNBT</h1>

            <div className="bg-white w-full h-[500px] rounded-3xl shadow-lg flex items-end p-6">
                <Button onClick={() => navigate(`/to-saya/${menu}/lihat-nilai-keseluruhan`)} title={'Lihat Nilai Keseluruhan'}/>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <ItemCardTOSaya type={'premium'} onClick={() => navigate(`/to-saya/${menu}/beranda/soal/1`)}/>
                <ItemCardTOSaya type={'premium'} onClick={() => navigate(`/to-saya/${menu}/beranda/soal/1`)}/>
                <ItemCardTOSaya type={'paket'} onClick={() => navigate(`/to-saya/${menu}/beranda/soal/1`)}/>
                <ItemCardTOSaya type={'paket'} onClick={() => navigate(`/to-saya/${menu}/beranda/soal/1`)}/>
                <ItemCardTOSaya type={'biasa'} onClick={() => navigate(`/to-saya/${menu}/beranda/soal/1`)}/>
            </div>

        </section>
    )
}

export default MainPage;