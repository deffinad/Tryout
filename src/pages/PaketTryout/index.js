import React, { Fragment, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import DataListPaket from "./DataListPaket";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { addProduk, getListProduk } from "../../redux/actions/produk.action";
import { clearListTryout, getListTryout } from "../../redux/actions/tryout.action";

const PaketTryout = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [open, setOpen] = useState();
    const [toId, setToId] = useState([]);
    const [harga, setHarga] = useState('');
    const [kategori, setKategori] = useState('');
    const [namaPaket, setNamaPaket] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [jenis, setJenis] = useState({
        biasa: false,
        paket: false,
        premium: false,
    });

    const { loading } = useSelector(state => state.common);
    const { list: listTo } = useSelector(state => state.tryout);

    const handleOpenTambahModal = () => {
        setOpen(true);
    }

    const handleTambah = () => {
        const payload = {
            "nama": namaPaket,
            "kategori": kategori,
            "jenis": jenis.biasa ? "biasa" : jenis.paket ? "paket" : jenis.premium ? "premium" : "",
            "id_tryout": toId,
            "harga": parseInt(harga),
            "diskon": 0
        }

        setOpen(false);
        handleResetState();
        dispatch(clearListTryout());
        dispatch(addProduk(payload, setRefresh));
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

    const handleResetState = () => {
        setNamaPaket('');
        setKategori('');
        setToId([]);
        setHarga('');
        setJenis({
            biasa: false,
            paket: false,
            premium: false
        });
    }

    useEffect(() => {
        if (pathname === '/produk') {
            dispatch(getListProduk())
        }
    }, [pathname])

    useEffect(() => {
        if (refresh) {
            dispatch(getListProduk())
            setRefresh(false);
        }
    }, [refresh])

    return (
        <Fragment>
            <Card
                header={`List Paket Tryout`}
                headerPlacement="center"
            >
                <div className="flex justify-start items-center">
                    <Button classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]" onClick={() => handleOpenTambahModal()}>
                        <FaPlus />
                        Tambah
                    </Button>
                </div>
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <DataListPaket setRefresh={setRefresh} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal add */}
            <Modal
                open={open}
                title='Tambah Paket Tryout'
                setClose={() => {
                    setOpen(false)
                    handleResetState()
                    dispatch(clearListTryout())
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
                            <select
                                id="jenis-to"
                                value={kategori}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => {
                                    setToId([])
                                    setKategori(e.target.value)
                                    dispatch(getListTryout(e.target.value))
                                }}
                            >
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
                                {(listTo !== null && !loading) ? (
                                    listTo?.result.map(item => (
                                        <div key={'to-1'} className='flex items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                checked={toId.includes(item.id)}
                                                id={item.id}
                                                onChange={(e) => { handleSetToId(e.target.id) }}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor={item.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.nama}</label>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        {(listTo !== null && loading) || loading &&
                                            <p>Loading...</p>
                                        }
                                        {(listTo === null && !loading) &&
                                            <>
                                                <p className="text-sm text-gray-400">Harap pilih Jenis TO terlebih dahulu</p>
                                            </>
                                        }
                                    </>
                                )}
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
                            onClick={() => handleTambah()}
                        />
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default PaketTryout;