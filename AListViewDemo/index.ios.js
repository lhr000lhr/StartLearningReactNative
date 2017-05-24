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
  ListView,
  Image,
  TouchableOpacity, //不透明度触摸
  AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
//导入json数据

var shareData = require('./shareData.json');

//一些常量设置
var cols = 3;

var cellWH = 100;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;


var AListViewDemo = React.createClass({

  //设置默认值，固定值
  getDefaultProps() {

  },


  //设置一些初始值（可以变化）
  getInitialState() {


    //创建数据源
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
    return {
      dataSource: ds.cloneWithRows(shareData.data),


    };
  },


  render() {

    return (

      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.listViewStyle}

      />


    )

  },


  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (

      <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('aa')}}>

        <View style={styles.innerViewStyle}>

          <Image source={{ uri: rowData.icon }} style={styles.iconStyle} />
          <Text>{rowData.title}</Text>
        </View>


      </TouchableOpacity>
    );
  },
});

const styles = StyleSheet.create({
  listViewStyle: {
    //改变主轴的方向
    flexDirection: 'row',
    //要多行显示
    flexWrap: 'wrap'
  },
  iconStyle: {
    width: 80,
    height: 80

  },

  innerViewStyle: {
    width:cellWH,
    height:cellWH,

    marginLeft:vMargin,
    marginTop:hMargin,

    //居中

    alignItems:'center',
  },
});

AppRegistry.registerComponent('AListViewDemo', () => AListViewDemo);
