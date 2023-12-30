import React from 'react'
import { Button } from '../Button'
import { FaList } from 'react-icons/fa6'
import useAuth from '../../shared/hooks/useAuth'
import { stringToRupiah } from '../../shared/appEnums'
import { getTokenSnapApi } from '../../shared/api/payment'
import { fetchError, fetchStart, fetchSuccess } from '../../Redux/actions/common.actions'
import { useDispatch } from 'react-redux'
import { addToMyTransaction } from '../../Redux/actions/my-to.actions'
import moment from 'moment'

const ItemCardTO = ({ data }) => {
    const { user } = useAuth()
    const dispatch = useDispatch();

    const handleDisplayHarga = (data) => {
        if (data?.diskon !== 0) return stringToRupiah(data.diskon);
        return stringToRupiah(data?.harga);
    }

    const handlePaymentItem = (data) => {
        dispatch(fetchStart());
        const today = new Date();
        const payload = {
            id_produk: data.id,
            gross_amount: data.diskon !== 0 ? parseInt(data.diskon) : parseInt(data.harga),
            customer_name: user.nama,
            email: 'deffin@gmail.com',
            phone: '0881111122'
        }
        getTokenSnapApi(payload)
            .then((res) => {
                if (res.status === 201) {
                    dispatch(fetchSuccess(''));
                    window.snap.pay(res.result, {
                        onSuccess: (res) => {
                            const payload = {
                                "id_produk": data.id,
                                "tanggal": moment(today).format('DD-MM-YYYY'),
                                "status": 'berhasil'
                            }
                            dispatch(addToMyTransaction(payload))
                            alert('berhasil melakukan proses pembayaran');
                        },
                        onPending: (res) => {
                            const payload = {
                                "id_produk": data.id,
                                "tanggal": moment(today).format('DD-MM-YYYY'),
                                "status": 'menunggu pembayaran'
                            }
                            dispatch(addToMyTransaction(payload))
                            alert('menunggu pembayaran');
                        },
                        onError: (error) => {
                            alert('gagal melakukan proses pembayaran');
                            console.log(error);
                        }
                    });
                } else {
                    dispatch(fetchError('Gagal Melanjutkan Pembelian'));
                    alert('Gagal Melanjutkan Pembelian');
                }
            })
            .catch((error) => {
                dispatch(fetchError('Gagal Melakukan Pembelian'));
                alert('Gagal Melakukan Pembelian', error);
            })
    }

    return (
        <div className={`w-full h-[300px] rounded-[50px] shadow-lg flex flex-col ${data?.jenis === 'premium' ? 'bg-bgRed' : data?.jenis === 'paket' ? 'bg-secondary' : 'bg-textOrange'}`}>
            <div className='flex flex-1'>
                <div className='flex-1 flex flex-col gap-2 pt-6 pl-6 pb-6 pr-2 text-white'>
                    <div className='flex-1 flex items-center'>
                        <h1 className='font-bold text-3xl'>{data?.nama}</h1>
                    </div>
                    {
                        data?.jenis === 'paket' ? (
                            <div className='flex-1 flex'>
                                <div className='grid grid-cols-2 gap-x-6'>
                                    {data?.tryout.map(child => (
                                        <div className='flex flex-row w-full items-center gap-1' key={child.id}>
                                            <FaList />
                                            <p className='text-sm capitalize'>{child?.nama}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='w-36 bg-white border-4 rounded-tl-[100px] rounded-tr-[50px] flex flex-col items-center justify-center gap-4'>
                    <img alt='' src={data?.jenis === 'premium' ? '/assets/img/premium.png' : '/assets/img/paket.png'} className='w-24 h-24' />
                    <p className='text-lg font-semibold capitalize'>{data?.jenis}</p>
                </div>
            </div>
            <div className='bg-white rounded-b-[50px] px-8 py-4'>
                <div className='flex items-center justify-between h-full'>
                    <div className='flex flex-col justify-center'>
                        <p className='font-bold'>Harga Paket</p>
                        <p className='text-2xl font-semibold text-textColorRed'>
                            {handleDisplayHarga(data)}
                        </p>
                    </div>

                    <Button
                        title={data.status ? 'Sudah Dibeli' : 'Beli'}
                        onClick={() => handlePaymentItem(data)}
                        disabled={data.status}
                    />

                </div>
            </div>

        </div>
    )
}

export default ItemCardTO