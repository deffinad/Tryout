import React from 'react';
// import Button from '../../../../components/Button';

const DataTryoutItem = ({ item, index, key }) => {

    return (
        <tr key={key} className='bg-white hover:bg-gray-100 cursor-pointer'>
            <td className="w-[5%] px-3 py-3 border-b border-gray-200 text-sm">
                <p className="text-gray-900 text-lg whitespace-no-wrap text-center">{index + 1}.</p>
            </td>
            <td className="w-[40%] px-3 py-3 border-b border-gray-200 text-sm">
                <p className="text-gray-900 text-lg whitespace-no-wrap">{item.nama}</p>
            </td>
            <td className="w-[30%] px-3 py-3 border-b border-gray-200 text-sm">
                <p className="text-gray-900 text-lg whitespace-no-wrap">{item.jadwal}</p>
            </td>
            <td className="w-[25%] px-3 py-3 border-b border-gray-200 text-sm">
                <p className="text-gray-900 text-lg whitespace-no-wrap">{item.nilai}</p>
            </td>
            {/* <td className="w-[20%] px-3 py-3 border-b border-gray-200 text-sm">
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
            </td> */}
        </tr>
    )
}

export default DataTryoutItem;