import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBArReducer from "./sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer, //можно просто `dialogsReducer` вместо `dialogsPage: dialogsReducer`
    sideBar: sideBArReducer
});

let Store = createStore(reducers);

export default Store;