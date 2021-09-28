import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink, Route} from "react-router-dom";
// import TextArea from "./TextArea/TextArea";
// import Message from "./Message/Message";
// import Dialogs from "../Dialogs";

const DialogItem = (props) => {
    let path = "/dialogItem/" + props.id;

    return (
        <div>
            <div className={s.mainDialog}>
                <div className={`${s.dialog} ${s.active}`}>
                    <img src={props.img}/>
                    <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default DialogItem;