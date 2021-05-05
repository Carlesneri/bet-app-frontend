import React from 'react';
import ReactDOM from 'react-dom';
import "firebase/database";
import "firebase/auth";
import firebase from "firebase/app";

import { DB_CONFIG } from "./config/config"
import './index.css';
import App from './components/App/App'


export const app = firebase.initializeApp(DB_CONFIG);

firebase.auth().signInAnonymously().catch(err => console.log(err))

export const db = app.database().ref()

//import * as serviceWorker from './serviceWorker';  

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
