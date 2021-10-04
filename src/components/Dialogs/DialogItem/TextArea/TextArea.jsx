import React from 'react';
import s from '../../Dialogs.module.css'
import {addMessage} from './../../DialogsContainer'

const TextArea = (props) => {

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.messageChange(text)
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
            <button className={s.button} onClick={onAddMessage}><span>Send message</span></button>
        </div>
    </div>
)
}
export default TextArea;