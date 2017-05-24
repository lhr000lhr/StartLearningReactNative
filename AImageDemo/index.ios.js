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
  View,
  Image
} from 'react-native';

// 导入json数据

var BadgeData = require('./BadgeData.json');
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


// 定义一些全局变量
var cols = 3;
var boxWidth = 100;
var vMargin = (width - cols * boxWidth) / (cols + 1);
var hMargin = 25;


export default class AImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/*返回6个包*/}


        {this.renderAllBadge()}

      </View>
    );
  }

  //返回所有的包

  renderAllBadge() {
    //定义数组 装所有子组件
    var allBadge = [];

    //遍历json数据
    for (var i = 0; i < BadgeData.data.length; i++) {
      // 取出单独的数据对象
      var badge = BadgeData.data[i];
      // alert(badge);
      // 直接装入数组
      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{ uri: badge.icon }} style={styles.imageStyle} />
          <Text style={styles.mainTitleStyle}>
            {
              badge.title

            }


          </Text>

        </View>
      );


    }

    return allBadge;

  }





}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    // backgroundColor: '#F5FCFF',

    // 去顶主轴的方向


    flexDirection: 'row',

    flexWrap: 'wrap',
  },


  outViewStyle: {
    backgroundColor: 'red',
    // 设置侧轴的对齐方式
    alignItems: 'center',

    width: boxWidth,
    height: boxWidth,
    marginLeft: vMargin,
    marginTop: hMargin
  },

  imageStyle: {
    width: 80,
    height: 80
  },

  mainTitleStyle: {

  }
});

AppRegistry.registerComponent('AImageDemo', () => AImageDemo);
