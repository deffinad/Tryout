import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListTryout from "./ListTryout";
import DetailTryout from "./DetailTryout";
import TambahSoal from "./TambahSoal";

const Tryout = () => {
    const { pathname } = useLocation()
    const { jenis, id } = useParams()
    return (
        <Fragment>
            {
                pathname === `/tryout/${jenis}` ?
                    <ListTryout />
                    : pathname === `/tryout/${jenis}/${id}` ?
                        <DetailTryout />
                        : pathname === `/tryout/${jenis}/${id}/soal` ?
                            <TambahSoal />
                            : null
            }
        </Fragment>
    )
}

export default Tryout;