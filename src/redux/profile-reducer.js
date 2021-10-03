const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';


const profileReducer = (state, action) => {
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
    type: CHANGE_TEXT,newText: text})

export default profileReducer;