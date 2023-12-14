import React, { Fragment } from "react";
import DataListItem from "./DataListItem";
import { useSelector } from "react-redux";
import DataListHeader from "./DataListHeader";

const DataListMateri = () => {

    const { list } = useSelector(state => state.materi);

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

export default DataListMateri;