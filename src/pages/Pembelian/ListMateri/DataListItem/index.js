import React, { Fragment, useState } from 'react';
import Button from '../../../../components/Button';
import { useDispatch } from 'react-redux';
import { deleteMateri } from '../../../../redux/actions/materiTryout.action';
import DialogModal from '../../../../components/DialogModal';

const DataListItem = ({ data, index, setRefresh }) => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    // modal hapus materi
    const handleCloseDialog = (status = 0) => {
        if (status === 1) {
            // action
            dispatch(deleteMateri(data.id, setRefresh))
            setOpenDialog(false);
        } else {
            // tutup
            setOpenDialog(false);
        }
    }

    return (
        <Fragment>
            <tr className='bg-white hover:bg-gray-100 cursor-pointer'>
                <td className="w-[5%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
                </td>
                <td className="w-[25%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.token}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.produk.nama}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 text-sm text-center">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.tanggal}</p>
                </td>
                <td className="w-[20%] px-3 py-3 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 text-lg whitespace-no-wrap">{data.status}</p>
                </td>
                <td className="w-[10%] px-3 py-3 border-b border-gray-200 text-sm">
                    <div className="flex flex-row gap-x-3 gap-y-0">
                        <Button
                            title="Hapus"
                            textColor="text-white"
                            bgColor="bg-bgDanger"
                            onClick={() => setOpenDialog(true)}
                        />
                    </div>
                </td>
            </tr>

            {/* Modal Hapus */}
            <DialogModal
                open={openDialog}
                title={'Hapus Materi Tryout'}
                content={'Apakah anda yakin ingin menghapus materi ini?'}
                handleClose={handleCloseDialog}
            />
        </Fragment>
    )
}

export default DataListItem;