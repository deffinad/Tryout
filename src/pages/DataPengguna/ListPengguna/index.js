import React, { Fragment, useEffect, useState } from "react";
import DataList from "../DataList";
import { useDispatch, useSelector } from "react-redux";
import Card from '../../../components/Card';
import { getDataPengguna } from "../../../redux/actions/dataPengguna.action";

const ListPengguna = () => {
    const { list } = useSelector(state => state.users);
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        dispatch(getDataPengguna())
    }, [])

    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            dispatch(getDataPengguna())
        }
    }, [dispatch, refresh])

    return (
        <Fragment>
            <Card
                header="Data Pengguna"
                headerPlacement="center"
                style={'min-h-[75vh]'}
            >
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <DataList datas={list} setRefresh={setRefresh} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default ListPengguna;