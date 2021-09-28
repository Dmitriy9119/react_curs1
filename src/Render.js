import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {addPost, changeText} from "./redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render
    (<BrowserRouter>
        <App state={state}
             addPost={addPost}
             changeText={changeText}/>
    </BrowserRouter>, document.getElementById('root'));
}