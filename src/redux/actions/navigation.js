import type { Action, ThunkAction } from './types';

type Tab = 'home' | 'about' | 'about';
function savePush(url):ThunkAction {
    return (dispatch) => {
        dispatch({
            type: 'SAVE_PUSH',
            url: url,
        })
    }
}
function removePush():ThunkAction {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_PUSH'
        })
    }
}
module.exports = {
    savePush,
    removePush
};
