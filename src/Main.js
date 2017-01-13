import React, { Component } from 'react';
import {
    Platform,
    BackAndroid,
    Navigator,
    StyleSheet,
    NativeAppEventEmitter
} from 'react-native';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { visitRoute, savePush } from './redux/actions';
import HomePage from './pages/home';
import AliyunPush from './support/AliyunPush';

class Main extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    static childContextTypes = {
        addBackButtonListener: React.PropTypes.func,
        removeBackButtonListener: React.PropTypes.func
    };

    constructor() {
        super();
        this.isSynchronizingRoute = false;
        this._handlers = ([]: Array<() => boolean>);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
        this.handleNavigatorDidFocus = this.handleNavigatorDidFocus.bind(this);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
        this.context.router.listen(this.handleRouteChange);
    }
    componentWillMount() {
        this.subscription = NativeAppEventEmitter.addListener(
            'AliyunPushMessage',
            (result) => {
                this.props.dispatch(push({
                    pathname: '/content/detail',
                    query: {
                        url: result.message.url,
                        title: result.message.title,
                        description: result.message.description
                    }
                }));
            }
        );

        AliyunPush.push();
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
        this.props.dispatch(visitRoute());
    }

    shouldComponentUpdate() {
        return false;
    }

    getChildContext() {
        return {
            addBackButtonListener: this.addBackButtonListener.bind(this),
            removeBackButtonListener: this.removeBackButtonListener.bind(this),
        };
    }

    addBackButtonListener(listener) {
        this._handlers.push(listener);
    }

    removeBackButtonListener(listener) {
        this._handlers = this._handlers.filter((handler) => handler !== listener);
    }

    handleBackButton() {
        for (let i = this._handlers.length - 1; i >= 0; i--) {
            if (this._handlers[i]()) {
                return true;
            }
        }

        const { navigator } = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            this.props.dispatch(goBack());
            return true;
        }

        return false;
    }

    handleRouteChange(location) {
        setTimeout(() => {
            if (this.isSynchronizingRoute) return;
            const route = {
                location,
                query: location.query,
                component: this.props.children
            };
            if (location.action === 'PUSH') {
                this.refs.navigator.push(route);
            } else if (location.action === 'POP') {
                const routes = this.refs.navigator.getCurrentRoutes().filter(
                    route => (location.pathname === '/' && route.root) || (route.location && route.location.key === location.key)
                );
                this.refs.navigator.popToRoute(routes[0]);
            } else if (location.action === 'REPLACE') {
                this.refs.navigator.replace(route);
            }
        }, 0);
    }

    handleNavigatorDidFocus(route) {
        // 解决iOS上侧滑导致栈不同步的问题。
        const current = this.props.location;
        if ((route.root && current.pathname === '/')
            || (route.location && route.location.key === current.key)) return;
        this.isSynchronizingRoute = true;
        this.context.router.goBack();
        this.isSynchronizingRoute = false;
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                style={styles.container}
                initialRoute={{ root: true }}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                onDidFocus={this.handleNavigatorDidFocus}
            />
        );
    }

    configureScene(route) {
        if (route.query) {
            if (route.query.anim === 'floatFromBottom') {
                return Platform.OS === 'android' ?
                    Navigator.SceneConfigs.FloatFromBottomAndroid : Navigator.SceneConfigs.FloatFromBottom;
            }

            if (Platform.OS === 'ios' && route.query.anim === 'floatFromLeft') {
                return Navigator.SceneConfigs.FloatFromLeft;
            }

            if (Platform.OS === 'ios' && route.query.anim === 'floatFromRight') {
                return Navigator.SceneConfigs.FloatFromRight;
            }

            if (Platform.OS === 'ios' && route.query.anim === 'pushFromRight') {
                return Navigator.SceneConfigs.PushFromRight;
            }
        }

        return Platform.OS === 'android' ?
            Navigator.SceneConfigs.FloatFromBottomAndroid : Navigator.SceneConfigs.FloatFromRight;
    }

    renderScene(route) {
        if (route.component) {
            return React.cloneElement(route.component, {
                location: route.location,
                query: route.query
            });
        }
        return <HomePage/>;
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

function select(store) {
    return {
        tab: store.navigation.tab,
        isGuide: store.navigation.isGuide
    };
}

module.exports = connect(select)(Main);
