import React, { Fragment } from "react";
import DataListHeader from "./DataListHeader";
import DataListItem from "./DataListItem";

const DataListMateri = ({ datas }) => {
    return (
        <table className="min-w-full leading-normal">
            <DataListHeader />
            <tbody>
                {datas.map((item, index) => (
                    <Fragment key={item.id}>
                        <DataListItem  data={item} index={index} />
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default DataListMateri;