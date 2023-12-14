import React, { Fragment, useState } from "react";
import { FaPlus } from 'react-icons/fa6';
import Card from '../../../components/Card';
import { useParams } from "react-router-dom";
import DataListMateri from "./DataListMateri";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
// import { useLocation } from "react-router-dom";
// import { getListMateri } from "../../../redux/actions/materiTryout.action";

const ListMateri = () => {
    const { jenis } = useParams();
    // const dispatch = useDispatch();
    // const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [namaMateri, setNamaMateri] = useState('');

    // useEffect(() => {
    //     if (pathname === '/') dispatch(getListMateri());
    // }, [dispatch, pathname])

    const handleOpenTambahModal = () => {
        setOpen(true);
    }

    const handleTambah = () => {
        const payload = {
            materi: namaMateri
        }
        
        console.log(payload);
    }

    return (
        <Fragment>
            <Card
                header={`List Materi Tryout ${jenis.toUpperCase()}`}
                headerPlacement="center"
            >
                <div className="flex justify-start items-center">
                    <Button classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]" onClick={()=>handleOpenTambahModal()}>
                        <FaPlus />
                        Tambah
                    </Button>
                </div>
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <DataListMateri />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Modal Tambah */}
            <Modal title={`Tambah Materi Tryout ${jenis.toUpperCase()}`} open={open} setClose={() => setOpen(false)}>
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

export default ListMateri;