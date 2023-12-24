import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../../components/Card'
import { FaChevronRight, FaClock, FaFile, FaPlus } from 'react-icons/fa6'
import Modal from '../../../components/Modal'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetailTryout, deleteDetailTryout, getDetailTryout } from '../../../redux/actions/tryout.action'

const DetailTryout = () => {
    const { pathname } = useLocation()
    const { jenis, id } = useParams()
    const dispatch = useDispatch()
    const { detail } = useSelector(state => state.tryout)
    const navigation = useNavigate()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        dispatch(getDetailTryout(id, jenis))
    }, [id])

    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            dispatch(getDetailTryout(id,jenis));
        }
    }, [ refresh])

    const handleDeleteMateri = (id_materi) => {
        dispatch(deleteDetailTryout(jenis, id, id_materi, setRefresh))
    }

    return (
        <Fragment>
            <Card
                header={`Detail ${detail !== null ? detail.result.nama : ''}`}
                headerPlacement="center"
                style={'min-h-[75vh]'}
            >
                <div className="flex justify-start items-center">
                    <Button classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]" onClick={() => navigation(`/tryout/${jenis}/${id}/soal`)}>
                        <FaPlus />
                        Tambah Soal
                    </Button>
                </div>
                <div className="container">
                    <div className="w-full overflow-hidden grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8">
                        {
                            detail !== null && detail.result.materi.map(item => (
                                <ItemSoal data={item} jenis={jenis} id={id} handleDeleteMateri={handleDeleteMateri}/>
                            ))
                        }
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

const ItemSoal = ({ data, jenis, id, handleDeleteMateri }) => {
    const navigation = useNavigate()
    return (
        <button onClick={() => navigation(`/tryout/${jenis}/${id}/soal/${data.id_materi}`)} className='flex-1 flex flex-col p-6 shadow-lg rounded-3xl bg-gray-100 text-gray-600'>
            <div className='flex-1 flex items-start'>
                <h1 className='font-bold text-xl text-start mb-2'>{data.nama}</h1>
            </div>

            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <FaFile />
                        <p>{data.jumlah_soal} soal</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaClock />
                        <p>{data.waktu_mengerjakan} menit</p>
                    </div>
                </div>

                <div>
                    <FaChevronRight />
                </div>
            </div>

            <button onClick={(e) => {
                e.stopPropagation()
                handleDeleteMateri(data.id_materi)
            }}
                className='mt-5 hover:bg-red-700 bg-red-600 w-full text-white rounded-lg py-1'>
                Hapus
            </button>
        </button>
    )
}
export default DetailTryout