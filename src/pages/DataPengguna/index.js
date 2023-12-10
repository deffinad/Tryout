import React, { Fragment } from "react";
import Card from '../../components/Card';
import Button from "../../components/Button";
import { FaPlus } from 'react-icons/fa6'

const DataPengguna = () => {
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
            </Card>
        </Fragment>
    )
}

export default DataPengguna;