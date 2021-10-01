import React from 'react';
import s from '../../Dialogs.module.css'
import {rerenderEntireTree} from "../../../../index";


const TextArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch ({type:'ADD-MESSAGE'})
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch ({type:'CHANGE-MESSAGE-TEXT', newText: text})
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

// <img src="https://img.icons8.com/ios/500/cloud.png"/>