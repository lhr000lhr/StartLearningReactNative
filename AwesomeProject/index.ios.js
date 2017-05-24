/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import Button from './src/component/Button';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      status: 1,
    };
  }


  render() {
    return (
      <View style={styles.container}>


        {/* props 属性*/}
        <Button text="确定" beijingyanse="red" date="2017年03月14日17:03:40" />
        <Button text="取消" beijingyanse="gray" date="2017年03月14日17:03:40" dianjishijian={() => { alert('你点击了取消'); }} />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
