import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginComponent from './login/login';
import DashboardComponent from './dashboard/dashboard';
import SignupComponent from './signup/signup';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp( {
    apiKey: "AIzaSyDimAOHFhL9VHPvB1KXqk4FW3ibrI6M8qw",
    authDomain: "im-tutorial-cb4e3.firebaseapp.com",
    databaseURL: "https://im-tutorial-cb4e3.firebaseio.com",
    projectId: "im-tutorial-cb4e3",
    storageBucket: "im-tutorial-cb4e3.appspot.com",
    messagingSenderId: "376071086432",
    appId: "1:376071086432:web:7bc9b386544875b3"
} );

const routing = (
    <Router>
        <div id='routing container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
