/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入外部js文件

// import LoginView from './loginView.js'
var LoginView = require('./loginView.js');


export default class CQQLoginDemo extends Component {
  render() {
    return (
      <LoginView />
    );
  }
}
 
AppRegistry.registerComponent('CQQLoginDemo', () => CQQLoginDemo);
