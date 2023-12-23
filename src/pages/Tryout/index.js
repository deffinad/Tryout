import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListTryout from "./ListTryout";
import DetailTryout from "./DetailTryout";
import FormSoal from "./FormSoal";

const Tryout = () => {
    const { pathname } = useLocation()
    const { jenis, id, id_materi } = useParams()
    return (
        <Fragment>
            {
                pathname === `/tryout/${jenis}` ?
                    <ListTryout />
                    : pathname === `/tryout/${jenis}/${id}` ?
                        <DetailTryout />
                        : pathname === `/tryout/${jenis}/${id}/soal` ||  pathname === `/tryout/${jenis}/${id}/soal/${id_materi}` ?
                            <FormSoal />
                            : null
            }
        </Fragment>
    )
}

export default Tryout;