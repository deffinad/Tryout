import React, { Fragment, useEffect, useState } from 'react';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailMateri } from '../../../../../redux/actions/materiTryout.action';

const DataListItem = ({ data, index }) => {
    const dispatch = useDispatch();
    const [namaMateri, setNamaMateri] = useState('');
    const [open, setOpen] = useState(false);

    const { detail } = useSelector(state => state.materi);

    const handleOpenEditModal = (id) => {
        setOpen(true);
        dispatch(getDetailMateri(id));
    }

    const handleEdit = () => {
        const payload = {
            materi: namaMateri
        }
        console.log(payload);
        setOpen(false);
    }

    useEffect(() => {
        if (detail != null) {
            setNamaMateri(detail.nama);
        }

        return () => { }
    }, [detail])

    return (
        <Fragment>
            <tr>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[60%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.nama}</p>
                </td>
                <td className="w-[35%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
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
                        />
                    </div>
                </td>
            </tr>

            {/* Modal Edit */}
            <Modal title='Edit Materi Tryout' open={open} setClose={() => setOpen(false)}>
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
                            textColor='white'
                            bgColor='bgSidebar'
                            onClick={() => handleEdit()}
                        />
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default DataListItem;