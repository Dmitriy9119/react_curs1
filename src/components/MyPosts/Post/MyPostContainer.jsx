import React from "react";
import {addPostActionCreater, changeTextActionCreater} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../store-context";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreater())
                };
                let onPostChange = (text) => {
                    store.dispatch(changeTextActionCreater(text))
                };
                return (
                    <MyPost
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                        updateNewPost={onPostChange}
                        addPost={addPost}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    );
};
export default MyPostsContainer;