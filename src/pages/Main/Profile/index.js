import React from "react";
import ProfileSaya from "./ProfileSaya";
import EditProfile from "./EditProfile";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";

const ProfilePage = () => {

    const { page, id } = useParams();

    return (
        <Layout>
            {!page && !id &&
                <ProfileSaya />
            }
            {id &&
                <EditProfile />
            }
        </Layout>
    )
}

export default ProfilePage;