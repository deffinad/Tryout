import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../../../../components/Button';
import DialogModal from '../../../../../components/DialogModal';
import Modal from '../../../../../components/Modal';
import TextInput from '../../../../../components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetailTryout, clearListTryout, deleteTryout, getDetailTryout, updateTryout } from '../../../../../redux/actions/tryout.action';

const DataListItem = ({ data, index, setRefresh }) => {
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useDispatch()
    const [dataEdit, setDataEdit] = useState({
        nama: '',
        kategori: ''
    })
    const { detail } = useSelector(state => state.tryout);

    const handleOpenEditModal = (id, kategori) => {
        dispatch(getDetailTryout(id, kategori));
        setOpen(true);
    }

    // modal edit
    const handleEdit = () => {
        const payload = {
            "nama": dataEdit.nama,
            "kategori": dataEdit.kategori,
        }

        dispatch(updateTryout(data.id, payload, setRefresh))
        setOpen(false);
        handleResetState();
    }

    // modal hapus
    const handleCloseDialog = (status = 0) => {
        if (status === 1) {
            // action
            dispatch(deleteTryout(data.id, setRefresh));
            setOpenDialog(false);
        } else {
            // tutup
            setOpenDialog(false);
        }
    }

    const handleResetState = () => {
        setDataEdit({
            nama: '',
            kategori: ''
        });
    }

    useEffect(() => {
        if (detail !== null) {
            setDataEdit({
                nama: detail.result.nama,
                kategori: detail.result.kategori
            })
        }

        return () => { }
    }, [detail])

    return (
        <Fragment>
            <tr>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[75%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap uppercase">{data.nama}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-row gap-x-3 gap-y-0">
                        <Button
                            title="Edit"
                            bgColor="bg-primary"
                            textColor="text-white"
                            bgColorHover='hover:bg-bgHoverPrimary'
                            onClick={() => handleOpenEditModal(data.id, data.kategori)}
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
                title={'Hapus Tryout'}
                content={'Apakah anda yakin ingin menghapus tryout ini?'}
                handleClose={handleCloseDialog}
            />

            {/* Modal edit */}
            <Modal
                open={open}
                title='Tambah Paket Tryout'
                setClose={() => {
                    setOpen(false)
                    handleResetState()
                    dispatch(clearDetailTryout())
                }}
            >
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <TextInput
                                name="nama"
                                label="Nama Tryout"
                                value={dataEdit.nama}
                                placeholder="Masukkan Nama Tryout"
                                onChange={(e) => setDataEdit({ ...dataEdit, nama: e.target.value })}
                            />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                name="kategori"
                                label="Kategori"
                                value={dataEdit.kategori}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button
                            title='Ubah'
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