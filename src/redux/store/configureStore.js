/**
 * @flow
 */

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';
import { AsyncStorage } from 'react-native';
import promise from './promise';
import array from './array';
import analytics from './analytics';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

function configureStore(history, onComplete:?() => void) {
    const logger = createLogger({
        predicate: (getState, action) => isDebuggingInChrome,
        collapsed: true,
        duration: true
    });

    const router = routerMiddleware(history);

    const store = applyMiddleware(
        thunk, promise, array, router, analytics, logger
    )(createStore);

    const store = autoRehydrate()(store)(reducers);
    persistStore(store, { storage: AsyncStorage }, onComplete);


    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}

export default configureStore;
