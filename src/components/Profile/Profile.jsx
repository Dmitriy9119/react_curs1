import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "../MyPosts/Post/MyPost";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.state.postsData}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                changeText={props.changeText}
            />
        </div>
    )
}
export default Profile;