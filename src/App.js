import React from 'react';
import {
    AppState,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import CodePush from "react-native-code-push";
import { visitRoute } from './redux/actions';
import Main from './Main';
import * as WeChat from 'react-native-wechat';

const rootRoute = {
    path: '/',
    component: Main,
    childRoutes: require('./pages')
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            modalVisible: true
        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    componentWillMount() {
        WeChat.registerApp('wxb729de774b9c4c6c');
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        if (__DEV__) return this.setState({ isLoading: false });
        CodePush.getCurrentPackage()
            .then((update) => {
                this.setState({ isLoading: false });
            }).catch((err)=> this.setState({ isLoading: false }));
        CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_RESUME });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if (appState === "active" && !__DEV__) {
            CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_RESUME });
        }
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Router history={this.props.history} routes={rootRoute}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function select() {
    return {};
}

export default connect(select)(App);
