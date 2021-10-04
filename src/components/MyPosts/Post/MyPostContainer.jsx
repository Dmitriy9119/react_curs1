import React from "react";
import {addPostActionCreater, changeTextActionCreater} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreater())
    }
    let onPostChange = (text) => {
        props.store.dispatch(changeTextActionCreater(text))
    }

    return (
        <MyPost
            updateNewPost={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}/>
    );
};
export default MyPostsContainer;