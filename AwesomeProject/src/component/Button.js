/**
 * lhr 2017年03月14日16:52:06
 *
 * @flow
 */

import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,

    // TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      status: 1,
    };
  }

  customPressHandler = () => {
        // alert('status ' + this.state.status)
    const { dianjishijian } = this.props;

    dianjishijian();
  };

  render() {
        // 解构
    const { text, beijingyanse, dianjishijian } = this.props;
    return (
      <View style={styles.container}>


        <TouchableHighlight
          style={[styles.button, { backgroundColor: beijingyanse }]}
          onPress={this.customPressHandler}
        >
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
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

