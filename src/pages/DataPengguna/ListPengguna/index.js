import React, { Fragment } from "react";
import DataList from "../DataList";
import { useSelector } from "react-redux";
import Card from '../../../components/Card';
// import { useLocation } from "react-router-dom";
// import { getDataPengguna } from "../../redux/actions/dataPengguna.action";

const ListPengguna = () => {
    // const dispatch = useDispatch();
    // const { pathname } = useLocation();
    const { datas } = useSelector(state => state.users);

    // useEffect(() => {
    //     // if (pathname === '/') dispatch(getDataPengguna());
    // }, [dispatch, pathname])

    return (
        <Fragment>
            <Card
                header="Data Pengguna"
                headerPlacement="center"
            >
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <DataList datas={datas} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default ListPengguna;