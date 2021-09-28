import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {addMessage, addPost, changeMessageText, changeText} from "./redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render
    (<BrowserRouter>
        <App state={state}
             addPost={addPost}
             changeText={changeText}
             addMessage={addMessage}
             changeMessageText={changeMessageText}
        />

    </BrowserRouter>, document.getElementById('root'));
}