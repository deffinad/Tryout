import React from 'react';

const DataListHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col" className="w-[5%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    No
                </th>
                <th scope="col" className="w-[40%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Nama
                </th>
                <th scope="col" className="w-[35%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Email
                </th>
                <th scope="col" className="w-[20%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Aksi
                </th>
            </tr>
        </thead>
    )
}

export default DataListHeader;