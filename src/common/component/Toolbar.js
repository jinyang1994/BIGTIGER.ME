import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Platform,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    PanResponder,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { styles, icon_size, icon_size_big } from '../styles/toolbar';
import Call from '../../support/Call';
import Mail from '../../support/Mail';
import dismissKeyboard from 'dismissKeyboard';
import Alert from './Alert';

const WINDOW_WIDTH = Dimensions.get('window').width;
class Toolbar extends React.Component {
    constructor() {
        super();
        this.state = {
            left: new Animated.Value(0 - WINDOW_WIDTH)
        };
        this.menuHide = this.menuHide.bind(this);
        this.onPressPosts = this.onPressPosts.bind(this);
        this.searchPosts = this.searchPosts.bind(this);
    }

    componentWillMount() {
        this.props.dispatch({type: 'MENU_HIDE'});
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dx <= -5;
            },
            onPanResponderMove: (evt, gestureState) => {
                dismissKeyboard();
                if (gestureState.dx <= 0) {
                    Animated.event(
                        [null, {dx: this.state.left}]
                    )(evt, gestureState)
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (evt.nativeEvent.pageX <= WINDOW_WIDTH / 3 && gestureState.dx <= -50) {
                    this.props.dispatch({type: 'MENU_HIDE'});
                } else {
                    this.props.dispatch({type: 'MENU_SHOW'});
                }
            }
        });
    }

    componentWillReceiveProps(props) {
        if (props.menuShow) {
            Animated.timing(this.state.left,
                {
                    toValue: 0
                }
            ).start();
        } else {
            Animated.timing(
                this.state.left,
                {
                    toValue: 0 - WINDOW_WIDTH
                }
            ).start();
        }
    }

    onPressPosts(categories) {
        dismissKeyboard();
        this.props.dispatch(push({
            pathname: '/content/list',
            query: {
                'categories': categories
            }
        }));
    }

    call() {
        const time = new Date();

        console.log(time.getHours());
        console.log(time.getMinutes());
        if (time.getHours() == 19 && time.getMinutes() < 30) {
            Call.open('18640939113');
        } else {
            Alert.show('每天的晚上7点 - 7点半才可以骚扰我，如果你有特别紧急的事情找我，可以点击旁边的按钮给我发E-mail，或者加我的微信：jinyang1994', [{text: '好'}], '提示');
        }
    }

    menuHide() {
        dismissKeyboard();
        this.props.dispatch({type: 'MENU_HIDE'});
    }

    searchPosts(event) {
        this.props.dispatch(push({
            pathname: '/content/list',
            query: {
                search: event.nativeEvent.text
            }
        }));
    }

    render() {
        return (
            <Animated.View style={[styles.toolbar_view, {left: this.state.left}]} {...this._panResponder.panHandlers}>
                <View style={styles.toolbar}>
                    <View style={styles.search_view}>
                        <View style={styles.search}>
                            <TextInput style={styles.search_content}
                                       placeholder='搜索文章关键字'
                                       placeholderTextColor='#ffffff'
                                       onSubmitEditing={this.searchPosts}
                                       returnKeyType="search"
                                       enablesReturnKeyAutomatically={true}
                            />
                            <Icon name='ios-search-outline' size={22} color={'#ffffff'} style={styles.search_icon}/>
                        </View>
                    </View>
                    <TouchableWithoutFeedback style={{flex: 1}} onPress={() => {dismissKeyboard();}}>
                        <View style={styles.toolbar_title}>
                            <Text style={styles.toolbar_title_english}>BIGTIGER.ME!</Text>
                            <Text style={styles.toolbar_title_chinese}>格调太高的我</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <TouchableHighlight underlayColor="rgba(255, 255, 255, 0.1)"
                                            onPress={() => {this.onPressPosts(6)}}>
                            <View style={styles.menu}>
                                <Text style={styles.menu_text}>生活大爆炸</Text>
                                <Icon name="ios-nuclear-outline" color="#ffffff" size={icon_size}
                                      style={styles.menu_icon}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="rgba(255, 255, 255, 0.1)"
                                            onPress={() => {this.onPressPosts(3)}}>
                            <View style={styles.menu}>
                                <Text style={styles.menu_text}>小前端进化论</Text>
                                <Icon name="ios-construct-outline" color="#ffffff" size={icon_size}
                                      style={styles.menu_icon}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="rgba(255, 255, 255, 0.1)"
                                            onPress={() => {this.onPressPosts(7)}}>
                            <View style={styles.menu}>
                                <Text style={styles.menu_text}>肥咪成长日记</Text>
                                <Icon name="ios-clock-outline" color="#ffffff" size={icon_size}
                                      style={styles.menu_icon}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contact}>
                        <TouchableHighlight style={styles.contact_mail} underlayColor="rgba(255, 255, 255, 0.1)"
                                            onPress={() => Mail.open()}>
                            <Icon name="ios-mail-outline" color="#ffffff" size={icon_size_big}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.contact_phone} underlayColor="rgba(255, 255, 255, 0.1)"
                                            onPress={this.call}>
                            <Icon name="ios-call-outline" color="#ffffff" size={icon_size_big}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight style={styles.menu_hide_button} underlayColor="transparent" onPress={this.menuHide}>
                    <View/>
                </TouchableHighlight>
            </Animated.View>
        )
    }
}

function select(store) {
    return {
        ...store.home
    };
}

module.exports = connect(select)(Toolbar);