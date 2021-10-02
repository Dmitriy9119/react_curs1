import React from 'react';
import s from '../../Dialogs.module.css'
import {addMessageActionCreater, changeMessageTextActionCreater} from "../../../../redux/State";

const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch (addMessageActionCreater())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch (changeMessageTextActionCreater(text))
    }


return (
    <div>
        <div>
            <textarea placeholder={'Start typing...'}
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