import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ItemCardTOSaya from "../../../../components/Item/ItemCardTOSaya";
import { getListMyTransaction, getListMyTryout } from "../../../../Redux/actions/my-to.actions";
import EmptyData from "../../../../components/EmptyData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { menu } = useParams();
    const { pathname } = useLocation();
    const { list, listNilaiKeseluruhan } = useSelector(state => state.myTo);
    const [dataGrafik, setDataGrafik] = useState({
        labels: [],
        datasets: []
    })

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
    };

    useEffect(() => {
        if (listNilaiKeseluruhan !== null && listNilaiKeseluruhan.length > 0) {
            let labels = []
            const data = []
            
            listNilaiKeseluruhan.map(item => {
                labels.push(item.nama)
                data.push(item.rata_nilai)
            })

            setDataGrafik({
                labels: labels,
                datasets: [
                    {
                        label: 'Tryout Saya',
                        data: data,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ]
            })
        }
    }, [listNilaiKeseluruhan])

    useEffect(() => {
        if (pathname === `/to-saya/${menu}`) {
            dispatch(getListMyTransaction(menu))
            dispatch(getListMyTryout(menu))
        }
    }, [dispatch, pathname, menu])

    return (
        <section className='flex flex-col gap-8'>
            <h1 className="text-2xl font-bold capitalize">Progress Try Out {menu}</h1>

            {
                (listNilaiKeseluruhan !== null && listNilaiKeseluruhan.length > 0) ? (
                    <div className="bg-white w-full min-h-[500px] p-6 rounded-3xl shadow-lg flex items-center gap-6 flex-col">
                        <Line options={options} data={{
                            labels: dataGrafik.labels,
                            datasets: dataGrafik.datasets
                        }} />
                        <Button onClick={() => navigate(`/to-saya/${menu}/lihat-nilai-keseluruhan`)} title={'Lihat Nilai Keseluruhan'} />
                    </div>
                ) : null
            }

            {(list !== null && list.length > 0) ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        list.map(item => (
                            <Fragment key={item.id}>
                                <ItemCardTOSaya data={item} menu={menu} />
                            </Fragment>
                        ))
                    }
                </div>
            ) : <EmptyData />}

        </section>
    )
}

export default MainPage;