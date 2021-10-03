import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post";
import {addPostActionCreater, changeTextActionCreater} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postElements = props.postsData.map(p => <Post img={p.img} message={p.message} likeCount={p.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreater())
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(changeTextActionCreater(text))
    }

    return (
        <div className={s.mypostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        placeholder={'Start typing...'}
                        onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};
export default MyPosts;