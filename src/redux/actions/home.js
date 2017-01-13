import type { ThunkAction } from './types';
import FetchHttpClient, { json, query } from 'fetch-http-client';
const Location = new FetchHttpClient('http://api.map.baidu.com/');
const Weather = new FetchHttpClient('https://api.heweather.com/x3/');

Location.addMiddleware(json());
Location.addMiddleware(query());

Weather.addMiddleware(json());
Weather.addMiddleware(query());

function getWeather():ThunkAction {

    return (dispatch) => {
        return Promise.all(
            [
                Location.get('location/ip?ak=X8N6vPlskcTpSQziNa0SatV9QFg4Y4Um'),
                Weather.get('citylist', {
                    query: {
                        search: 'allchina',
                        key: 'a52b4db8c76047d98bbbc4fb1adf563f'
                    }
                })
            ]
        ).then(
            (res) => {
                const location = res[0].jsonData.address.split('|')[2];
                const locationList = res[1].jsonData.city_info;
                const result = locationList.filter(item => {
                    return location == item.city;
                })[0];

                return Weather.get('weather', {
                    query: {
                        cityid: result.id,
                        key: 'a52b4db8c76047d98bbbc4fb1adf563f'
                    }
                })
            }).then(
            (res) => {
                const weather = res.jsonData['HeWeather data service 3.0'][0];

                dispatch({
                    type: 'UPDATE_WEATHER',
                    weather: {
                        now: {
                            cond: weather.now.cond,
                            tmp: weather.now.tmp
                        },
                        daily_forecast: weather.daily_forecast.map(item => {
                            return {
                                cond: item.cond,
                                date: item.date
                            }
                        }).slice(1, 5)
                    }
                });
            }
        )
    };
}

module.exports = { getWeather };
