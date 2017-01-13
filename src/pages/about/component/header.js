import React from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import styles from '../styles/header';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends React.Component {
    constructor () {
        super();
        this.back = this.back.bind(this);
    }

    back () {
        this.props.dispatch(goBack());
    }

    render () {
        return (
            <View style={styles.header}>
                <TouchableHighlight style={styles.back} underlayColor="transparent" onPress={this.back}>
                    <Icon name='ios-arrow-back-outline' size={30} color={'#ffffff'} />
                </TouchableHighlight>
                <View style={styles.title}>
                    <Text style={styles.title_text}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

function select() {
    return {};
}

module.exports = connect(select)(Header);