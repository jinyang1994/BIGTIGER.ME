import type { ThunkAction } from './types';
import client from './../../support/Api';

function getList(condition = {}, limit, offset, type):ThunkAction {
    return (dispatch) => {
        const posts = {};

        return client.get('posts', {
            query: {
                ...condition,
                per_page: limit,
                page: Math.floor((offset / limit)) + 1
            }
        }).then(
            results => {
                posts.count = results.headers.map['x-wp-total'];
                posts.items = results.jsonData.map(function (one) {
                    delete one.content;
                    delete one.excerpt;
                    delete one._links;
                    return one;
                });

                return client.get('media', {
                    query: {
                        'include[]': results.jsonData.map(post => post.featured_media),
                        per_page: limit
                    }
                })
            }
        ).then(
            media => {
                const images = media.jsonData.map(function (image) {
                    return {
                        id: image.id,
                        link: image.link,
                        sizes: image.media_details.sizes
                    };
                }).reduce(function (obj, one) {
                    obj[one.id] = one.sizes.medium_large ? one.sizes.medium_large.source_url : one.sizes.medium.source_url;
                    return obj;
                }, {});
                const data = posts.items.map(function (post) {
                    return {
                        ...post,
                        image: post.featured_media ? images[post.featured_media] : ''
                    }
                });

                dispatch({
                    type: type,
                    data: data,
                    count: posts.count,
                    offset: offset + 10
                });
            }
        );
    };
}

module.exports = { getList };
