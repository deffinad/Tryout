import React from "react";
import InlineIconInput from "../../../../components/InlineIconInput";

const EditProfile = () => {
    return (
        <div className="flex flex-col mt-10">
            {/* profile photo */}
            <div className="flex flex-row justify-start gap-8 mb-10">
                <img className="mb-3 rounded-full shadow-lg" src="/assets/img/avatar.png" alt="" />
                <div className="flex flex-col justify-center items-centers gap-2">
                    <h1 className="text-3xl font-semibold uppercase">Username</h1>
                    <h2 className="text-2xl font-medium uppercase">Asal Sekolah</h2>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold">Data Pribadi</h1>
                <div className="bg-white shadow-md rounded-3xl p-5 mb-5">
                    <div className="grid grid-cols-3 grid-rows-3 gap-6">
                        <InlineIconInput placeholder="Nama Lengkap" />
                        <InlineIconInput placeholder="Jenis Kelamin" />
                        <InlineIconInput placeholder="Tanggal Lahir" />
                        <InlineIconInput placeholder="Asal Sekolah" />
                        <InlineIconInput placeholder="Asal Sekolah" />
                        <InlineIconInput placeholder="Provinsi" />
                        <InlineIconInput placeholder="No Hp/ Whatsapp" />
                        <InlineIconInput placeholder="Email" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;