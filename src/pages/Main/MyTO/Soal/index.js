import React, { useEffect, useState } from 'react'
import { FaFile } from 'react-icons/fa6'
import { Button } from '../../../../components/Button'
import { RadioButton } from '../../../../components/RadioButton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addMyToAnswer, clearListTryout, getListSoalTryout } from "../../../../Redux/actions/my-to.actions";
import DialogModal from '../../../../components/DialogModal'
import { useNavigate } from 'react-router-dom'

export const SoalTryOut = () => {
    const { menu, id_transaksi, id_tryout, id_materi } = useParams()
    const dispatch = useDispatch()
    const [activeSoalIndex, setActiveSoalIndex] = useState(0)
    const { open } = useSelector(state => state.sidebar)
    const { listSoal } = useSelector(state => state.myTo)
    const [soal, setSoal] = useState([])
    const [jawaban, setJawaban] = useState({})
    const navigate = useNavigate()
    const [state, setState] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });
    const [toggleSelesai, setToggleSelesai] = useState({
        toggle: false,
        id: ''
    })

    const renderNoSoal = (length) => {
        let arr = []
        for (let i = 0; i < length; i++) {
            let item = <button key={i} onClick={() => setActiveSoalIndex(i)} className={`rounded-full w-12 h-12 ${activeSoalIndex === i ? 'bg-secondary' : jawaban.hasOwnProperty(soal[i]?.id) ? 'bg-blue-400' : 'bg-gray-400'} flex items-center justify-center text-white text-lg transition-all duration-300`}>
                <p>{i + 1}</p>
            </button>;

            arr.push(item)
        }
        return arr
    }

    useEffect(() => {
        dispatch(clearListTryout())
        dispatch(getListSoalTryout(menu, id_tryout, id_materi))
    }, [])

    useEffect(() => {
        if (listSoal !== null) {
            setSoal(listSoal.soal)
            const dateNow = new Date()
            dateNow.setMinutes(dateNow.getMinutes() + parseInt(listSoal.materi.waktu_mengerjakan))
            const newDate = dateNow.getTime()
            setInterval(() => setNewTime(newDate), 1000);
        }
    }, [listSoal])

    useEffect(() => {
        if (state.hours === 0 && state.minutes === 0 && state.seconds === 0) {
            setToggleSelesai({
                toggle: true,
                id: 'timeout'
            });
        }
    }, [state])

    useEffect(() => {
        const jawaban_user = JSON.parse(localStorage.getItem('jawaban'))
        if (jawaban_user) {
            setJawaban(jawaban_user)
        }
    }, [])

    const handleJawaban = (id_soal, id, type = '', value = '') => {
        if (type === 'pilihan') {
            let check = jawaban.hasOwnProperty(id_soal)
            let newJawaban = []
            if (check) {
                newJawaban = jawaban[id_soal]
                let checkJawaban = newJawaban.some(item => item.id === id)
                if (checkJawaban) {
                    let index = newJawaban.findIndex(item => item.id === id)
                    newJawaban[index] = {
                        id: id,
                        value: value
                    }
                } else {
                    newJawaban[newJawaban.length] = {
                        id: id,
                        value: value
                    }
                }
            } else {
                newJawaban = jawaban[id_soal]
                newJawaban = [{
                    id: id,
                    value: value
                }]
            }
            setJawaban((prevAnswers) => ({
                ...jawaban,
                [id_soal]: newJawaban,
            }));
        } else {
            const OldJawaban = { ...jawaban }
            const newJawaban = {
                ...OldJawaban,
                [id_soal]: id
            }

            setJawaban(newJawaban);
            localStorage.setItem('jawaban', JSON.stringify(newJawaban))
        }
    }

    const handleFinishSoal = (status) => {
        if (status === 1) {
            let payloadJawaban = []

            if (Object.keys(jawaban).length !== 0) {
                for (const value in jawaban) {
                    payloadJawaban.push({
                        id_soal: value,
                        value: jawaban[value]
                    })
                }
            }

            const payload = {
                id_transaksi: id_transaksi,
                id_tryout: id_tryout,
                id_materi: id_materi,
                jawaban: payloadJawaban
            }
            dispatch(addMyToAnswer(payload, navigate))
            setToggleSelesai({
                toggle: false,
                id: ''
            });
            setTimeout(() => {
                navigate(`/to-saya/${menu}/beranda/${id_transaksi}/${id_tryout}`)
            }, 3000)
        } else {
            setToggleSelesai({
                toggle: false,
                id: ''
            })
        }
    }

    const setNewTime = (countdownDate) => {
        const currentTime = new Date().getTime();
        if (countdownDate >= currentTime) {

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    }

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

    return (
        <section className='flex flex-col gap-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
                <div className='flex flex-col gap-4 justify-between'>
                    <h1 className="text-4xl font-bold uppercase">{listSoal?.nama}</h1>
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

                <div className='flex lg:justify-end'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-bold'>Durasi Pengerjaan</h1>
                        <div className='flex gap-2 text-white'>
                            <div className='w-20 h-24 bg-primary rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>{state.days || '00'}</p>
                                <p>Jam</p>
                            </div>
                            <div className='w-20 h-24 bg-secondary rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>{state.minutes || '00'}</p>
                                <p>Menit</p>
                            </div>
                            <div className='w-20 h-24 bg-bgRed rounded-[36px] flex flex-col items-center justify-center'>
                                <p className='text-4xl font-semibold'>{state.seconds || '00'}</p>
                                <p>Detik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4 grid lg:grid-cols-12 grid-cols-1 gap-8'>
                <div className='lg:col-span-9 flex'>
                    {
                        soal.map((value, i) => (
                            i === activeSoalIndex ? (
                                <div key={`soal ${i}`} className='min-h-[500px] w-full shadow-lg bg-white rounded-3xl p-6 pt-16 relative flex flex-col gap-6'>
                                    <div className='absolute top-0 left-0 py-1 w-28 flex items-center justify-center text-white rounded-tl-3xl rounded-br-lg bg-primary'>
                                        <p>Soal {activeSoalIndex + 1}</p>
                                    </div>

                                    {
                                        value.gambar !== '' ? (
                                            <div className='py-2'>
                                                <img alt="" src={value.gambar} className='w-full' />
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
                                                    <div key={`soal${i} -${index}`} className='mb-6'>
                                                        <RadioButton
                                                            id={`soal${i}-index${index} `}
                                                            name={`soal${i}`}
                                                            value={item.id}
                                                            title={item.value}
                                                            image={item.gambar}
                                                            checked={jawaban[value.id] === item.id}
                                                            onChange={() => handleJawaban(value.id, item.id)}
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
                                                                onChange={() => handleJawaban(value.id, item.id, 'pilihan', 'Benar')}
                                                            />
                                                            <RadioButton
                                                                id={`soal${i}-index${index} `}
                                                                name={`soal${i}-index${index}`}
                                                                value={'Salah'}
                                                                title={'Salah'}
                                                                checked={handleCheckedPilihan(value.id, item.id, 'Salah')}
                                                                onChange={() => handleJawaban(value.id, item.id, 'pilihan', 'Salah')}
                                                            />
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <textarea
                                                    rows="4"
                                                    id={'jawaban'}
                                                    placeholder={'Masukan Jawaban'}
                                                    onChange={(e) => handleJawaban(value.id, e.target.value)}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    {jawaban[value.id]}
                                                </textarea>
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
                            ) : null
                        ))
                    }
                </div>
                <div className='lg:col-span-3 lg:block hidden'>
                    <div className='flex flex-col gap-8'>
                        <div className={`grid ${open ? 'lg:grid-cols-4' : 'grid-cols-5'} gap - y - 2`}>
                            {renderNoSoal(listSoal?.materi.jumlah_soal)}
                        </div>

                        <div>
                            <Button title={'Selesai'} onClick={() => setToggleSelesai({ toggle: true, id: 'finish' })} />
                        </div>
                    </div>
                </div>

            </div>

            <DialogModal
                open={toggleSelesai.toggle}
                title={toggleSelesai.id === 'finish' ? 'Soal Test' : 'Waktu Habis'}
                handleClose={handleFinishSoal}
                content={toggleSelesai.id === 'finish' ? 'Apakah anda yakin akan mengakhiri soal ini?' : 'Jawaban akan tersimpan otomatis ke dalam sistem'}
                labelButton='Ya'
                type={toggleSelesai.id === 'finish' ? 'dialog' : 'alert'}
            />
        </section>
    )
}
