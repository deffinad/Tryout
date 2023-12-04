import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { ItemCardPembayaran } from '../../../components/Item/ItemCardPembayaran'
import { FaChevronRight, FaMoneyBillTransfer, FaMoneyCheck } from 'react-icons/fa6'

const Pembayaran = () => {
    const [activeMetode, setActiveMetode] = useState({
        eWallet: false,
        transfer: false
    })

    return (
        <Layout>
            <section className='flex flex-col gap-8'>
                <h1 className='text-2xl font-bold'>Pembayaran</h1>

                {/* LIST PAKET */}
                <div className='grid grid-cols-1 gap-4'>
                    <ItemCardPembayaran />
                    <ItemCardPembayaran />
                </div>

                <div className='w-full rounded-3xl shadow-lg flex flex-col p-6 gap-4 bg-white'>
                    <h1 className='uppercase text-3xl font-semibold '>Metode Pembayaran</h1>

                    <div className='grid grid-cols-1 divide-y-4 gap-4 text-gray-70'>
                        <button className='flex justify-between items-center pt-4' onClick={() => setActiveMetode({...activeMetode, eWallet:!activeMetode.eWallet})}>
                            <div className='flex items-center gap-2'>
                                <FaMoneyCheck className='h-8 w-8 text-primary' />
                                <p className='text-lg font-medium'>Pembayaran E-Wallet</p>
                            </div>

                            <div className={`transform ${activeMetode.eWallet ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                                <FaChevronRight className='h-6 w-6' />
                            </div>
                        </button>
                        
                        <div className={`flex flex-col ${activeMetode.eWallet ? 'h-[100px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
                            <div className='flex justify-between items-center pt-4 pl-8'>
                                <div className='flex items-center gap-10'>
                                    <FaMoneyBillTransfer className='h-8 w-8 text-primary' />
                                    <p className='text-lg font-medium'>08xxxx</p>
                                    <p className='text-lg font-medium'>a.n Lilis Sukmawati</p>
                                </div>

                                <div>
                                    <p>Salin</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-4 pl-8'>
                                <div className='flex items-center gap-10'>
                                    <FaMoneyBillTransfer className='h-8 w-8 text-primary' />
                                    <p className='text-lg font-medium'>08xxxx</p>
                                    <p className='text-lg font-medium'>a.n Lilis Sukmawati</p>
                                </div>

                                <div>
                                    <p>Salin</p>
                                </div>
                            </div>
                        </div>

                        <button className='flex justify-between items-center pt-4' onClick={() => setActiveMetode({...activeMetode, transfer:!activeMetode.transfer})}>
                            <div className='flex items-center gap-2'>
                                <FaMoneyBillTransfer className='h-8 w-8 text-primary' />
                                <p className='text-lg font-medium'>Transfer Bank</p>
                            </div>

                            <div className={`transform ${activeMetode.transfer ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
                                <FaChevronRight className='h-6 w-6' />
                            </div>
                        </button>

                        <div className={`flex flex-col ${activeMetode.transfer ? 'h-[100px]' : 'h-0'} transition-all ease-in-out duration-500 overflow-hidden relative`}>
                            <div className='flex justify-between items-center pt-4 pl-8'>
                                <div className='flex items-center gap-10'>
                                    <FaMoneyBillTransfer className='h-8 w-8 text-primary' />
                                    <p className='text-lg font-medium'>08xxxx</p>
                                    <p className='text-lg font-medium'>a.n Lilis Sukmawati</p>
                                </div>

                                <div>
                                    <p>Salin</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-4 pl-8'>
                                <div className='flex items-center gap-10'>
                                    <FaMoneyBillTransfer className='h-8 w-8 text-primary' />
                                    <p className='text-lg font-medium'>08xxxx</p>
                                    <p className='text-lg font-medium'>a.n Lilis Sukmawati</p>
                                </div>

                                <div>
                                    <p>Salin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Pembayaran