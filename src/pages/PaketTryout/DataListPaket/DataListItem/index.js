import React, { Fragment, useEffect, useState } from 'react';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import DialogModal from '../../../../components/DialogModal';
import { stringToRupiah } from '../../../../shared/appEnums';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetailPaket, deleteProduk, getDetailProduk, updateProduk } from '../../../../redux/actions/produk.action';

const DataListItem = ({ data, index, setRefresh }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [harga, setHarga] = useState('');
    const [diskon, setDiskon] = useState('');
    const [kategori, setKategori] = useState('');
    const [toId, setToId] = useState([]);
    const [namaPaket, setNamaPaket] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [jenis, setJenis] = useState({
        biasa: false,
        paket: false,
        premium: false,
    });

    const { detail } = useSelector(state => state.produk);

    const handleOpenEditModal = (id) => {
        dispatch(getDetailProduk(id));
        setOpen(true);
    }

    const handleSetToId = (id) => {
        const arrayId = [...toId]
        if (arrayId.includes(id)) {
            const newArray = arrayId.filter(item => item !== id);
            setToId(newArray);
        } else {
            arrayId.push(id);
            setToId(arrayId);
        }
    }

    // modal edit
    const handleEdit = () => {
        const payload = {
            "nama": namaPaket,
            "kategori": kategori,
            "id_tryout": toId,
            "harga": harga,
            "diskon": diskon,
            "jenis": jenis.biasa ? "biasa" : jenis.paket ? "paket" : jenis.premium ? "premium" : ""
        }

        dispatch(updateProduk(data.id, payload, setRefresh))
        setOpen(false);
        handleResetState();
    }

    // modal hapus
    const handleCloseDialog = (status = 0) => {
        if (status === 1) {
            // action
            dispatch(deleteProduk(data.id, setRefresh));
            setOpenDialog(false);
        } else {
            // tutup
            setOpenDialog(false);
        }
    }

    const handleResetState = () => {
        setNamaPaket('');
        setKategori('');
        setToId([]);
        setHarga('');
        setDiskon('');
        setJenis({
            biasa: false,
            paket: false,
            premium: false
        });
    }

    useEffect(() => {
        if (detail !== null) {
            const arrayIdTo = []
            detail.result.tryout.map(item => {
                arrayIdTo.push(item.id);
            })
            if (detail.result.jenis === "biasa") {
                setJenis({
                    ...jenis,
                    biasa: true,
                })
            }
            if (detail.result.jenis === "paket") {
                setJenis({
                    ...jenis,
                    paket: true,
                })
            }
            if (detail.result.jenis === "premium") {
                setJenis({
                    ...jenis,
                    premium: true,
                })
            }
            setNamaPaket(detail.result.nama);
            setKategori(detail.result.kategori);
            setDiskon(detail.result.diskon);
            setHarga(detail.result.harga);
            setToId(arrayIdTo);
        }

        return () => { }
    }, [detail])

    return (
        <Fragment>
            <tr>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[25%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap uppercase">{data.kategori}</p>
                </td>
                <td className="w-[30%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.nama}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    {data.diskon !== 0 ? (
                        <>
                            <p className="text-red-600 line-through text-sm whitespace-no-wrap">Rp. {stringToRupiah(data.harga)}</p>
                            <p className="text-gray-900 text-lg whitespace-no-wrap">Rp. {stringToRupiah(data.diskon)}</p>
                        </>
                    ) : (
                        <p className="text-gray-900 text-lg whitespace-no-wrap">Rp. {stringToRupiah(data.harga)}</p>
                    )}
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-row gap-x-3 gap-y-0">
                        <Button
                            title="Edit"
                            bgColor="bg-primary"
                            textColor="text-white"
                            bgColorHover='hover:bg-bgHoverPrimary'
                            onClick={() => handleOpenEditModal(data.id)}
                        />
                        <Button
                            title="Hapus"
                            textColor="text-white"
                            bgColor="bg-bgDanger"
                            onClick={() => setOpenDialog(true)}
                        />
                    </div>
                </td>
            </tr>

            <DialogModal
                open={openDialog}
                title={'Hapus Paket Tryout'}
                content={'Apakah anda yakin ingin menghapus paket ini?'}
                handleClose={handleCloseDialog}
            />

            {/* Modal Edit */}
            <Modal
                open={open}
                title='Edit Paket Tryout'
                setClose={() => {
                    setOpen(false)
                    handleResetState()
                    dispatch(clearDetailPaket())
                }}
            >
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input
                                id='name'
                                type="text"
                                value={namaPaket}
                                placeholder="Masukkan Nama Paket"
                                onChange={(e) => setNamaPaket(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="jenis-to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis TO</label>
                            <select value={kategori} onChange={(e) => setKategori(e.target.value)} id="jenis-to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Pilih Jenis TO</option>
                                <option value="utbk">UTBK - SNBT</option>
                                <option value="poltekes">Poltekes</option>
                                <option value="polri">Kedinasan - Polri</option>
                                <option value="ipdn">Kedinasan - IPDN</option>
                            </select>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Deskripsi
                            </label>
                            <div className='p-2 border border-gray-300 rounded-md grid grid-rows-3 grid-flow-col gap-4'>
                                {detail?.result.tryout.map(item => (
                                    <div key={item.id} className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            checked={toId.includes(item.id)}
                                            id={item.id}
                                            onChange={(e) => { handleSetToId(e.target.id) }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor={item.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.nama}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga</label>
                            <input
                                id='harga'
                                type="text"
                                value={harga}
                                placeholder="Masukkan Harga"
                                onChange={(e) => setHarga(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="diskon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diskon</label>
                            <input
                                id='diskon'
                                type="text"
                                value={diskon}
                                placeholder="Masukkan Harga"
                                onChange={(e) => setDiskon(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Paket</label>
                            <div className='flex flex-row gap-6'>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={jenis.biasa}
                                        id="biasa"
                                        onChange={(e) => setJenis({ biasa: e.target.checked, paket: false, premium: false })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="biasa" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Biasa</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={jenis.paket}
                                        id="premium-uncheck"
                                        onChange={(e) => setJenis({ biasa: false, paket: e.target.checked, premium: false })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="premium-uncheck" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paket</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={jenis.premium}
                                        id="premium"
                                        onChange={(e) => setJenis({ biasa: false, paket: false, premium: e.target.checked })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="premium" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button
                            title='Simpan'
                            textColor='text-white'
                            bgColor='bg-bgSidebar'
                            onClick={() => handleEdit()}
                        />
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default DataListItem;