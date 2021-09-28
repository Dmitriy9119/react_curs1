import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import TextArea from "./DialogItem/TextArea/TextArea";

let someLink = React.c

const Dialogs = (props) => {

// props.state.dialogs, props.state.messages]

    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem img={d.avatar} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsElements}>{dialogsElements}</div>
            <div className={s.messagesElements}>{messagesElements}</div>
            <div><TextArea/></div>
        </div>

    )
}
export default Dialogs;
