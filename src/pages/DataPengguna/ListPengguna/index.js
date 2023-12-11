import React, { Fragment } from "react";
import { FaPlus } from 'react-icons/fa6'
import Card from '../../../components/Card';
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
import DataList from "../DataList";
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
                <div className="flex justify-start items-center">
                    <Button classNames="text-white bg-secondary hover:bg-bgHoverSecondary text-lg flex gap-[10px]">
                        <FaPlus />
                        Tambah
                    </Button>
                </div>
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