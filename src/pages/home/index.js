import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import Toolbar from '../../common/component/Toolbar';
import Other from './component/other';
import Weather from './component/weather';
import Welcome from './component/welcome';
import Header from './component/header';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/home';
import { connect } from 'react-redux';


class HomePage extends React.Component {

    render () {
        return (
            <View style={styles.home}>
                <Image source={require('./../../common/images/background-image.png')} style={styles.background_image} />
                <View style={styles.background_color}>
                    <Toolbar />
                    <Header/>
                    <View style={styles.home_content}>
                        <Welcome/>
                        <Weather/>
                        <Other/>
                    </View>
                </View>
            </View>
        )
    };
}

function select(store) {
    return {
        ...store.home
    };
}

module.exports = connect(select)(HomePage);
