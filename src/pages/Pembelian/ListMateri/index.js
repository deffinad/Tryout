import React, { Fragment, useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa6';
import DataListItem from "./DataListItem";
import Card from '../../../components/Card';
import Modal from "../../../components/Modal";
import DataListHeader from "./DataListHeader";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getListPembelian } from "../../../redux/actions/pembelian.action";

const ListMateri = () => {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);

    const { list } = useSelector(state => state.pembelian);

    useEffect(() => {
        dispatch(getListPembelian());
    }, [])

    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            dispatch(getListPembelian());
        }
    }, [dispatch, refresh])

    return (
        <Fragment>
            <Card
                header={`List Pembelian`}
                headerPlacement="center"
                style={'min-h-[75vh]'}
            >
                <div className="container mx-auto">
                    <div className="py-4">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <DataListHeader />
                                    {list !== null &&
                                        <tbody>
                                            {(list.result.length > 0) && list.result.map((item, index) => (
                                                <Fragment key={item.id}>
                                                    <DataListItem
                                                        data={item}
                                                        index={index}
                                                        setRefresh={setRefresh}
                                                    />
                                                </Fragment>
                                            ))}
                                        </tbody>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default ListMateri;