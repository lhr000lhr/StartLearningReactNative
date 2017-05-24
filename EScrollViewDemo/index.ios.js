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
  ScrollView
} from 'react-native';

var TimerMixmin = require('react-timer-mixin');

export default class EScrollViewDemo extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
 
      >

      {this.renderChildView()}
      </ScrollView>
    );
  }


  renderChildView() {
    // 数组

    var allChild = [];

    var colors = ['red', 'green', 'blue', 'yellow', 'purple'];

    for (var i = 0; i < 5; i++) {
      allChild.push(
        <View key={i} style={{ backgroundColor: colors[i], width:375,height:120 }}>
          <Text>{i}</Text>

        </View>


      );

    }

    return allChild;
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EScrollViewDemo', () => EScrollViewDemo);
