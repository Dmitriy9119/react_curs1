import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";


const Sidebar = (props) => {
    debugger
     let showFriends = props.sideBar.friend.map(f => <Friend avatar={f.avatar} name={f.name} id={f.id}/>)

    return (
        <div className={s.sidebar}>
            <h2>MY FRIENDS</h2>
            <div className={s.myFriends}>{showFriends}</div>
        </div>
    )
}

export default Sidebar;