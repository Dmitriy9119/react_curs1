let  rerenderEntireTree = () => {}

let state =
    {
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
            newPostText: "Start typing..."
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
            newMessageText: "Start typing..."
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
    }
window.state = state;
export let addPost = (e) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        img: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg',
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let changeText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}



export let addMessage = (e) => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let changeMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);

}

export let subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;