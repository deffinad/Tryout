import React, { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import ListMateri from "./ListMateri";

const MateriTryout = () => {
    const { jenis } = useParams();
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname === `/materi/${jenis}` && 
                <ListMateri />
            }
        </Fragment>
    )
}

export default MateriTryout;