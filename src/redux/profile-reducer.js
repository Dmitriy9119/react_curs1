const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';

let initialState = {
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
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                img: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg',
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export let addPostActionCreater = () => ({type: ADD_POST})
export let changeTextActionCreater = (text) => ({
    type: CHANGE_TEXT, newText: text
})

export default profileReducer;