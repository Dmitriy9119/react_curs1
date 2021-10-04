import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import TextArea from "./DialogItem/TextArea/TextArea";

const Dialogs = (props) => {
    let messagesElements = props.messagesElements.map(m => <Message id={m.id} message={m.message}/>)
    let dialogsElements = props.dialogsElements.map(d => <DialogItem img={d.avatar} name={d.name} id={d.id}/>)
    let addMessage = props.addMessage
    let messageChange = props.messageChange

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsElements}>{dialogsElements}</div>
            <div className={s.messagesElements}>{messagesElements}</div>
            <div><TextArea
                addMessage={addMessage}
                messageChange={messageChange}
                newMessageText={props.newMessageText}
            /></div>
        </div>
    )
}
export default Dialogs;

