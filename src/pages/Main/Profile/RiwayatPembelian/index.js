import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaBagShopping } from "react-icons/fa6";
import { getRiwayatPembelian } from "../../../../Redux/actions/profile.actions";
import ItemCardRiwayatPembayaran from "../../../../components/Item/ItemCardRiwayatPembayaran";
import { getStatusPaymentApi } from "../../../../shared/api/payment";
import { fetchError, fetchStart, fetchSuccess } from "../../../../Redux/actions/common.actions";

const RiwayatPembelian = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { list_pembelian: list } = useSelector(state => state.profile);

    const [data, setData] = useState(null);
    const [filterBy, setFilterBy] = useState('menunggu pembayaran');

    useEffect(() => {
        if (pathname === '/profile-saya/riwayat-pembelian') {
            dispatch(getRiwayatPembelian());
        }
    }, [dispatch, pathname])

    useEffect(() => {
        if (list !== null && list.result.length > 0) {
            const newList = list.result.filter(item => item.status === filterBy);
            setData(newList);
        }
    }, [list, filterBy])

    const handleFilterBy = (e, param) => {
        e.preventDefault();
        setFilterBy(param);
    }

    const confirmPayment = (param) => {
        const id = 'id-tryout-' + param
        dispatch(fetchStart());
        getStatusPaymentApi(id)
            .then((res) => {
                console.log(res);
                dispatch(fetchSuccess(''));
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
                        ? <>Tidak Ada Data</>
                        : null
                }
            </div>
        </div>
    )
}

export default RiwayatPembelian;