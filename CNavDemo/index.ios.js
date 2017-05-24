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
  TabBarIOS
} from 'react-native';

var CNavDemo = React.createClass({

  //设置初始值
  getInitialState() {

    return {
      //默认被选中的tabBarItem


      selectedTabBarItem: 'second'
    };
  },



  render() {
    return (
      <View style={styles.container}>
        {/*头部*/}

        <View style={styles.headerViewStyle}>
           <Text style={{color:'white'}}>Tab选项卡a切换</Text>
        </View>


        {/*选项卡*/}

        <TabBarIOS
          barTintColor='orange'
          tintColor="purple"
        >
          {/*第一块*/}
          <TabBarIOS.Item
            title="张三"
           // systemIcon="contacts"
            badge="3"
            selected={this.state.selectedTabBarItem === 'home'}
            onPress={() => {
              this.setState({
                selectedTabBarItem: 'home'
              })
            }}

          >

            <View style={[styles.commonViewStyle, { backgroundColor: 'red' }]}>
              <Text style={{color:'white'}}>首页</Text>
            </View>
          </TabBarIOS.Item>

          {/*第二块*/}
          <TabBarIOS.Item
            systemIcon="bookmarks"
            selected={this.state.selectedTabBarItem === 'second'}
            onPress={() => {
              this.setState({
                selectedTabBarItem: 'second'
              })
            }}

          >
            <View style={[styles.commonViewStyle, { backgroundColor: 'green' }]}>
              <Text>首2页</Text>
            </View>

          </TabBarIOS.Item>

          {/*第三块*/}
          <TabBarIOS.Item
            systemIcon="downloads"
            selected={this.state.selectedTabBarItem === 'third'}
            onPress={() => {
              this.setState({
                selectedTabBarItem: 'third'
              })
            }}

          >
            <View style={[styles.commonViewStyle, { backgroundColor: 'blue' }]}>
              <Text>首3页</Text>
            </View>

          </TabBarIOS.Item>

          {/*第四块*/}
          <TabBarIOS.Item
            systemIcon="search"
            selected={this.state.selectedTabBarItem === 'fourth'}
            onPress={() => {
              this.setState({
                selectedTabBarItem: 'fourth'
              })
            }}

          >
            <View style={[styles.commonViewStyle, { backgroundColor: 'purple' }]}>
              <Text>首4页</Text>
            </View>

          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  headerViewStyle:{
    height:64,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  commonViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('CNavDemo', () => CNavDemo);
