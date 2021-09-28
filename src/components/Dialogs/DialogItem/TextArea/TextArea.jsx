import React from 'react';
import s from '../../Dialogs.module.css'


const TextArea = (props) => {
    let addNewMessage = React.createRef();
    let addMessage = () => {
        let message = addNewMessage.current.value
        alert(message)
    }

    return (
        <div>
            <div >
                <textarea className={s.textArea} ref={addNewMessage}>Start typing...</textarea>
            </div>
            <div className={s.buttonBlock}>
                <button className={s.button} onClick={addMessage}><span>Send message</span></button>
            </div>
        </div>
    )
}


export default TextArea;

// <img src="https://img.icons8.com/ios/500/cloud.png"/>