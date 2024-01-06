import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRiwayat } from "../../../../Redux/actions/profile.actions";
import moment from "moment";
import { stringToRupiah } from "../../../../shared/appEnums";
import { fetchError, fetchStart, fetchSuccess } from "../../../../Redux/actions/common.actions";
import { getStatusPaymentApi } from "../../../../shared/api/payment";
import { updateToMyTransaction } from "../../../../Redux/actions/my-to.actions";
import Swal from "sweetalert2";

const DetailRiwayatPembelian = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { detail_pembelian: detail } = useSelector(state => state.profile);

    const today = new Date();
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        if ((id !== null && pathname === `/profile-saya/riwayat-pembelian/detail/${id}`) || refresh) {
            dispatch(getDetailRiwayat(id));
            setTimeout(() => {
                setRefresh(false);
            }, 2000)
        }
    }, [dispatch, pathname, refresh])

    const renderStatus = (status) => {
        switch (status) {
            case 'menunggu pembayaran':
                return (
                    <div className="py-1 px-4 text-[15px] font-normal text-primary bg-bgWaiting rounded-3xl text-center">
                        Menunggu Konfirmasi
                    </div>
                )
            case 'berhasil':
                return (
                    <div className="py-1 px-4 text-[15px] font-normal text-textSuccess bg-bgSuccess rounded-3xl text-center">
                        Berhasil
                    </div>
                )
            case 'gagal':
                return (
                    <div className="py-1 px-4 text-[15px] font-normal text-red-300 bg-bgSuccess rounded-3xl text-center">
                        Gagal
                    </div>
                )
            default:
                return <></>;
        }
    }

    const confirmPayment = (e) => {
        e.preventDefault(e)
        const {
            id,
            bank,
            qris,
            id_produk,
            va_number,
            tipe_pembayaran,
            transaction_id,
        } = detail.result
        dispatch(fetchStart());
        getStatusPaymentApi(transaction_id)
            .then((res) => {
                dispatch(fetchSuccess(''));
                if (res.transaction_status === 'pending') {
                    Swal.fire({
                        timer: 2500,
                        icon: 'warning',
                        text: 'Kamu masih belum bayar nih. Mohon segera lakukan pembayaran ya!'
                    })
                }
                if (res.transaction_status === 'settlement' || res.transaction_status === 'berhasil') {
                    Swal.fire({
                        timer: 2500,
                        icon: 'success',
                        text: 'Yeay, kamu sudah berhasil melakukan pembayaran!'
                    })
                    const payload = {
                        "id_produk": id_produk,
                        "tanggal": moment(today).format('DD-MM-YYYY'),
                        "status": 'berhasil',
                        "tipe_pembayaran": tipe_pembayaran,
                        "bank": bank,
                        "qris": qris,
                        "va_number": va_number,
                        "transaction_id": transaction_id
                    }
                    dispatch(updateToMyTransaction(id, payload, setRefresh))
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal mengambil status'))
                console.log(error);
            })
    }

    const handleCopyText = (e, text) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        dispatch(fetchSuccess('Berhasil salin text'))
    }

    if (detail === null) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            {/* header page section */}
            <header className="flex flex-row justify-start items-center gap-6">
                <FaChevronLeft size={17} className="text-secondary font-semibold cursor-pointer" onClick={() => navigate(-1)} />
                <p className="font-semibold text-primary text-lg">Kembali</p>
            </header>
            {/* content section page*/}
            <div className="flex flex-col gap-4">
                {/* header navigation content page*/}
                <div className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-start items-center gap-6 text-primary font-medium text-lg">
                    Riwayat Pembelian / Detail Pembayaran
                </div>
                {/* content card section */}
                <div className="px-6 py-4 rounded-3xl bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-center items-center pb-3 border-b-2 border-blue-300">
                        <div className="flex flex-row gap-2 items-center">
                            <img src="/assets/img/pngwing.png" alt="" className="w-10" />
                            <h1 className="text-2xl font-semibold">{detail?.result.produk.nama}</h1>
                        </div>
                    </div>
                    <div className="flex fex-row justify-center items-center mt-1 mb-6">
                        <div className="grid grid-cols-4 grid-rows-1 gap-3">
                            <div className="text-black text-sm font-medium">No Order.</div>
                            <div className="font- text-sm">{detail?.result.id}</div>
                            <div className="text-black text-sm font-medium">Tanggal Order.</div>
                            <div className="font-normal text-sm">{moment(detail?.result.tanggal).format('DD/MM/YYYY')}</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mb-6">
                        <h1 className="font-bold text-lg">Status Pembayaran</h1>
                        {renderStatus(detail?.result.status)}
                    </div>
                    <div className="mb-4 flex flex-col pb-3 border-b-2 border-blue-300">
                        <h1 className="mb-3 font-bold text-start text-lg">Ringkasan Pembelian</h1>
                        {(detail && detail.result.produk.tryout.length > 0) &&
                            detail.result.produk.tryout.map((item) => (
                                <div key={item.id} className="grid grid-rows-1 grid-cols-2">
                                    <div className="flex flex-col gap-[7px]">
                                        <p className="font-light">{item.nama}</p>
                                        <p className='pl-3 font-semibold'>1 {item.nama}</p>
                                        <p className="pl-3 font-semibold">Pembahasan Soal</p>
                                    </div>
                                    <div className="flex flex-row justify-end">
                                        <p className="font-semibold">1x</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center items-end gap-3">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <p className="text-primary font-semibold">Total Bayar</p>
                            <p className="text-black font-semibold">Rp. {stringToRupiah(detail?.result?.produk?.harga)}</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-end items-end mb-4">
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <p className="text-primary font-semibold">Metode Bayar</p>
                                {/* <img alt="Dana" src="/assets/img/dana.png" /> */}
                                <p className="text-black font-semibold">{detail?.result.tipe_pembayaran}</p>
                            </div>
                            {detail?.result.status !== 'berhasil' &&
                                <div className="flex flex-col gap-4 justify-center items-end">
                                    <p className="text-[15px]">{detail.result.va_number}</p>
                                    {detail?.result.tipe_pembayaran === 'bank_transfer' &&
                                        <p className="text-[15px] uppercase">
                                            {detail?.result.bank} <span className="ms-2 py-1 px-2 text-sm rounded-full bg-black text-white cursor-pointer"  onClick={(e) => handleCopyText(e, detail?.result.bank)}>Salin</span>
                                        </p>
                                    }
                                </div>
                            }
                        </div>
                        {detail?.result.status !== 'berhasil' &&
                            <div className="flex justify-center">
                                <Button
                                    bgColor={'bg-white shadow-sm rounded-full'}
                                    title={'Konfirmasi Pembayaran'}
                                    hoverBgColor={"hover:shadow-lg"}
                                    size="sm" textColor={'text-primary'}
                                    onClick={(e) => confirmPayment(e)}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailRiwayatPembelian;