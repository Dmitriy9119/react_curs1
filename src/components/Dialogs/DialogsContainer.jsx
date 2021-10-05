import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import TextArea from "./DialogItem/TextArea/TextArea";
import Dialogs from "./Dialogs";
import {addMessageActionCreater, changeMessageTextActionCreater} from "../../redux/dialogs-reducer";
import StoreContext from "../../store-context";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogsPage = store.getState().dialogsPage
                    let addMessage = () => {
                        store.dispatch(addMessageActionCreater())
                    }
                    let messageChange = (text) => {
                        store.dispatch(changeMessageTextActionCreater(text))
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
            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;

