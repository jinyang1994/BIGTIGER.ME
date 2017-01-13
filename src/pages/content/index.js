module.exports = {
    path: 'content',
    childRoutes: [
        {
            path: 'list',
            component: require('./views/ListPage')
        },
        {
            path: 'detail',
            component: require('./views/DetailPage')
        }
    ]
};
