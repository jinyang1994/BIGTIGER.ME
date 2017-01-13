import React from 'react';
import { AlertIOS, Alert, Platform } from 'react-native';
const myAlert = {
    show(message, buttons:Array, title:string = '提示'){
        if (Platform.OS == 'ios') {
            AlertIOS.alert(title, message, buttons);
        } else {
            Alert.alert(title, message, buttons);
        }
    }
};

module.exports = myAlert;