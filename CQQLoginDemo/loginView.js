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
    TextInput,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/*这是头像*/}
                <Image source={require('./img/005.png')}
                    style={styles.iconStyle}
                />

                {/*输入框 账号和密码*/}
                <TextInput
                    placeholder={'请输入用户名'}
                    style={styles.textInputStyle}
                />

                <TextInput
                    placeholder={'请输入密码'}
                    password={true}
                    style={styles.textInputStyle}
                />

                {/*登录按钮*/}
                <View style={styles.loginBtnStyle}>

                    <Text style={{ color: 'white' }}>登录</Text>

                </View>

                {/*设置*/}
                <View  style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>

                </View>

                {/*其他的登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录</Text>

                    <Image source={require('./img/adw_icon_movie_normal@2x.png')} 
                     style={styles.otherImageStyle}
                    />

                    <Image source={require('./img/HomeIcon1@2x.png')}
                     style={styles.otherImageStyle} 
                     />

                    <Image source={require('./img/HomeIcon2@2x.png')}
                     style={styles.otherImageStyle} 
                     />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',

        // justifyContent: 'center',


        //设置侧轴的对齐方式
        alignItems: 'center',
    },

    iconStyle: {

        marginTop: 50,
        marginBottom: 30,

        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'white'
    },
    textInputStyle: {

        height: 38,
        backgroundColor: 'white',
        marginBottom: 1,

        width:width,
        //内容居中

        textAlign: 'center'
    },

    loginBtnStyle: {

        height: 35,
        width: width * 0.9,
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 20,


        justifyContent: 'center',
        alignItems: 'center',

        borderRadius:8,
    },

    settingStyle:{

        //设置主轴的方向
        flexDirection:'row',
        // backgroundColor: 'red',

        //主轴的对齐方式
        width: width * 0.9,

        justifyContent:'space-between'

    },

    otherLoginStyle:{

        //设置主轴的方向
        flexDirection:'row',
        // backgroundColor:'red',

        //设置侧轴的对齐方式
        alignItems: 'center',

        //绝对定位
        position:'absolute',

        bottom:10,
        left:20


    },
    otherImageStyle:{


        width:60,
        height:60,
        borderRadius:30,
        marginLeft:8

    }
});

module.exports = loginView;