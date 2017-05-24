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

export default class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerViewStyle}>

          <Text>我是下面的View </Text>
          

        </View>
        <View style={styles.innerViewStyle2}>

          <Text>我是下面的View </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
    width: 300,
    height: 100,

    flexDirection:'row'

  },
  innerViewStyle: {
    width: 100,

    backgroundColor: 'green'
  },
  innerViewStyle2: {
    width: 100,

    backgroundColor: 'yellow'
  },
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
