import React from "react";

const DataListHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col" className="w-[5%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    No
                </th>
                <th scope="col" className="w-[25%%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Jenis TO
                </th>
                <th scope="col" className="w-[30%%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Nama Paket
                </th>
                <th scope="col" className="w-[20%%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Harga
                </th>
                <th scope="col" className="w-[20%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Aksi
                </th>
            </tr>
        </thead>
    )
}

export default DataListHeader;