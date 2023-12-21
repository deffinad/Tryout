import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../../components/Card'
import TextInput from '../../../components/TextInput'
import TextInputDropdown from '../../../components/TextInputDropdown'
import TextInputArea from '../../../components/TextInputArea'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetailTryout, getDetailTryout } from '../../../redux/actions/tryout.action'
import { getListMateri } from '../../../redux/actions/materiTryout.action'
import Button from '../../../components/Button'
import { FaPlus } from 'react-icons/fa6'

const TambahSoal = () => {
  const { jenis, id } = useParams()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { detail } = useSelector(state => state.tryout)
  const { list: listMateri } = useSelector(state => state.materi)
  const [pilihanMateri, setPilihanMateri] = useState([])
  const [data, setData] = useState({
    jenis: jenis,
    nama: '',
    materi: '',
    waktu: '',
    jadwal: '',
    soal: [
      {
        no: 1,
        nama: '',
        pembahasan: '',
        opsi: [
          {
            id: 'A',
            nama: ''
          },
          {
            id: 'B',
            nama: ''
          },
          {
            id: 'C',
            nama: ''
          },
          {
            id: 'D',
            nama: ''
          },
          {
            id: 'E',
            nama: ''
          },
        ],
        jawaban: '',
      }
    ]
  })

  useEffect(() => {
    dispatch(clearDetailTryout())
  }, [])

  useEffect(() => {
    if (pathname === `/tryout/${jenis}/${id}/soal`) {
      dispatch(getDetailTryout(id, jenis))
    }
  }, [pathname])

  useEffect(() => {
    if (detail !== null) {
      setData({ ...data, nama: detail.result.nama })
    }
  }, [detail])

  useEffect(() => {
    if (data.nama !== '') {
      dispatch(getListMateri(jenis))
    }
  }, [data.nama])

  useEffect(() => {
    if (listMateri !== null) {
      let arr = []
      listMateri.result.map(item => {
        arr.push({
          name: item.nama,
          value: item.id
        })
      })
      setPilihanMateri(arr)
    }
  }, [listMateri])

  return (
    <Fragment>
      <Card
        header={`Tambah Soal`}
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
                  value={data.jenis}
                  placeholder="Masukkan Jenis Tryout"
                  onChange={(e) => setData({ ...data, jenis: e.target.value })}
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
                  name="materi"
                  label="Materi Tryout"
                  value={data.materi}
                  options={pilihanMateri}
                  onChange={(e) => {
                    setData({ ...data, materi: e.target.value })
                  }}
                />
              </div>

              <div>
                <TextInput
                  name="waktu"
                  type='number'
                  label="Waktu Mengerjakan (menit)"
                  value={data.waktu}
                  placeholder="Masukkan Waktu Mengerjakan"
                  onChange={(e) => setData({ ...data, waktu: e.target.value.toString() })}
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
                <div className={`flex flex-col gap-6 ${index === 0 ? 'my-0' : 'my-6'}`}>
                  <div className='bg-primary p-4 rounded-lg text-white'>
                    <h1 className='font-bold text-xl'>Soal {index + 1}</h1>
                  </div>
                  <div className='flex flex-col gap-6 '>
                    <div>
                      <TextInputArea
                        name="soal"
                        label="Soal"
                      // value={data.soal}
                      // placeholder="Masukkan Jenis Tryout"
                      // onChange={(e) => setData({ ...data, jenis: e.target.value })}
                      />
                    </div>

                    <div>
                      <TextInputArea
                        name="pembahasan"
                        label="Pembahasan"
                      // value={data.soal}
                      // placeholder="Masukkan Jenis Tryout"
                      // onChange={(e) => setData({ ...data, jenis: e.target.value })}
                      />
                    </div>

                    <div className='grid grid-cols-3 gap-6'>
                      {
                        item.opsi.map(opsi => (
                          <div>
                            <TextInput
                              name="opsi"
                              label={`Opsi ${opsi.id}`}
                              value={opsi.nama}
                              placeholder={`Masukan Opsi ${opsi.id}`}
                            // onChange={(e) => setData({ ...data, jenis: e.target.value })}
                            />
                          </div>
                        ))
                      }
                      <div>
                        <TextInput
                          name="jawaban"
                          label={`Jawaban`}
                          value={item.jawaban}
                          placeholder={`Masukan Jawaban`}
                        // onChange={(e) => setData({ ...data, jenis: e.target.value })}
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
                onClick={() =>
                  setData({
                    ...data, soal: [...data.soal, {
                      no: data.soal.length + 1,
                      nama: '',
                      pembahasan: '',
                      opsi: [
                        {
                          id: 'A',
                          nama: ''
                        },
                        {
                          id: 'B',
                          nama: ''
                        },
                        {
                          id: 'C',
                          nama: ''
                        },
                        {
                          id: 'D',
                          nama: ''
                        },
                        {
                          id: 'E',
                          nama: ''
                        },
                      ],
                      jawaban: '',
                    }]
                  })}>
                <FaPlus />
                Tambah Soal
              </Button>
              <Button classNames="text-white bg-primary hover:bg-blue-[500] text-lg flex gap-[10px]">
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  )
}

export default TambahSoal