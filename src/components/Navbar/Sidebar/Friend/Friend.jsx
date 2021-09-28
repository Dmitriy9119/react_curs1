import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let path = `/friends/${props.id}`
    return (
        <div className={s.friend}>
            <img src={props.avatar} alt=""/>
            <div>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Friend;