import React from "react";
import {addPostActionCreater, changeTextActionCreater} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps= (dispatch) => {
    return {
        updateNewPost: (text)=>{
            dispatch(changeTextActionCreater(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreater())
        }
    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostsContainer;