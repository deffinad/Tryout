import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../../components/Card'
import TextInput from '../../../components/TextInput'
import TextInputDropdown from '../../../components/TextInputDropdown'
import TextInputArea from '../../../components/TextInputArea'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSoalTryout, clearDetailSoal, clearDetailTryout, getDetailSoal, getDetailTryout, updateSoalTryout } from '../../../redux/actions/tryout.action'
import { getListMateri } from '../../../redux/actions/materiTryout.action'
import Button from '../../../components/Button'
import { FaPlus, FaXmark } from 'react-icons/fa6'

const FormSoal = () => {
  const { jenis, id, id_materi } = useParams()
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { detail, soal } = useSelector(state => state.tryout)
  const { list: listMateri } = useSelector(state => state.materi)
  const [pilihanMateri, setPilihanMateri] = useState([])
  const [data, setData] = useState({
    nama: '',
    id_materi: '',
    waktu_pengerjaan: '',
    jadwal: '',
    soal: []
  })

  useEffect(() => {
    dispatch(clearDetailTryout())
    dispatch(clearDetailSoal())
    dispatch(getListMateri(jenis))
    dispatch(getDetailTryout(id, jenis))
  }, [])

  useEffect(() => {
    if (id_materi !== undefined) {
      dispatch(getDetailSoal(id, jenis, id_materi))
    }
  }, [id_materi])

  useEffect(() => {
    if (soal !== null) {
      const newData = soal.result
      setData({
        nama: newData.nama,
        id_materi: newData.materi.id_materi,
        waktu_pengerjaan: newData.materi.waktu_mengerjakan,
        jadwal: newData.materi.jadwal,
        soal: newData.soal
      })
    }
  }, [soal])

  useEffect(() => {
    if (detail !== null) {
      setData({ ...data, nama: detail.result.nama })
    }
  }, [detail])

  useEffect(() => {
    if (listMateri !== null) {
      let arr = [{
        name: 'Masukan Materi Tryout',
        value: ''
      }]
      listMateri.result.map(item => {
        arr.push({
          name: item.nama,
          value: item.id
        })
      })
      setPilihanMateri(arr)
    }
  }, [listMateri])

  const addSoal = () => {
    let indexPrevSoal = data.soal.length - 1
    if (indexPrevSoal >= 0) {
      let dataSoal = data.soal[indexPrevSoal]
      let checkValidation = false

      if (dataSoal.nama === '' || dataSoal.pembahasan === '' || dataSoal.jawaban === '') {
        checkValidation = true
      }

      dataSoal.opsi.map(item => {
        if (item.value === '') {
          checkValidation = true
        }
      })

      if (checkValidation) {
        alert(`Masukan Data Soal ${indexPrevSoal + 1} Dengan Benar`)
      } else {
        setData({
          ...data, soal: [...data.soal, {
            nama: '',
            pembahasan: '',
            opsi: [
              {
                id: 'A',
                value: ''
              },
              {
                id: 'B',
                value: ''
              },
              {
                id: 'C',
                value: ''
              },
              {
                id: 'D',
                value: ''
              },
              {
                id: 'E',
                value: ''
              },
            ],
            jawaban: '',
          }]
        })
      }
    } else {
      setData({
        ...data, soal: [...data.soal, {
          nama: '',
          pembahasan: '',
          opsi: [
            {
              id: 'A',
              value: ''
            },
            {
              id: 'B',
              value: ''
            },
            {
              id: 'C',
              value: ''
            },
            {
              id: 'D',
              value: ''
            },
            {
              id: 'E',
              value: ''
            },
          ],
          jawaban: '',
        }]
      })
    }
  }

  const deleteSoal = (index) => {
    let newSoal = [...data.soal]
    newSoal.splice(index, 1)
    setData({
      ...data,
      soal: newSoal
    })
  }

  const handleInputSoal = (index, key, value) => {
    let newSoal = [...data.soal]
    newSoal[index][key] = value
    setData({
      ...data,
      soal: newSoal
    })
  }

  const handleInputOpsi = (indexSoal, indexOpsi, key, value) => {
    let newSoal = [...data.soal]
    newSoal[indexSoal]['opsi'][indexOpsi][key] = value

    setData({
      ...data,
      soal: newSoal
    })
  }

  const handleValidation = () => {
    let checkValidation = false;

    if (data.id_materi === '' || data.waktu_pengerjaan === '' || data.jadwal === '') {
      checkValidation = true
    }

    return checkValidation
  }

  const handleSubmitSoal = () => {
    const checkValidation = handleValidation()

    if (checkValidation) {
      alert('Mohon Masukan Data Soal Dengan Benar')
    } else {
      const payload = {
        id_materi: data.id_materi,
        jumlah_soal: data.soal.length,
        waktu_mengerjakan: data.waktu_pengerjaan,
        jadwal: data.jadwal,
        soal: data.soal
      }
      
      if(id_materi !== undefined){
        dispatch(updateSoalTryout(payload, jenis, id, navigation))
      }else{
        dispatch(addSoalTryout(payload, jenis, id, navigation))
      }
    }
  }

  return (
    <Fragment>
      <Card
        header={`${id_materi !== undefined ? 'Edit Soal' : 'Tambah Soal'}`}
        headerPlacement="center"
        style={'min-h-[75vh]'}
      >
        <div className="container">
          <div className="w-full overflow-hidden flex flex-col ">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8'>
              <div>
                <TextInput
                  name="jenis"
                  label="Jenis Tryout"
                  value={jenis}
                  disabled={true}
                />
              </div>
              <div>
                <TextInput
                  name="nama"
                  label="Nama Tryout"
                  value={data.nama}
                  placeholder="Masukkan Nama Tryout"
                  onChange={(e) => setData({ ...data, nama: e.target.value })}
                  disabled={true}
                />
              </div>
              <div>
                <TextInputDropdown
                  name="id_materi"
                  label="Materi Tryout"
                  value={data.id_materi}
                  options={pilihanMateri}
                  onChange={(e) => {
                    setData({ ...data, id_materi: e.target.value })
                  }}
                />
              </div>

              <div>
                <TextInput
                  name="waktu_pengerjaan"
                  type='number'
                  label="Waktu Mengerjakan (menit)"
                  value={data.waktu_pengerjaan}
                  placeholder="Masukkan Waktu Mengerjakan"
                  onChange={(e) => setData({ ...data, waktu_pengerjaan: e.target.value.toString() })}
                />
              </div>

              <div>
                <TextInput
                  name="jadwal"
                  type='date'
                  label="Jadwal Tryout"
                  value={data.jadwal}
                  placeholder="Masukkan Jadwal Tryout"
                  onChange={(e) => setData({ ...data, jadwal: e.target.value })}
                />
              </div>
            </div>

            {
              data.soal.map((item, index) => (
                <div className={`flex flex-col gap-6 ${index === 0 ? 'my-0' : 'my-6'}`} key={index}>
                  <div className='bg-primary p-4 rounded-lg text-white flex items-center justify-between'>
                    <h1 className='font-bold text-xl'>Soal {index + 1}</h1>
                    <button onClick={() => deleteSoal(index)}><FaXmark /></button>
                  </div>
                  <div className='flex flex-col gap-6 '>
                    <div>
                      <TextInputArea
                        name="soal"
                        label="Soal"
                        value={item.nama}
                        placeholder="Masukkan Nama Soal"
                        onChange={(e) => handleInputSoal(index, 'nama', e.target.value)}
                      />
                    </div>

                    <div>
                      <TextInputArea
                        name="pembahasan"
                        label="Pembahasan"
                        value={item.pembahasan}
                        placeholder="Masukkan Pembahasan Soal"
                        onChange={(e) => handleInputSoal(index, 'pembahasan', e.target.value)}
                      />
                    </div>

                    <div className='grid grid-cols-3 gap-6'>
                      {
                        item.opsi.map((opsi, i) => (
                          <div key={`soal ${index} opsi ${i}`}>
                            <TextInput
                              name={`opsi${i}`}
                              label={`Opsi ${opsi.id}`}
                              value={opsi.value}
                              placeholder={`Masukan Opsi ${opsi.id}`}
                              onChange={(e) => handleInputOpsi(index, i, 'value', e.target.value)}
                            />
                          </div>
                        ))
                      }
                      <div>
                        <TextInput
                          name="jawaban"
                          label={`Jawaban`}
                          value={item.jawaban}
                          placeholder={`Masukan Jawaban (A/B/C/D/E)`}
                          onChange={(e) => handleInputSoal(index, 'jawaban', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

            <div className='flex flex-row gap-4 py-6'>
              <Button
                classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]"
                onClick={addSoal}>
                <FaPlus />
                Tambah Soal
              </Button>
              <Button classNames="text-white bg-primary hover:bg-blue-[500] text-lg flex gap-[10px]" onClick={handleSubmitSoal}>
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  )
}

export default FormSoal