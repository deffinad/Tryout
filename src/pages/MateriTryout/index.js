import React from "react";
import { useParams } from "react-router-dom";

const MateriTryout = () => {
    const { jenis } = useParams();

    return (
        <h1>Materi Tryout Page {jenis}</h1>
    )
}

export default MateriTryout;