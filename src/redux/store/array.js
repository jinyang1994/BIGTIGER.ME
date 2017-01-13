/**
 * @flow
 */

'use strict';

module.exports = store => next => action =>
    Array.isArray(action)
        ? action.map(next)
        : next(action);
