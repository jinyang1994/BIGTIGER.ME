import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/welcome';
import { connect } from 'react-redux';
import dismissKeyboard from 'dismissKeyboard';

class Welcome extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => dismissKeyboard()}>
                <View style={styles.welcome}>
                    <Image source={require('../images/logo.png')} style={styles.welcome_logo}/>
                    <Text style={styles.welcome_title}>BIGTIGER.ME!</Text>
                    <Text style={styles.welcome_text}>中文谐音为“格调太高的我”</Text>
                    <Text style={styles.welcome_text}>文章都是关于我的生活、学习和所思所感</Text>
                    <Text style={styles.welcome_text}>欢迎大家来我的博客</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };
}

function select(store) {
    return {
        ...store.home
    };
}

module.exports = connect(select)(Welcome);
