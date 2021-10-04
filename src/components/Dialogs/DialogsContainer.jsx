import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import TextArea from "./DialogItem/TextArea/TextArea";
import Dialogs from "./Dialogs";
import {addMessageActionCreater, changeMessageTextActionCreater} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater())
    }
    let messageChange = (text) => {
        props.store.dispatch(changeMessageTextActionCreater(text))
    }
        return (
        <Dialogs
            addMessage={addMessage}
            messageChange={messageChange}
            newMessageText={dialogsPage.newMessageText}
            dialogsPage={dialogsPage}
        />
    )
}

export default DialogsContainer;

