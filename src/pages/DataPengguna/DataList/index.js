import React, { Fragment } from 'react';
import DataListItem from './DataListItem';
import DataListHeader from './DataListHeader';

const DataList = ({ datas, setRefresh }) => {
    return (
        <table className="min-w-full leading-normal">
            <DataListHeader />
            {datas !== null &&
                <tbody>
                    {(datas.result.length > 0) && datas.result.map((item, index) => (
                        <Fragment key={item.id}>
                            <DataListItem
                                user={item}
                                index={index}
                                setRefresh={setRefresh}
                            />
                        </Fragment>
                    ))}
                </tbody>
            }
        </table>
    )
}

export default DataList;