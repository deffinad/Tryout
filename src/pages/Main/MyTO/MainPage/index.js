import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ItemCardTOSaya from "../../../../components/Item/ItemCardTOSaya";
import { getListMyTransaction } from "../../../../Redux/actions/my-to.actions";

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
            <h1 className="text-2xl font-bold">Progress Try Out UTBK - SNBT</h1>

            <div className="bg-white w-full h-[500px] rounded-3xl shadow-lg flex items-end p-6">
                <Button onClick={() => navigate(`/to-saya/${menu}/lihat-nilai-keseluruhan`)} title={'Lihat Nilai Keseluruhan'} />
            </div>

            <div className="grid grid-cols-3 gap-6">
                {(list !== null && list.length > 0) ? (
                    list.result.map(item => (
                        <ItemCardTOSaya data={item} menu={menu}/>
                    ))
                ) : null}
            </div>

        </section>
    )
}

export default MainPage;