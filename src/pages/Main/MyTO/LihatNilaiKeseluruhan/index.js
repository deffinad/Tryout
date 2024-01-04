import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListMyTryout } from "../../../../Redux/actions/my-to.actions";
import ItemNilaiKeseluruhan from "../../../../components/Item/ItemNilaiKeseluruhan";

const LihatNilaiKeseluruhan = () => {
    const { menu } = useParams()
    const dispatch = useDispatch()
    const { listNilaiKeseluruhan } = useSelector(state => state.myTo)

    useEffect(() => {
        dispatch(getListMyTryout())
    }, [])

    return (
        <Fragment>
            <h1 className="text-2xl  font-semibold mb-8">Nilai Keseluruhan</h1>

            {
                listNilaiKeseluruhan?.map((item, index) => (
                    <ItemNilaiKeseluruhan data={item} menu={menu} key={index} />
                ))
            }
        </Fragment>
    )
}

export default LihatNilaiKeseluruhan;