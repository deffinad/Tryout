import React, { Fragment, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import DataListTryout from "./DataListTryout";
import { useDispatch } from "react-redux";
import { addTryout, clearListTryout, getListTryout } from "../../../redux/actions/tryout.action";
import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";

const ListTryout = () => {
    const { pathname } = useLocation();
    const { jenis } = useParams()
    const [refresh, setRefresh] = useState(false);
    const [open, setOpen] = useState();
    const dispatch = useDispatch()
    const [data, setData] = useState({
        nama: '',
        kategori: '',
        jadwal: ''
    })

    useEffect(() => {
        if (jenis !== undefined) {
            dispatch(getListTryout(jenis))
            setData({
                nama: '',
                kategori: jenis,
                jadwal: ''
            })
        }
    }, [jenis])

    useEffect(() => {
        if (refresh) {
            dispatch(getListTryout(jenis))
            setRefresh(false);
        }
    }, [refresh])

    const handleResetState = () => {
        setData({
            nama: '',
            kategori: jenis,
            jadwal: ''
        });
    }

    const handleTambah = () => {
        const payload = {
            "nama": data.nama,
            "kategori": data.kategori,
            "jadwal": data.jadwal
        }

        setOpen(false);
        handleResetState();
        dispatch(clearListTryout());
        dispatch(addTryout(payload, setRefresh));
    }

    return (
        <Fragment>
            <Card
                header={`List Tryout ${jenis.toUpperCase()}`}
                headerPlacement="center"
                style={'min-h-[75vh]'}
            >
                <div className="flex justify-start items-center">
                    <Button classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]" onClick={() => setOpen(true)}>
                        <FaPlus />
                        Tambah
                    </Button>
                </div>
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <DataListTryout setRefresh={setRefresh} />
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
                    // dispatch(clearListTryout())
                }}
            >
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <TextInput
                                name="nama"
                                label="Nama Tryout"
                                value={data.nama}
                                placeholder="Masukkan Nama Tryout"
                                onChange={(e) => setData({ ...data, nama: e.target.value })}
                                />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                name="kategori"
                                label="Kategori"
                                value={data.kategori}
                                disabled={true}
                            />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                name="jadwal"
                                label="Jadwal"
                                type="date"
                                value={data.jadwal}
                                onChange={(e) => setData({ ...data, jadwal: e.target.value })}
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

export default ListTryout;