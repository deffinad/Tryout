import React, { Fragment, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListPengguna from "./ListPengguna";
import DetailPengguna from "./DetailPengguna";

const DataPengguna = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname === '/' &&
                <ListPengguna />
            }
            {(pathname === `/user/detail/${id}` && id) &&
                <DetailPengguna />
            }
        </Fragment>
    )
}

export default DataPengguna;