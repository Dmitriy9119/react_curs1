import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "../MyPosts/Post/MyPost";
import store from "../../redux/State";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newPostText={props.state.newPostText}
                postsData={props.state.postsData}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;