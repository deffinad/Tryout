import React, { useEffect, useState } from 'react'
import { FaCheck, FaFile, FaXmark } from 'react-icons/fa6'
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
            let item = <button key={i} onClick={() => setActiveSoalIndex(i)} className={`rounded-full w-12 h-12 ${activeSoalIndex === i ? 'bg-secondary' : handleCheckJawaban(soal[i]?.tipe_pilihan, jawaban[soal[i]?.id], soal[i]?.jawaban) ? 'bg-green-400' : 'bg-red-400'} flex items-center justify-center text-white text-lg transition-all duration-300`}>
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

    const handleCheckedPilihan = (id_soal, id_opsi, value) => {
        let check = jawaban.hasOwnProperty(id_soal)
        let checked = false
        if (check) {
            let index = jawaban[id_soal].findIndex(x => x.id === id_opsi)
            if (jawaban[id_soal][index]?.value === value) {
                checked = true
            } else {
                checked = false
            }
        } else {
            checked = false
        }

        return checked
    }

    const handleAnswerPilihan = (id_soal, id_opsi, dataJawaban) => {
        let check = jawaban.hasOwnProperty(id_soal)
        let checked = false
        if (check) {
            let index = jawaban[id_soal].findIndex(x => x.id === id_opsi)
            let indexJawaban = dataJawaban.findIndex(x => x.id === id_opsi)
            if (jawaban[id_soal][index]?.value === dataJawaban[indexJawaban]?.value) {
                checked = true
            } else {
                checked = false
            }
        } else {
            checked = false
        }

        return checked
    }

    const handleCheckJawaban = (type, dataJawaban, dataSoal) => {
        let check = false
        if (type === 'pilihan_ganda') {
            if (dataJawaban === dataSoal) {
                check = true
            }
        } else if (type === 'pilihan') {
            let answer = 0
            dataJawaban?.map((item) => {
                let tempCheck = dataSoal.some(x => x.id === item.id && item.value === x.value)
                if (tempCheck) {
                    answer += 1
                }
            })
            if (answer === dataSoal.length) {
                check = true
            }
        } else {
            if (dataJawaban?.toLowerCase() === dataSoal?.toLowerCase()) {
                check = true
            }
        }

        return check
    }

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

                                        <div className='flex flex-col flex-1'>
                                            {
                                                value.tipe_pilihan === 'pilihan_ganda' ? (
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
                                                ) : value.tipe_pilihan === 'pilihan' ? (
                                                    value.opsi.map((item, index) => (
                                                        <div className='flex flex-row mb-4'>
                                                            <div className='flex-1 flex items-center'>
                                                                <p>{item.value}</p>
                                                            </div>
                                                            <div className='w-60 p-2 flex flex-row gap-4 items-center'>
                                                                <RadioButton
                                                                    id={`soal${i}-index${index} `}
                                                                    name={`soal${i}-index${index}`}
                                                                    value={'Benar'}
                                                                    title={'Benar'}
                                                                    checked={handleCheckedPilihan(value.id, item.id, 'Benar')}
                                                                    answer={handleAnswerPilihan(value.id, item.id, value.jawaban)}
                                                                    disabled={true}
                                                                    type='pembahasan'
                                                                // onChange={() => handleJawaban(value.id, item.id, 'pilihan', 'Benar')}
                                                                />
                                                                <RadioButton
                                                                    id={`soal${i}-index${index} `}
                                                                    name={`soal${i}-index${index}`}
                                                                    value={'Salah'}
                                                                    title={'Salah'}
                                                                    checked={handleCheckedPilihan(value.id, item.id, 'Salah')}
                                                                    answerd={handleAnswerPilihan(value.id, item.id, value.jawaban)}
                                                                    disabled={true}
                                                                    type='pembahasan'
                                                                // onChange={() => handleJawaban(value.id, item.id, 'pilihan', 'Salah')}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='flex flex-col gap-4'>
                                                        {
                                                            jawaban[value.id]?.toLowerCase() === value?.jawaban?.toLowerCase() ? (
                                                                <div className='bg-green-400 rounded p-2 flex flex-row gap-2 items-center text-white text-lg'>
                                                                    <FaCheck />
                                                                    <p>Benar</p>
                                                                </div>
                                                            ) : (
                                                                <div className='bg-red-400 rounded p-2 flex flex-row gap-2 items-center text-white text-lg'>
                                                                    <FaXmark />
                                                                    <p>Salah</p>
                                                                </div>
                                                            )
                                                        }
                                                        <textarea id={'jawaban'} rows="4" disabled={true} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder={'Masukan Jawaban'}>{jawaban[value.id]}</textarea>
                                                    </div>
                                                )
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