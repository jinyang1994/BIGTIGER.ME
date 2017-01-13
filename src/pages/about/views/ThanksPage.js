import React from 'react';
import {
    View,
    Image
} from 'react-native';
import styles from '../styles/about';
import { connect } from 'react-redux';
import Header from '../component/header';
import Introduce from '../component/thanks';

class Thanks extends React.Component {
    render () {
        return (
            <View style={styles.about}>
                <Image source={require('./../../../common/images/background-image.png')} style={styles.background_image} />
                <View style={styles.background_color}>
                    <Header title="鸣谢"/>
                    <Introduce />
                </View>
            </View>
        )
    }
}

function select () {
    return {};
}

module.exports = connect(select)(Thanks);
