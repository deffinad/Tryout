import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import DialogModal from '../../../../components/DialogModal';
import { deletePengguna, getDetailPengguna, updatePengguna } from '../../../../redux/actions/dataPengguna.action';

const DataListItem = ({ user, index, keyItem, setRefresh }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
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
        role: ""
    })

    const { detail } = useSelector(state => state.users);

    const handleOpenEditModal = (id) => {
        setOpen(true);
        dispatch(getDetailPengguna(id));
    }

    const handleEditUser = () => {
        dispatch(updatePengguna(user.id, data, setRefresh));
        setOpen(false);
    }

    const handleCloseDialog = (status = 0) => {
        if (status === 1) {
            dispatch(deletePengguna(user.id, setRefresh))
            setOpenDialog(false);
        } else {
            setOpenDialog(false);
        }
    }

    useEffect(() => {
        if (detail != null) {
            const value = detail.result
            setData({
                asal_kota: value.asal_kota,
                asal_sekolah: value.asal_sekolah,
                avatar: value.avatar,
                jenis_kelamin: value.jenis_kelamin,
                nama: value.nama,
                provinsi: value.provinsi,
                tgl_lahir: value.tgl_lahir,
                username: value.username,
                email: value.email,
                password: value.password,
                no_hp: value.no_hp,
                role: value.role
            })
        }

        return () => { }
    }, [detail])

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

    const handleNavigateToDetail = (id) => {
        navigate(`/user/detail/${id}`);
    }

    return (
        <Fragment>
            <tr key={keyItem} className='bg-white hover:bg-gray-100 cursor-pointer'>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[40%] px-3 py-3 border-b border-gray-200 text-sm">
                    <div className='flex-1 flex flex-row gap-2 items-center'>
                        <img src={user.avatar} height={30} width={30} className='rounded-full bg-grey-200' />
                        <p onClick={() => handleNavigateToDetail(user.id)} className="text-gray-900 text-lg whitespace-no-wrap underline cursor-pointer">{user.nama}</p>
                    </div>
                </td>
                <td className="w-[35%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{user.email}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 text-sm">
                    <div className="flex flex-row gap-x-3 gap-y-0">
                        <Button
                            title="Edit"
                            bgColor="bg-primary"
                            textColor="text-white"
                            bgColorHover='hover:bg-bgHoverPrimary'
                            onClick={() => handleOpenEditModal(user.id)}
                        />
                        <Button
                            title="Hapus"
                            bgColor="bg-bgDanger"
                            textColor="text-white"
                            onClick={() => setOpenDialog(true)}
                        />
                    </div>
                </td>
            </tr>

            {/* Modal Delete */}
            <DialogModal
                open={openDialog}
                title={'Hapus Pengguna'}
                content={'Apakah anda yakin ingin menghapus pengguna ini?'}
                handleClose={handleCloseDialog}
            />

            {/* Modal Edit */}
            <Modal title='Edit Pengguna' open={open} setClose={() => setOpen(false)} style={'w-[800px]'}>
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
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
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
                            onClick={() => handleEditUser()}
                        />
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default DataListItem;