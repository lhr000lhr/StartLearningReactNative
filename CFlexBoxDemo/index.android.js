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

export default class CFlexBoxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

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


//  第四个个示例程序

//  引入

var Dimensions = require('Dimensions');

class CFlexBoxDemo3 extends Component {
  render() {
    return (
      <View  style={styles3.outViewStyle} >
        
        <Text> 当前屏幕宽度：{ Dimensions.get('window').width}</Text>
        <Text> 当前屏幕高度：{ Dimensions.get('window').height}</Text>
        <Text> 当前屏幕分辨率：{ Dimensions.get('window').scale}</Text>

      </View>
    );
  }
}



const styles3 = StyleSheet.create({

  container: {

    backgroundColor: 'purple',
    // 上边距

    marginTop: 25,
    //改变主轴的方向

    flexDirection: 'row',
    //设置主轴对齐方式
    justifyContent: 'flex-start',

    //设置侧轴对齐方式
    alignItems: 'center',


  },


  outViewStyle:{
    //占满屏幕
    flex:1,

    // 主轴方向居中
    justifyContent:'center',
    
    // 侧轴方向居中
    alignItems:'center',


    //背景
    backgroundColor:'red'
  }

});

AppRegistry.registerComponent('CFlexBoxDemo', () => CFlexBoxDemo3);


 