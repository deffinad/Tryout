import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMyTryout } from "../../../../Redux/actions/my-to.actions";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const dispatch = useDispatch()
    const { id, menu } = useParams()
    const { detail } = useSelector(state => state.myTo)

    useEffect(() => {
        dispatch(getDetailMyTryout(id, menu))
    }, [])

    return (
        <>
            {/* header */}
            <div className='grid grid-cols-2 grid-rows-1 gap-5'>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold uppercase">{detail?.nama}</h1>
                </div>
                <div className="flex flex-row justify-end">
                    <div className='flex flex-col justify-end items-center gap-2'>
                        <p className='font-bold text-center text-[1rem] uppercase'>Nilai Rata-Rata</p>
                        <div className='px-4 py-2 w-[120px] h-auto bg-secondary text-white flex justify-center items-center text-4xl font-semibold rounded-full'>
                            {detail?.rata_nilai}
                        </div>
                    </div>
                </div>
            </div>
            {/* list */}
            <div className="mb-7">
                {
                    detail?.materi.map(item => (
                        <div className="grid grid-cols-12 mb-2 gap-3">
                            <div className="col-span-6 flex flex-row items-center gap-3">
                                <img alt="" src="/assets/img/light-bulb-1.png" />
                                <p className="font-semibold text-lg">{item.nama}</p>
                            </div>
                            <div className="col-span-4 flex justify-start items-center">
                                <p className="text-textColorRed text-lg font-semibold">{item.nilai}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DetailPage;