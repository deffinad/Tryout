import React, { useEffect, useState } from 'react'
import { FaFile } from 'react-icons/fa6'
import { Button } from '../../../../components/Button'
import { RadioButton } from '../../../../components/RadioButton'
import { useDispatch, useSelector } from 'react-redux'
import { clearListTryout, getListSoalTryout, getMyTryoutAnswer } from '../../../../Redux/actions/my-to.actions'
import { useParams } from 'react-router-dom'

const Pembahasan = () => {
    const [activeSoalIndex, setActiveSoalIndex] = useState(0)
    const dispatch = useDispatch()
    const { menu, id_transaksi, id_tryout, id_materi } = useParams()
    const { listSoal, myAnswer } = useSelector(state => state.myTo)
    const [soal, setSoal] = useState([])
    const [jawaban, setJawaban] = useState({})

    const renderNoSoal = (length) => {
        let arr = []
        for (let i = 0; i < length; i++) {
            let item = <button key={i} onClick={() => setActiveSoalIndex(i)} className={`rounded-full w-12 h-12 ${activeSoalIndex === i ? 'bg-secondary' : jawaban[soal[i]?.id] === soal[i]?.jawaban ? 'bg-green-400' : 'bg-red-400'} flex items-center justify-center text-white text-lg transition-all duration-300`}>
                <p>{i + 1}</p>
            </button>;

            arr.push(item)
        }
        return arr
    }

    useEffect(() => {
        dispatch(clearListTryout())
        dispatch(getListSoalTryout(menu, id_tryout, id_materi))
        dispatch(getMyTryoutAnswer(id_transaksi, id_tryout, id_materi))
    }, [])

    useEffect(() => {
        const answer = {}
        if (listSoal !== null) {
            setSoal(listSoal.soal)
        }
    }, [listSoal])

    useEffect(() => {
        const answer = {}
        if (myAnswer !== null) {
            myAnswer.jawaban.map(val => {
                answer[val.id_soal] = val.value
            })
            setJawaban(answer)
        }
    }, [myAnswer])

    return (
        <section className='flex flex-col gap-8'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">Pembahasan {listSoal?.nama}</h1>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-xl'>{listSoal?.materi.nama}</p>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-2'>
                                <FaFile />
                                <p>{listSoal?.materi.jumlah_soal} soal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4 grid grid-cols-12 gap-8'>
                <div className='col-span-9 flex flex-col gap-6'>
                    {
                        soal.map((value, i) => (
                            i === activeSoalIndex ? (
                                <>
                                    <div key={`soal ${i}`} className='min-h-[500px] w-full shadow-lg bg-white rounded-3xl p-6 pt-16 relative flex flex-col gap-6'>
                                        <div className='absolute top-0 left-0 py-1 w-28 flex items-center justify-center text-white rounded-tl-3xl rounded-br-lg bg-primary'>
                                            <p>Soal {activeSoalIndex + 1}</p>
                                        </div>

                                        {
                                            value.gambar !== '' ? (
                                                <div className='py-2'>
                                                    <img src={value.gambar} className='w-full' />
                                                </div>
                                            ) : null
                                        }

                                        <div className={`bg-gray-100 rounded ${value.gambar === '' ? 'py-2' : 'py-0'}`}>
                                            <p>{value.nama}</p>
                                        </div>

                                        <div className='flex flex-col'>
                                            {
                                                value.opsi.map((item, index) => (
                                                    <div key={`soal${i} -${index}`}>
                                                        <RadioButton
                                                            id={`soal${i} -${index} `}
                                                            name={`soal${i} `}
                                                            value={item.id}
                                                            title={item.value}
                                                            disabled={true}
                                                            checked={jawaban[value.id] === item.id}
                                                            answer={value.jawaban === item.id}
                                                            type='pembahasan'
                                                        // onChange={() => handleJawaban(value.id, item.id)}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            {
                                                activeSoalIndex !== 0 ? (
                                                    <Button title={'Sebelumnya'} onClick={() => setActiveSoalIndex(activeSoalIndex - 1)} />
                                                ) : <div></div>
                                            }
                                            {
                                                activeSoalIndex !== soal.length - 1 ? (
                                                    <Button title={'Selanjutnya'} onClick={() => setActiveSoalIndex(activeSoalIndex + 1)} />
                                                ) : <div></div>
                                            }
                                        </div>
                                    </div>

                                    <div className='shadow-lg bg-white rounded-3xl p-6 pt-16 relative flex flex-col gap-6'>
                                        <div className='absolute top-0 left-0 py-1 w-40 flex items-center justify-center text-white rounded-tl-3xl rounded-br-lg bg-primary'>
                                            <p>Pembahasan</p>
                                        </div>
                                        <div className='bg-gray-100 py-2'>
                                            <p>{value.pembahasan}</p>
                                        </div>
                                    </div>
                                </>
                            ) : null
                        ))
                    }


                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-5 gap-y-2'>
                            {renderNoSoal(listSoal?.materi.jumlah_soal)}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Pembahasan