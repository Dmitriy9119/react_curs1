import React from 'react';
import s from '../../Dialogs.module.css'
import {addMessageActionCreater, changeMessageTextActionCreater} from "../../../../redux/dialogs-reducer";

const TextArea = (props) => {
    let addMessage = () => {
        props.dispatch (addMessageActionCreater())
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch (changeMessageTextActionCreater(text))
    }


return (
    <div>
        <div>
            <textarea placeholder={'Start typing...'}
                onChange={onMessageChange} className={s.textArea}
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