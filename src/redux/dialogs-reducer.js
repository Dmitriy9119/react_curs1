import profileReducer from "./profile-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}
export let addMessageActionCreater = () => ({type: ADD_MESSAGE})
export let changeMessageTextActionCreater = (text) => ({
    type: CHANGE_MESSAGE_TEXT, newText: text})

export default dialogsReducer;