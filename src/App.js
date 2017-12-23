/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore} from 'redux';
import { Provider} from 'react-redux';

import Main from './components/Main';
import store from './redux/store';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
        <Main />
      </Provider>
    );
  }
}

