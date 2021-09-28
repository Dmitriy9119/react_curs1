import React from 'react';
import s from '../../Dialogs.module.css'
import TextArea from "../TextArea/TextArea";


const Message = (props) => {

    return (
        <div className={s.message}>
            <div className={s.myMessage}>
                <img src="https://img.icons8.com/ios/500/cloud.png"/>
                <span>{props.message}</span>
            </div>
            <div className={`${s.userMessage} ${s.myMessage}`}>
                <img src="https://img.icons8.com/ios/500/cloud.png"/>
                <span>{props.message}</span>
            </div>
        </div>
    )
}


export default Message;

