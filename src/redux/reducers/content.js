import type { Action } from '../actions/types';

const initialState = {
    count: 0,
    offset: 0,
    data: []
};

function content(state:State = initialState, action:Action):State {
    if (action.type === 'LOADED_CONTENT_LIST') {
        return {
            ...state,
            data: action.data,
            count: action.count,
            offset: action.offset
        }
    }

    if (action.type === 'LOADED_MORE') {
        return {
            ...state,
            data: [...state.data, ...action.data],
            count: action.count,
            offset: action.offset
        }
    }

    if (action.type === 'DELETE_ALL') {
        return initialState;
    }

    return state;
}

module.exports = content;
