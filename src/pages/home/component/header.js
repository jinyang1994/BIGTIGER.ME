import React  from 'react';
import {
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/header';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

import dismissKeyboard from 'dismissKeyboard';

class Header extends React.Component {
    constructor () {
        super();
        this.menu = this.menu.bind(this);
        this.onPressThanks = this.onPressThanks.bind(this);
        this.searchPosts = this.searchPosts.bind(this);
    }

    menu () {
        dismissKeyboard();
        this.props.dispatch({type: 'MENU_SHOW'});
    }

    onPressThanks () {
        dismissKeyboard();
        this.props.dispatch(push('/about/thanks'));
    };

    searchPosts (event) {
        this.props.dispatch(push({
            pathname: '/content/list',
            query: {
                search: event.nativeEvent.text
            }
        }));
    }

    render () {
        return (
            <View style={styles.header}>
                <View style={styles.tab}>
                    <TouchableHighlight style={styles.tab_left} underlayColor="transparent" onPress={this.menu}>
                        <Icon name='ios-menu-outline' size={35} color={'#ffffff'} />
                    </TouchableHighlight>
                    <View style={styles.tab_content}>
                        <View style={styles.search}>
                            <TextInput style={styles.search_content}
                                       placeholder='搜索文章关键字'
                                       placeholderTextColor='#ffffff'
                                       onSubmitEditing={this.searchPosts}
                                       returnKeyType="search"
                                       enablesReturnKeyAutomatically={true}
                            />
                            <Icon name='ios-search-outline' size={22} color={'#ffffff'} />
                        </View>
                    </View>
                    <TouchableHighlight style={styles.tab_right} underlayColor="transparent" onPress={this.onPressThanks}>
                        <Icon name='ios-people-outline' size={35} color={'#ffffff'} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

function select (store) {
    return {
        ...store.home
    }
}

module.exports = connect(select)(Header);
