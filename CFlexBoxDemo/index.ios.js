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

//  第一个示例程序

export default class CFlexBoxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ backgroundColor: 'red', height: 30 }}>
          111
        </Text>
        <Text style={{ backgroundColor: 'green', height: 40 }}>
          222
        </Text>
        <Text style={{ backgroundColor: 'blue', height: 50 }}>
          333
        </Text>
        <Text style={{ backgroundColor: 'yellow', height: 60 }}>
          444
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'purple',
    // 上边距

    marginTop: 25,
    //改变主轴的方向

    flexDirection: 'row',
    //设置主轴对齐方式
    justifyContent: 'space-around',

    //设置侧轴对齐方式
    alignItems: 'center'
  },

});


//  第二个示例程序

class CFlexBoxDemo1 extends Component {
  render() {
    return (
      <View style={sytles1.container}>
        <Text style={{ backgroundColor: 'red', width: 80 }}>
          111
        </Text>
        <Text style={{ backgroundColor: 'green', width: 90 }}>
          222
        </Text>
        <Text style={{ backgroundColor: 'blue', width: 100 }}>
          333
        </Text>
        <Text style={{ backgroundColor: 'yellow', width: 110 }}>
          444
        </Text>

      </View>
    );
  }
}


const sytles1 = StyleSheet.create({

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

    //显示不下，换一行
    flexWrap: 'wrap'
  },


});


//  第三个示例程序

class CFlexBoxDemo2 extends Component {
  render() {
    return (
      <View style={sytles2.container}>
        <Text style={{ backgroundColor: 'red', flex: 1 , height:60 , alignSelf:'flex-start'}}>
          111
        </Text>
        <Text style={{ backgroundColor: 'green', flex: 2, height:70 }}>
          222
        </Text>
        <Text style={{ backgroundColor: 'blue', flex: 2 , height:80}}>
          333
        </Text>
        <Text style={{ backgroundColor: 'yellow', flex: 1, height:90 }}>
          444
        </Text>

      </View>
    );
  }
}



const sytles2 = StyleSheet.create({

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
