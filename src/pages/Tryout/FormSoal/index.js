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
import { fetchError } from '../../../redux/actions/common.action'

const FormSoal = () => {
  const { jenis, id, id_materi } = useParams()
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { detail, soal } = useSelector(state => state.tryout)
  const { list: listMateri } = useSelector(state => state.materi)
  const [pilihanMateri, setPilihanMateri] = useState([])
  const pilihanTipe = [
    {
      name: 'Masukan Tipe Pilihan',
      value: ''
    },
    {
      name: 'Pilihan Ganda',
      value: 'pilihan_ganda'
    },
    {
      name: 'Essay',
      value: 'essay'
    },
    {
      name: 'Pilihan',
      value: 'pilihan'
    },
  ]
  const [data, setData] = useState({
    nama: '',
    id_materi: '',
    waktu_pengerjaan: '',
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

      if (dataSoal.nama === '' || dataSoal.pembahasan === '' || dataSoal.jawaban === null || dataSoal.tipe_pilihan === '') {
        checkValidation = true
      }

      dataSoal.opsi.map(item => {
        if (item.value === '') {
          checkValidation = true
        }
      })

      if (checkValidation) {
        dispatch(fetchError(`Masukan Data Soal ${indexPrevSoal + 1} Dengan Benar`))
      } else {
        setData({
          ...data, soal: [...data.soal, {
            nama: '',
            gambar: '',
            gambar_pembahasan: '',
            pembahasan: '',
            tipe_pilihan: '',
            jawaban: null,
          }]
        })
      }
    } else {
      setData({
        ...data, soal: [...data.soal, {
          nama: '',
          gambar: '',
          gambar_pembahasan: '',
          pembahasan: '',
          tipe_pilihan: '',
          jawaban: null,
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

  const handleInputSoal = async (index, key, value) => {
    let newSoal = [...data.soal]
    if (key === 'gambar' || key === 'gambar_pembahasan') {
      try {
        const base64String = await convertImageToBase64(value);
        newSoal[index][key] = base64String
      } catch (error) {
        newSoal[index][key] = ''
      }
    } else if (key === 'tipe_pilihan') {
      newSoal[index][key] = value
      let opsi = null
      let jawaban = null
      if (value === 'pilihan_ganda') {
        opsi = [
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
        ]
        jawaban = ''
      } else if (value === 'pilihan') {
        opsi = [
          {
            id: 1,
            value: ''
          }
        ]
        jawaban = []
      } else {
        opsi = []
        jawaban = ''
      }
      newSoal[index]['opsi'] = opsi
      newSoal[index]['jawaban'] = jawaban
    } else {
      newSoal[index][key] = value
    }
    setData({
      ...data,
      soal: newSoal
    })
    //   {
    //     id: 'A',
    //     value: ''
    //   },
    //   {
    //     id: 'B',
    //     value: ''
    //   },
    //   {
    //     id: 'C',
    //     value: ''
    //   },
    //   {
    //     id: 'D',
    //     value: ''
    //   },
    //   {
    //     id: 'E',
    //     value: ''
    //   },
    // ],
  }

  const handleInputOpsi = async (indexSoal, indexOpsi, key, value) => {
    let newSoal = [...data.soal]
    if (key === 'jawaban') {
      let newJawaban = newSoal[indexSoal][key]
      let check = newJawaban.hasOwnProperty(indexOpsi)
      if (!check) {
        newJawaban.push({
          id: indexOpsi + 1,
          value: value
        })
      } else {
        newJawaban[indexOpsi] = {
          id: indexOpsi + 1,
          value: value
        }
      }
      newSoal[indexSoal][key] = newJawaban
    } else {
      if (key === 'gambar') {
        try {
          const base64String = await convertImageToBase64(value);
          newSoal[indexSoal]['opsi'][indexOpsi][key] = base64String
        } catch (error) {
          newSoal[indexSoal]['opsi'][indexOpsi][key] = ''
        }
      } else {
        if (newSoal[indexSoal]['opsi'][indexOpsi]['gambar'] !== '' || newSoal[indexSoal]['opsi'][indexOpsi]['gambar'] === undefined) {
          newSoal[indexSoal]['opsi'][indexOpsi]['gambar'] = ''
        }
        newSoal[indexSoal]['opsi'][indexOpsi][key] = value

      }
    }

    setData({
      ...data,
      soal: newSoal
    })
  }

  const handleValidation = () => {
    let checkValidation = false;

    if (data.id_materi === '' || data.waktu_pengerjaan === '') {
      checkValidation = true
    }

    return checkValidation
  }

  const handleSubmitSoal = () => {
    const checkValidation = handleValidation()

    if (checkValidation) {
      dispatch(fetchError(`Mohon Masukan Data Soal Dengan Benar`))
    } else {
      const payload = {
        id_materi: data.id_materi,
        jumlah_soal: data.soal.length,
        waktu_mengerjakan: data.waktu_pengerjaan,
        soal: data.soal
      }

      if (id_materi !== undefined) {
        dispatch(updateSoalTryout(payload, jenis, id, navigation))
      } else {
        dispatch(addSoalTryout(payload, jenis, id, navigation))
      }
    }
  }

  const convertImageToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = function (e) {
        var imageBase64 = e.target.result;
        resolve(imageBase64);
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(image);
    });
  };

  const handleAddOpsi = (indexSoal) => {
    let newSoal = [...data.soal]
    newSoal[indexSoal]['opsi'].push({
      id: newSoal[indexSoal]['opsi'].length + 1,
      value: ''
    })

    setData({
      ...data,
      soal: newSoal
    })
  }

  const handleDeleteOpsi = (indexSoal, indexOpsi) => {
    let newSoal = [...data.soal]
    newSoal[indexSoal]['opsi'].splice(indexOpsi, 1)
    let newOpsi = []
    newSoal[indexSoal]['opsi'].map((item, index) => {
      newOpsi.push({
        id: index + 1,
        value: item.value
      })
    })
    newSoal[indexSoal]['opsi'] = newOpsi
    if (newSoal[indexSoal]['jawaban'].length === 1) {
      newSoal[indexSoal]['jawaban'] = []
    } else {
      newSoal[indexSoal]['jawaban'].splice(indexOpsi, 1)
    }

    setData({
      ...data,
      soal: newSoal
    })
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
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">Pembahasan</label>
                      <div className='flex flex-col gap-2'>
                        <div>
                          <TextInput
                            name="image_gambar"
                            // label="Gambar"
                            type='file'
                            onChange={(e) => handleInputSoal(index, 'gambar_pembahasan', e.target.files[0])}
                          />
                        </div>
                        <div>
                          <TextInputArea
                            name="pembahasan"
                            // label="Pembahasan"
                            value={item.pembahasan}
                            placeholder="Masukkan Pembahasan Soal"
                            onChange={(e) => handleInputSoal(index, 'pembahasan', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-row gap-6'>
                      <div className='flex-1'>
                        <TextInput
                          name="image"
                          label="Gambar"
                          type='file'
                          onChange={(e) => handleInputSoal(index, 'gambar', e.target.files[0])}
                        />
                      </div>

                      <div className='flex-1'>
                        <TextInputDropdown
                          name="tipe_pilihan"
                          label="Tipe Pilihan"
                          value={item.tipe_pilihan}
                          options={pilihanTipe}
                          onChange={(e) => handleInputSoal(index, 'tipe_pilihan', e.target.value)}
                        />
                      </div>
                    </div>

                    {
                      item.tipe_pilihan !== '' ? (
                        item.tipe_pilihan === 'pilihan_ganda' ? (
                          <div className='grid grid-cols-1 gap-6'>
                            {
                              item.opsi.map((opsi, i) => (
                                <div key={`soal ${index} opsi ${i}`}>
                                  <label className="block text-sm font-medium text-gray-900 dark:text-white">{`Opsi ${opsi.id}`}</label>

                                  <div className='grid grid-cols-12 gap-4'>
                                    <div className='col-span-8'>
                                      <TextInput
                                        name={`opsiText${i}`}
                                        // label={`Opsi ${opsi.id}`}
                                        value={opsi.value}
                                        placeholder={`Masukan Opsi ${opsi.id}`}
                                        onChange={(e) => handleInputOpsi(index, i, 'value', e.target.value)}
                                      />
                                    </div>

                                    <div className='col-span-4'>
                                      <TextInput
                                        name={`opsiGambar${i}`}
                                        type='file'
                                        onChange={(e) => handleInputOpsi(index, i, 'gambar', e.target.files[0])}
                                      />
                                    </div>

                                  </div>
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
                        ) : item.tipe_pilihan === 'pilihan' ? (
                          <>
                            {
                              item.opsi.map((opsi, i) => (
                                <div key={`soal ${index} opsi ${i}`} className='flex flex-row gap-6'>
                                  <div className='flex-1'>
                                    <TextInput
                                      name={`opsi${i}`}
                                      label={`Opsi ${i + 1}`}
                                      value={opsi.value}
                                      placeholder={`Masukan Opsi ${i + 1}`}
                                      onChange={(e) => handleInputOpsi(index, i, 'value', e.target.value)}
                                    />
                                  </div>

                                  <div className='w-60'>
                                    <TextInput
                                      name={`jawaban${i + 1}`}
                                      label={`Jawaban`}
                                      value={item.jawaban[i]?.value}
                                      placeholder={`Jawaban Opsi ${i + 1} (Benar/Salah)`}
                                      onChange={(e) => handleInputOpsi(index, i, 'jawaban', e.target.value)}
                                    />
                                  </div>

                                  <div className='w-6 flex flex-row items-center justify-end pt-6'>
                                    <button className='dark:text-white' onClick={() => handleDeleteOpsi(index, i)}>
                                      <FaXmark size={24} />
                                    </button>
                                  </div>
                                </div>
                              ))
                            }
                            <div>
                              <button className='dark:text-white' onClick={() => handleAddOpsi(index)}>+ Tambah Opsi</button>
                            </div>
                          </>
                        ) : (
                          <div>
                            <TextInputArea
                              name="jawaban"
                              label="Jawaban"
                              value={item.jawaban}
                              placeholder="Masukkan Jawaban"
                              onChange={(e) => handleInputSoal(index, 'jawaban', e.target.value)}
                            />
                          </div>
                        )
                      ) : null
                    }
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
      </Card >
    </Fragment >
  )
}

export default FormSoal