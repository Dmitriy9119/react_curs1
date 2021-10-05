import profileReducer from "./profile-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
            id: '1',
            name: 'Dimych'
        },
        {
            avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
            id: '2',
            name: 'Egor'
        },
        {
            avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
            id: '3',
            name: 'Lexa'
        },
        {
            avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
            id: '4',
            name: 'Vetal'
        },
        {
            avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
            id: '5',
            name: 'Lenka'
        }
    ],
    messages: [
        {id: '1', message: 'Hello. Where are you from? 1'},
        {id: '2', message: 'Hello. Where are you from? 2'},
        {id: '3', message: 'Hello. Where are you from? 3'},
        {id: '4', message: 'Hello. Where are you from? 4'},
        {id: '5', message: 'Hello. Where are you from? 5'},

    ],
    newMessageText: ""
}
const dialogsReducer = (state = initialState, action) => {
    debugger;

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage)
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
    type: CHANGE_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;