/**
 * @flow
 */

'use strict';

const track = require('./track');

module.exports = store => next => action => {
    track(action);
    return next(action);
};
