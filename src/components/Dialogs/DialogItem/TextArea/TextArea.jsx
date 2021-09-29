import React from 'react';
import s from '../../Dialogs.module.css'
import {addMessage, changeMessageText} from "../../../../redux/State";


const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.changeMessageText(text)
    }

return (
    <div>
        <div>
            <textarea
                onClick={()=>{props.changeMessageText("")}}
                onChange={onMessageChange} className={s.textArea}
                ref={newMessageElement}
                value={props.newMessageText}>
            </textarea>
        </div>
        <div className={s.buttonBlock}>
            <button className={s.button} onClick={addMessage}><span>Send message</span></button>
        </div>
    </div>
)
}


export default TextArea;

// <img src="https://img.icons8.com/ios/500/cloud.png"/>