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
var Find = React.createClass({
  render() {
    return (
      <View >
        <Text>
                发现
        </Text>
      </View>    
    );
  }
});  

const styles = StyleSheet.create({
   
});

 //输出类

 module.exports = Find;