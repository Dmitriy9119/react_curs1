import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post";

const MyPosts = (props) => {
    let postElements = props.postsData.map(p => <Post img={p.img} key={p.id} message={p.message} likeCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPost(text)

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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};
export default MyPosts;