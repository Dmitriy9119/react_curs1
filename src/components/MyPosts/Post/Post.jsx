import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                <span>Like</span> {props.likeCount}

            </div>
        </div>
    );
};
export default Post;
