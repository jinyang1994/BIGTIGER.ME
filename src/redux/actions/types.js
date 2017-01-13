/**
 * @flow
 */

'use strict';

type ParseObject = Object;

export type Action =
    true
        | { type: 'LOADED_HOME',data:Object}
        | { type: 'LOADED_CONTENT_LIST',data:Object}
        | { type: 'UPDATE_WEATHER',weather:Object}
    ;

export type Dispatch = (action:Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch:Dispatch, getState:GetState) => any;
export type PromiseAction = Promise<Action>;
