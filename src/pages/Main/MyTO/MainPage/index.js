import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ItemCardTOSaya from "../../../../components/Item/ItemCardTOSaya";
import { getListMyTransaction } from "../../../../Redux/actions/my-to.actions";
import EmptyData from "../../../../components/EmptyData";

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { menu } = useParams();
    const { pathname } = useLocation();
    const { list } = useSelector(state => state.myTo);

    useEffect(() => {
        if (pathname === `/to-saya/${menu}`) {
            dispatch(getListMyTransaction(menu))
        }
    }, [dispatch, pathname, menu])

    return (
        <section className='flex flex-col gap-8'>
            <h1 className="text-2xl font-bold capitalize">Progress Try Out {menu}</h1>

            {(list !== null && list.length > 0) ? (
                <>
                    <div className="bg-white w-full h-[500px] rounded-3xl shadow-lg flex items-end p-6">
                        <Button onClick={() => navigate(`/to-saya/${menu}/lihat-nilai-keseluruhan`)} title={'Lihat Nilai Keseluruhan'} />
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {
                            list.map(item => (
                                <Fragment key={item.id}>
                                    <ItemCardTOSaya data={item} menu={menu} />
                                </Fragment>
                            ))
                        }
                    </div>
                </>
            ) : <EmptyData />}

        </section>
    )
}

export default MainPage;