/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';

export type Tab =
    'home'
        | 'content'
        | 'about'
    ;

type State = {
    tab: Tab;
    isGuide:boolean;
};

const initialState:State = { tab: 'home', isGuide: true, url: null };

function navigation(state:State = initialState, action:Action):State {
    if (action.type === 'SWITCH_TAB') {
        return { ...state, tab: action.tab };
    }
    if (action.type === 'GUIDE_COMPLETE') {
        return { ...state, isGuide: false };
    }
    if (action.type === 'SAVE_PUSH') {
        return { ...state, url: action.url };
    }
    if (action.type === 'REMOVE_PUSH') {
        return { ...state, url: null };
    }
    if (action.type === 'LOGGED_OUT') {
        return { ...state, tab: 'home' };
    }
    if (action.type === 'DELETE_ALL') {
        return { ...state, tab: 'home' };
    }
    return state;
}

module.exports = navigation;
