import React, { Fragment } from "react";
import DataListHeader from "./DataListHeader";
import DataListItem from "./DataListItem";
import { useSelector } from "react-redux";

const DataListTryout = ({ setRefresh }) => {
    const { list } = useSelector(state => state.tryout)
    return (
        <table className="min-w-full leading-normal">
            <DataListHeader />
            <tbody>
                {list !== null && list.result.map((item, index) => (
                    <Fragment key={item.id}>
                        <DataListItem data={item} index={index} setRefresh={setRefresh} />
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default DataListTryout;