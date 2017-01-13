import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    home      : require('./home'),
    content   : require('./content'),
    navigation: require('./navigation')
});
