module.exports = {
    path: 'about',
    childRoutes: [
        {
            path: 'introduce',
            component: require('./views/IntroducePage')
        },
        {
            path: 'thanks',
            component: require('./views/ThanksPage')
        }
    ]
};
