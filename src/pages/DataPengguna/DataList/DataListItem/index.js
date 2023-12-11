import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPengguna } from '../../../../redux/actions/dataPengguna.action';

const DataListItem = ({ user, index, keyItem }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [ttl, setTtl] = useState('');
    const [nama, setNama] = useState('');
    const [noHp, setNoHp] = useState('');
    const [email, setEmail] = useState('');
    const [asalSekolah, setAsalSekolah] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');

    const { detail } = useSelector(state => state.users);

    const handleOpenEditModal = (id) => {
        setOpen(true);
        dispatch(getDetailPengguna(id));
    }

    const handleEditUser = () => {
        const payload = {
            nama: nama,
            asal_sekolah: asalSekolah,
            ttl: ttl,
            jenis_kelamin: jenisKelamin,
            no_hp: noHp,
            email: email
        }
        console.log(payload);
        setOpen(false);
    }

    useEffect(() => {
        if (detail != null) {
            setTtl(detail.ttl);
            setNama(detail.nama);
            setNoHp(detail.no_hp);
            setEmail(detail.email);
            setAsalSekolah(detail.asal_sekolah);
            setJenisKelamin(detail.jenis_kelamin);
        }

        return () => { }
    }, [detail])

    return (
        <Fragment>
            <tr key={keyItem}>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[40%] px-3 py-3 border-b border-gray-200 bg-white text-sm" onClick={() => navigate(`/user/detail/${user.id}`)}>
                    <p className="text-gray-900 text-lg whitespace-no-wrap underline cursor-pointer">{user.nama}</p>
                </td>
                <td className="w-[35%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{user.email}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-row gap-x-3 gap-y-0">
                        <Button
                            title="Edit"
                            bgColor="primary"
                            textColor="white"
                            onClick={() => handleOpenEditModal(user.id)}
                        />
                        <Button
                            title="Hapus"
                            bgColor="bgDanger"
                            textColor="white"
                        />
                    </div>
                </td>
            </tr>

            {/* Modal Edit */}
            <Modal title='Edit Pengguna' open={open} setClose={() => setOpen(false)}>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input
                                type="text"
                                value={nama}
                                placeholder="Masukkan Nama"
                                onChange={(e) => setNama(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="asal-sekolah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asal Sekolah</label>
                            <input
                                type="text"
                                value={asalSekolah}
                                placeholder="Masukkan Asal Sekolah"
                                onChange={(e) => setAsalSekolah(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="ttl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat, Tanggal Lahir</label>
                            <input
                                value={ttl}
                                placeholder="Masukkan TTL"
                                onChange={(e) => setTtl(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="jenis-kelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
                            <select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} id="jensi-kelamin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="Laki Laki">Laki Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="no-hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No HP</label>
                            <input
                                type='text'
                                value={noHp}
                                placeholder="Masukkan No HP"
                                onChange={(e) => setNoHp(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button
                            title='Simpan'
                            textColor='white'
                            bgColor='bgSidebar'
                            onClick={()=> handleEditUser()}
                        />
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default DataListItem;