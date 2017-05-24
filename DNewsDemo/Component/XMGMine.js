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

//引入外部组件
var Mine = React.createClass({
  render() {
    return (
      <View >
        <Text>
             我的
        </Text>
      </View>    
    );
  }
});  

const styles = StyleSheet.create({
   
});

 //输出类

 module.exports = Mine;