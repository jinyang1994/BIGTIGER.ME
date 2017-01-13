const homeActions = require('./home');
const contentActions = require('./content');
const navigationActions = require('./navigation');

module.exports = {
    ...homeActions,
    ...contentActions,
    ...navigationActions
};
