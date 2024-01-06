import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaBagShopping } from "react-icons/fa6";
import { getRiwayatPembelian } from "../../../../Redux/actions/profile.actions";
import ItemCardRiwayatPembayaran from "../../../../components/Item/ItemCardRiwayatPembayaran";
import { getStatusPaymentApi } from "../../../../shared/api/payment";
import { fetchError, fetchStart, fetchSuccess } from "../../../../Redux/actions/common.actions";
import { updateToMyTransaction } from "../../../../Redux/actions/my-to.actions";
import moment from "moment";
import Swal from "sweetalert2";
import EmptyData from "../../../../components/EmptyData";

const RiwayatPembelian = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { list_pembelian: list } = useSelector(state => state.profile);

    const today = new Date();
    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [filterBy, setFilterBy] = useState('menunggu pembayaran');

    useEffect(() => {
        if (pathname === '/profile-saya/riwayat-pembelian' || refresh) {
            dispatch(getRiwayatPembelian());
            setTimeout(() => {
                setRefresh(false)
            }, [2000])
        }
    }, [dispatch, pathname, refresh])

    useEffect(() => {
        if (list !== null && list.result.length > 0) {
            const newList = list.result.filter(item => item.status === filterBy);
            setData(newList);
        } else setData([]);
    }, [list, filterBy])

    const handleFilterBy = (e, param) => {
        e.preventDefault();
        setFilterBy(param);
    }

    const confirmPayment = (param) => {
        const {
            id,
            bank,
            qris,
            id_produk,
            va_number,
            tipe_pembayaran,
            transaction_id,
        } = param
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

    return (
        <div className="flex flex-col gap-6">
            {/* header page section */}
            <header className="flex flex-row justify-between">
                <div className="flex flex-row gap-6 justify-center items-center">
                    <FaChevronLeft size={17} className="text-secondary font-semibold cursor-pointer" onClick={() => navigate('/profile-saya')} />
                    <p className="font-semibold text-primary text-lg">Kembali ke Menu Akun</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <FaBagShopping size={28} className="text-secondary font-extrabold" />
                    <p className="font-semibold text-primary text-lg">Riwayat Pembelian</p>
                </div>
            </header>
            {/* content section page*/}
            <div className="flex flex-col gap-4">
                {/* header navigation content page*/}
                <div className="px-16 py-3 rounded-3xl bg-gray-200 flex flex-row justify-start items-center gap-6">
                    <p className={`${filterBy === 'menunggu pembayaran' ? 'text-secondary' : 'text-primary'} font-semibold text-lg cursor-pointer`} onClick={(e) => handleFilterBy(e, 'menunggu pembayaran')}>
                        Menunggu Konfirmasi
                    </p>
                    <p className={`${filterBy === 'berhasil' ? 'text-secondary' : 'text-primary'} font-semibold text-lg cursor-pointer`} onClick={(e) => handleFilterBy(e, 'berhasil')}>
                        Berhasil
                    </p>
                    <p className={`${filterBy === 'gagal' ? 'text-secondary' : 'text-primary'} font-semibold text-lg cursor-pointer`} onClick={(e) => handleFilterBy(e, 'gagal')}>
                        Gagal
                    </p>
                </div>
                {/* content card section */}
                {data !== null && data.length > 0
                    ? data.map((item) => (
                        <Fragment key={item.id}>
                            <ItemCardRiwayatPembayaran item={item} confirmPaymentFunction={confirmPayment} />
                        </Fragment>
                    ))
                    : data !== null && data.length === 0
                        ? <EmptyData />
                        : null
                }
            </div>
        </div>
    )
}

export default RiwayatPembelian;