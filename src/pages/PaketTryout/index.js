import React, { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "../../components/Button";
import Card from "../../components/Card";
import DataListPaket from "./DataListPaket";
import Modal from "../../components/Modal";

const PaketTryout = () => {
    const [open, setOpen] = useState();
    const [harga, setHarga] = useState('');
    const [jenisTo, setJenisTo] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [namaPaket, setNamaPaket] = useState('');
    const [premium, setPremium] = useState({
        ya: false,
        tidak: false
    });

    const handleOpenTambahModal = () => {
        setOpen(true);
    }

    const handleTambah = () => {
        const payload = {
            nama_paket: namaPaket,
            jenis_to: jenisTo,
            deskripsi: deskripsi,
            harga: harga,
            premium: premium.ya
        }
        console.log(payload);
        setOpen(false);
    }

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
                                <DataListPaket />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal add */}
            <Modal title='Tambah Paket Tryout' open={open} setClose={() => setOpen(false)}>
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
                            <select value={jenisTo} onChange={(e) => setJenisTo(e.target.value)} id="jenis-to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
                            <textarea
                                rows="4"
                                id="deskripsi"
                                value={deskripsi}
                                placeholder="Masukkan Deskripsi"
                                onChange={(e) => setDeskripsi(e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
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
                            <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Premium</label>
                            <div className='flex flex-row gap-6'>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={premium.ya}
                                        id="checked-checkbox"
                                        onChange={(e) => setPremium({ ya: e.target.checked, tidak: false })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="premium-check" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ya</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={premium.tidak}
                                        id="premium-uncheck"
                                        onChange={(e) => setPremium({ ya: false, tidak: e.target.checked })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="premium-uncheck" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tidak</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button
                            title='Tambah'
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