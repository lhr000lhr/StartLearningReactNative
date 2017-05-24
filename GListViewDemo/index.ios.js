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
  Image,
  ListView,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

//导入json数据 数组
var Wine = require('./Wine.json');

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


var GListViewDemo = React.createClass({

  //设置初始值
  getInitialState() {
    // 1.1 设置datasource 数据源
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

    return {
      dataSource: ds.cloneWithRows(Wine),
    }

  },


  //设置render
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}//数据源
        renderRow={this.renderRow}//不带括号 直接把参数传入


      />


    );
  },

  //返回具体的cell 
  renderRow(rowData, sectionID, rowID, highlightRow) {
    console.log(sectionID, rowData, rowID);


    return (

      <TouchableOpacity activeOpacity={0.5}
        onPress={()=>{AlertIOS.alert('点击了第'+rowID+'行')}}
      >
        <View style={styles.cellViewStyle}>
          {/*左边的图片*/}
          <Image
            source={{ uri: rowData.image }}
            style={styles.leftImageStyle}
          />
          {/*右边的文字*/}
          <View style={styles.rightViewStyle}>

            {/*上边的Text*/}
            <Text style={styles.topTitleStyle}>
              {rowData.name}
            </Text>
            {/*下边的Text*/}
            <Text style={styles.bottomTitleStyle}>
              ¥{rowData.money}
            </Text>
          </View>

        </View>

      </TouchableOpacity>
    );
  }


});

const styles = StyleSheet.create({
  cellViewStyle: {
    padding: 10,
    backgroundColor: 'white',
    //下划线
    borderBottomWidth: 0.5,
    borderBottomColor: '#e8e8e8',

    //确定主轴的方向
    flexDirection: 'row'
  },
  leftImageStyle: {
    width: 60,
    height: 60,
    marginRight: 15
  },

  rightViewStyle: {

    //主轴对齐方式
    justifyContent: 'center',


  },

  topTitleStyle: {
    color: 'red',
    fontSize: 15,
    width: width * 0.7,
    marginBottom: 8
  },
  bottomTitleStyle: {
    color: 'blue',

  }
});

AppRegistry.registerComponent('GListViewDemo', () => GListViewDemo);
