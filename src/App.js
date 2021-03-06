import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;