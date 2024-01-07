import React, { Fragment, useEffect, useState } from "react";
import DataList from "../DataList";
import { useDispatch, useSelector } from "react-redux";
import Card from '../../../components/Card';
import { addPengguna, getDataPengguna } from "../../../redux/actions/dataPengguna.action";
import Button from "../../../components/Button";
import { FaPlus } from "react-icons/fa6";
import Modal from "../../../components/Modal";

const ListPengguna = () => {
    const { list } = useSelector(state => state.users);
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(false);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        asal_kota: "",
        asal_sekolah: "",
        avatar: "",
        jenis_kelamin: "",
        nama: "",
        provinsi: "",
        tgl_lahir: "",
        username: "",
        email: "",
        no_hp: "",
        password: "",
        role: "user"
    })

    useEffect(() => {
        dispatch(getDataPengguna())
    }, [])

    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            dispatch(getDataPengguna())
        }
    }, [dispatch, refresh])

    const handleOpenTambahModal = () => {
        setData({
            asal_kota: "",
            asal_sekolah: "",
            avatar: "",
            jenis_kelamin: "",
            nama: "",
            provinsi: "",
            tgl_lahir: "",
            username: "",
            email: "",
            no_hp: "",
            password: "",
            role: "user"
        })
        setOpen(true);
    }

    const handleAddUser = () => {
        dispatch(addPengguna(data, setRefresh));
        setOpen(false);
    }

    const convertImageToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();

            reader.onload = function (e) {
                var imageBase64 = e.target.result;
                resolve(imageBase64);
            };

            reader.onerror = function (error) {
                reject(error);
            };

            reader.readAsDataURL(image);
        });
    };

    return (
        <Fragment>
            <Card
                header="Data Pengguna"
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
                                <DataList datas={list} setRefresh={setRefresh} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal Tambah */}
            <Modal title='Tambah Pengguna' open={open} setClose={() => setOpen(false)} style={'w-[800px]'}>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-1">
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                <input
                                    type="text"
                                    value={data.nama}
                                    placeholder="Masukkan Nama"
                                    onChange={(e) => setData({ ...data, nama: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    placeholder="Masukkan Email"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input
                                    type="text"
                                    value={data.username}
                                    placeholder="Masukkan Username"
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    placeholder="Masukkan Password"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <label htmlFor="asal-sekolah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asal Sekolah</label>
                                <input
                                    type="text"
                                    value={data.asal_sekolah}
                                    placeholder="Masukkan Asal Sekolah"
                                    onChange={(e) => setData({ ...data, asal_sekolah: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="asal-kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asal Kota</label>
                                <input
                                    type="text"
                                    value={data.asal_kota}
                                    placeholder="Masukkan Asal Kota"
                                    onChange={(e) => setData({ ...data, asal_kota: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi</label>
                                <input
                                    type="text"
                                    value={data.provinsi}
                                    placeholder="Masukkan Provinsi"
                                    onChange={(e) => setData({ ...data, provinsi: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="no_hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomer HP</label>
                                <input
                                    type="text"
                                    value={data.no_hp}
                                    placeholder="Masukkan Nomer HP"
                                    onChange={(e) => setData({ ...data, no_hp: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="ttl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat, Tanggal Lahir</label>
                                <input
                                    value={data.tgl_lahir}
                                    placeholder="Masukkan TTL"
                                    type='date'
                                    onChange={(e) => setData({ ...data, tgl_lahir: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="jenis-kelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
                                <select value={data.jenis_kelamin} onChange={(e) => setData({ ...data, jenis_kelamin: e.target.value })} id="jensi-kelamin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar</label>
                                <input
                                    type="file"
                                    onChange={async (e) => {
                                        const base64String = await convertImageToBase64(e.target.files[0]);
                                        setData({ ...data, avatar: base64String })
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button
                            title='Simpan'
                            textColor='text-white'
                            bgColor='bg-bgSidebar'
                            onClick={() => handleAddUser()}
                        />
                    </div>
                </form>
            </Modal>

        </Fragment>
    )
}

export default ListPengguna;