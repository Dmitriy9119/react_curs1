let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            postsData: [
                {
                    id: '1',
                    message: 'Hi! How are you',
                    img: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg',
                    likesCount: 15
                },
                {
                    id: '2',
                    message: 'It\'s my first post',
                    img: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg',
                    likesCount: 18
                },
            ],
            newPostText: ""
        },

        dialogsPage: {
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
        },

        sideBar: {
            friend: [
                {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '11',
                    name: 'Andrey'
                },
                {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '12',
                    name: 'Sasha'
                },
                {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '14',
                    name: 'Sveta'
                }, {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '15',
                    name: 'Vetal'
                }, {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '16',
                    name: 'Egor'
                }, {
                    avatar: 'https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
                    id: '17',
                    name: 'Loshara'
                },
            ]

        },
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                img: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg',
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
}
}

window.store = store;
window.state = store.getState();

export default store;
