import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostContainer from "../MyPosts/Post/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;