import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreater, changeMessageTextActionCreater} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater())
        },
        messageChange: (text) => {
            dispatch(changeMessageTextActionCreater(text))
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

