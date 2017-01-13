import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'react-router';
import configureStore from './redux/store/configureStore';
import App from './App';
import 'moment/locale/zh-cn';

function setup():Component {
    const history = createMemoryHistory('/');

    class Root extends Component {
        constructor() {
            super();
            this.state = {
                isLoading: true,
                store: configureStore(history, () => this.setState({ isLoading: false })),
            };
        }

        render() {
            if (this.state.isLoading) {
                return null;
            }
            return (
                <Provider store={this.state.store}>
                    <App history={history} />
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
