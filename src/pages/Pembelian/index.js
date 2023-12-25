import React, { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import ListMateri from "./ListMateri";

const Pembelian = () => {
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname === `/pembelian` && 
                <ListMateri />
            }
        </Fragment>
    )
}

export default Pembelian;