import React, { Fragment } from 'react';
import DataListItem from './DataListItem';
import DataListHeader from './DataListHeader';

const DataList = ({ datas }) => {
    return (
        <table className="min-w-full leading-normal">
            <DataListHeader />
            <tbody>
                {datas.map((user, index) => (
                    <Fragment key={user.id}>
                        <DataListItem user={user} index={index} keyItem={user.id} />
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default DataList;