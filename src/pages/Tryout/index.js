import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListTryout from "./ListTryout";

const Tryout = () => {
    const { pathname } = useLocation()
    const { jenis } = useParams()
    return (
        <Fragment>
            {pathname === '/tryout/' + jenis &&
                <ListTryout />
            }
        </Fragment>
    )
}

export default Tryout;