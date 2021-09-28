import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post";



const MyPosts = (props) => {
    let postElements = props.postsData.map(p => <Post img={p.img} message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        props.changeText("")
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changeText(text)
    }

    return (
        <div className={s.mypostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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