import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar
                store={props.store}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogItem' render={() => <DialogsContainer
                />}
                />
                <Route path='/profile' render={() => <Profile
                />}
                />
                <Route path='/users' render={() => <UsersContainer
                />}
                />

                {/*<Route path='/news' render={News}/>*/}
                {/*<Route path='/music' render={Music}/>*/}
                {/*<Route path='/settings' render={Settings}/>*/}
            </div>
        </div>
    )
}

export default App;

