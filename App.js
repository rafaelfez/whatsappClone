import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers/'; //index importa automaticamente

class App extends Component {
  
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBqc4iWo6fsA0gL7tHqkbuzyZPM8ngi-c8",
      authDomain: "whatsapp-clone-114f0.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-114f0.firebaseio.com",
      projectId: "whatsapp-clone-114f0",
      storageBucket: "",
      messagingSenderId: "418303507575"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;