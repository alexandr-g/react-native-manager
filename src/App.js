import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBbG5yRcyNJrb92VSsKgHbS-9w_7-z1rRw",
      authDomain: "manager-6d931.firebaseapp.com",
      databaseURL: "https://manager-6d931.firebaseio.com",
      storageBucket: "manager-6d931.appspot.com",
      messagingSenderId: "48566289093"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;