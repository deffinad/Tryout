import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTryoutHeader from "./DataTryoutHeader";
import { useDispatch, useSelector } from "react-redux";
import Card from '../../../components/Card';
import { clearDetailPengguna, clearTryoutPengguna, getDetailPengguna, getListTryoutPengguna } from "../../../redux/actions/dataPengguna.action";
import DataTryoutItem from "./DataTryoutItem";

const DetailPengguna = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { detail, tryout } = useSelector(state => state.users);

    useEffect(() => {
        if (id) {
            dispatch(getDetailPengguna(id));
            dispatch(getListTryoutPengguna(id, 'utbk'));
        }

        return () => {
            dispatch(clearDetailPengguna());
            dispatch(clearTryoutPengguna());
        }
    }, [id, dispatch])

    return (
        <>
            {detail != null &&
                <Card
                    header="Detail Pengguna"
                    headerPlacement="center"
                    style={'min-h-[75vh]'}
                >
                    <div className="mt-8 grid gap-y-3 gap-x-3">
                        <BiodataRow
                            firstTitle="Nama Lengkap"
                            secondTitle="Jenis Kelamin"
                            firstValue={detail?.result.nama}
                            secondValue={detail?.result.jenis_kelamin}
                        />
                        <BiodataRow
                            firstTitle="Tempat, Tanggal Lahir"
                            secondTitle="No. Handphone"
                            firstValue={detail?.result.tgl_lahir}
                            secondValue={detail?.result.no_hp}
                        />
                        <BiodataRow
                            firstTitle="Asal Kota"
                            secondTitle="Email"
                            firstValue={`${detail?.result.asal_kota}, ${detail?.result.provinsi}`}
                            secondValue={detail?.result.email}
                        />
                        <BiodataRow
                            firstTitle="Asal Sekolah"
                            secondTitle="Username"
                            firstValue={detail?.result.asal_sekolah}
                            secondValue={detail?.result.username}
                        />
                    </div>

                    <div className="container mx-auto">
                        <div className="py-4">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                    <DataTryoutHeader />
                                    {tryout !== null && tryout.result.length > 0 ? (
                                        tryout.result.map((item, index) => (
                                            <DataTryoutItem key={item.id} item={item} index={index} />
                                        ))
                                    ) : (
                                        <div className="h-[50px] flex items-center justify-center">
                                            Tidak Ada Data
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            }
        </>
    )
}
const BiodataRow = ({
    firstTitle = 'First Title',
    firstValue = 'First Value',
    secondTitle = 'Secon Title',
    secondValue = 'Secon Value',
}) => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-row gap-3">
                <div className="w-[50%] flex justify-between text-lg font-semibold">
                    <span>{firstTitle}</span>
                    <span>:</span>
                </div>
                <div className="w-[50%] text-lg font-semibold">
                    {firstValue}
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div className="w-[50%] flex justify-between text-lg font-semibold">
                    <span>{secondTitle}</span> 
                    <span>:</span> 
                </div>
                <div className="w-[50%] text-lg font-semibold">
                    {secondValue}
                </div>
            </div>
        </div>
    )
}

export default DetailPengguna;