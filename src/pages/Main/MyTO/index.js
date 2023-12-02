import React from "react";
import { useParams } from "react-router-dom";
// import component
import MainPage from "./MainPage";
import Layout from "../../../components/Layout";
import LihatNilaiKeseluruhan from "./LihatNilaiKeseluruhan";
import DetailPage from "./DetailPage";

const MyTryOut = () => {

    const { page, id } = useParams();

    return (
        <>
            {!id &&
                <>
                    <Layout>
                        <h1 className="text-2xl text-gray-700 font-semibold mb-8">MyTO Page</h1>
                        {!page &&
                            <MainPage />
                        }
                        {page === 'lihat-nilai-keseluruhan' &&
                            <LihatNilaiKeseluruhan />
                        }
                    </Layout>
                </>
            }
            {id && <DetailPage />}
        </>
    )
}

export default MyTryOut;