import React from "react";

const DetailPage = () => {
    return (
        <>
            {/* header */}
            <div className='grid grid-cols-2 grid-rows-1 gap-5'>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold uppercase">Nilai Try Out</h1>
                    <h1 className="text-4xl font-semibold uppercase">UTBK - SNBPT #1</h1>
                </div>
                <div className="flex flex-row justify-end">
                    <div className='flex flex-col justify-end items-center gap-2'>
                        <p className='font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata</p>
                        <div className='h-[100px] w-[200px] bg-secondary text-white flex justify-center items-center text-[85px] rounded-full'>
                            786
                        </div>
                    </div>
                </div>
            </div>
            {/* list */}
            <div className="mb-7">
                <p className="text-lg text-secondary font-semibold mb-5">TPS (Tes Potensi Skolastik)</p>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Penalaran Umum</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Pengetahuan dan Penalaran Umum</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Kemampuan Memahami Bacaan dan Tulisan</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Kemampuan Kuantitatif</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
            </div>
            <div className="mb-7">
                <p className="text-lg text-secondary font-semibold mb-5">Literasi dan Penalaran Matematika</p>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Literasi Bahasa Indonesia</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Literasi Bahasa Inggris</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-2 gap-3">
                    <div className="col-span-6 flex flex-row items-center gap-3">
                        <img alt="" src="/assets/img/light-bulb-1.png" />
                        <p className="font-semibold text-lg">Penalaran Matematika</p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center">
                        <p className="text-textColorRed text-lg font-semibold">600</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage;