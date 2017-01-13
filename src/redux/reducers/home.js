import type { Action } from '../actions/types';

const initialState = {
    menuShow: false,
    weather: {
        now: {
            tmp: '20',
            cond: {
                code: 100
            }
        },
        daily_forecast: [{
            data: 'now',
            cond: {
                code_d: 100
            }
        },{
            data: 'now',
            cond: {
                code_d: 100
            }
        },{
            data: 'now',
            cond: {
                code_d: 100
            }
        },{
            data: 'now',
            cond: {
                code_d: 100
            }
        }]
    }
};

function home(state:State = initialState, action:Action):State {
    if (action.type === 'MENU_SHOW') {
        return {
            ...state,
            menuShow: Math.random()
        }
    }
    if (action.type === 'MENU_HIDE') {
        return {
            ...state,
            menuShow: false
        };
    }

    if (action.type === 'UPDATE_WEATHER') {
        return {
            ...state,
            weather: action.weather
        }
    }

    if (action.type === 'UPDATE_WEATHER_ERROR') {
        return {
            ...initialState
        }
    }

    return state;
}

module.exports = home;
