import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import StoreContext, {Provider} from "./store-context";


let rerenderEntireTree = (state) => {
    ReactDOM.render
    (<BrowserRouter>
        <Provider store={store}>
            <App
                store={store} //для сайдбара
            />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
