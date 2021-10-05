import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import TextArea from "./DialogItem/TextArea/TextArea";

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem img={d.avatar} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsElements}>{dialogsElements}</div>
            <div className={s.messagesElements}>{messagesElements}</div>
            <div><TextArea
                addMessage={props.addMessage}
                messageChange={props.messageChange}
                newMessageText={props.dialogsPage.newMessageText}
            /></div>
        </div>
    )
}
export default Dialogs;

