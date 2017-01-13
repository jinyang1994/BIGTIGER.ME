import React from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, icon_size } from '../styles/other';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Other extends React.Component {
    constructor () {
        super();
        this.onPressIntroduce = this.onPressIntroduce.bind(this);
        this.onPressAllPosts = this.onPressAllPosts.bind(this);
    }

    onPressIntroduce () {
        this.props.dispatch(push('/about/introduce'));
    };

    onPressAllPosts () {
        this.props.dispatch(push('/content/list'));
    }

    render () {
        return (
            <View style={styles.other}>
                <TouchableHighlight style={{flex: 1, borderRightWidth: 1, borderColor: '#ffffff'}} underlayColor="transparent" onPress={this.onPressAllPosts}>
                    <View style={styles.other_item}>
                        <Icon name="ios-book-outline" color='#ffffff' size={icon_size}/>
                        <Text style={styles.other_item_text}>全部文章</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{flex: 1}} underlayColor="transparent" onPress={this.onPressIntroduce}>
                    <View style={styles.other_item}>
                        <Icon name="ios-contact-outline" color='#ffffff' size={icon_size}/>
                        <Text style={styles.other_item_text}>关于我</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

function select(store) {
    return {
        ...store.home
    }
}

module.exports = connect(select)(Other);