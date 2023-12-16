import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPengguna } from "../../../redux/actions/dataPengguna.action";

const DetailPengguna = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { detail } = useSelector(state => state.users);

    useEffect(() => {
        if (id) dispatch(getDetailPengguna(id));
    }, [id, dispatch])

    return (
        <>
            {detail != null &&
                <h1>Detail User Page {detail.nama}</h1>
            }
        </>
    )
}

export default DetailPengguna;