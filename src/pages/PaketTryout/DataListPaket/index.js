import React, { Fragment } from "react";
import DataListHeader from "./DataListHeader";
import DataListItem from "./DataListItem";
import { useSelector } from "react-redux";

const DataListPaket = () => {

    const { list } = useSelector(state => state.paket);

    return (
        <table className="min-w-full leading-normal">
            <DataListHeader />
            <tbody>
                {(list.length > 0) && list.map((item, index) => (
                    <Fragment key={item.id}>
                        <DataListItem data={item} index={index} />
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default DataListPaket;