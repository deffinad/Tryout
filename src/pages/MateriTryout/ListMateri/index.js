import React, { Fragment, useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa6';
import DataListItem from "./DataListItem";
import Card from '../../../components/Card';
import { useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import DataListHeader from "./DataListHeader";
import { useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addMateri, getListMateri } from "../../../redux/actions/materiTryout.action";

const ListMateri = () => {
    const { jenis } = useParams();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [namaMateri, setNamaMateri] = useState('');

    const { list } = useSelector(state => state.materi);

    useEffect(() => {
        if (pathname === `/materi/${jenis}`) dispatch(getListMateri(jenis));
    }, [dispatch, pathname, jenis])

    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            dispatch(getListMateri(jenis));
        }
    }, [dispatch, refresh])

    const handleOpenTambahModal = () => {
        setOpen(true);
    }

    const handleTambah = () => {
        const payload = {
            "nama": namaMateri,
            "kategori": jenis
        }

        dispatch(addMateri(payload, setRefresh))
        setOpen(false);
    }

    return (
        <Fragment>
            <Card
                header={`List Materi Tryout ${jenis.toUpperCase()}`}
                headerPlacement="center"
                style={'min-h-[75vh]'}
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
                                <table className="min-w-full leading-normal">
                                    <DataListHeader />
                                    {list !== null &&
                                        <tbody>
                                            {(list.result.length > 0) && list.result.map((item, index) => (
                                                <Fragment key={item.id}>
                                                    <DataListItem
                                                        data={item}
                                                        index={index}
                                                        setRefresh={setRefresh}
                                                    />
                                                </Fragment>
                                            ))}
                                        </tbody>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal Tambah */}
            <Modal title={`Tambah Materi Tryout ${jenis.toUpperCase()}`} open={open} setClose={() => setOpen(false)}>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input
                                type="text"
                                value={namaMateri}
                                placeholder="Masukkan Nama Materi Tryout"
                                onChange={(e) => setNamaMateri(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
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

export default ListMateri;