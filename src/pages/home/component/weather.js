import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, icon_size } from '../styles/weather';
import { connect } from 'react-redux';
import { getWeather } from '../../../redux/actions/home';
import launchImage from '../../../support/LaunchImage';
import moment from 'moment';

moment.locale('zh-cn');
class Weather extends React.Component {

    componentWillMount() {
        this.props.dispatch(getWeather())
            .then(res => launchImage.hide())
            .catch(err => {
                this.props.dispatch({type: 'UPDATE_WEATHER_ERROR'});
                launchImage.hide();
            });
    }
    
    weatherIcon(code) {
        if (code == 100) {
            return (<Icon name='ios-sunny-outline' size={icon_size} color='#ffffff'/>)
        } else if (code > 100 && code < 200) {
            return (<Icon name='ios-partly-sunny-outline' size={icon_size} color='#ffffff'/>)
        } else if (code >= 200 && code < 300) {
            return (<Icon name='ios-sunny-outline' size={icon_size} color='#ffffff'/>)
        } else if (code >= 300 && code < 400) {
            return (<Icon name='ios-rainy-outline' size={icon_size} color='#ffffff'/>)
        } else if (code >= 400 && code < 500) {
            return (<Icon name='ios-snow-outline' size={icon_size} color='#ffffff'/>)
        } else if (code >= 500 && code < 600) {
            return (<Icon name='ios-partly-sunny-outline' size={icon_size} color='#ffffff'/>)
        } else {
            return (<Icon name='ios-sunny-outline' size={icon_size} color='#ffffff'/>)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <View style={styles.weather}>
                <View style={styles.weather_today}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.weather_today_temperature}>{this.props.weather.now.tmp}</Text>
                        <Text style={styles.weather_today_temperature_unit}>℃</Text>
                    </View>
                </View>
                <View style={styles.weather_future}>
                    <View style={styles.weather_future_item}>
                        {this.weatherIcon(this.props.weather.now.cond.code)}
                        <Text style={styles.weather_future_item_text}>今天</Text>
                    </View>
                    {this.props.weather.daily_forecast.map(item => {
                        return (
                            <View style={styles.weather_future_item}>
                                {this.weatherIcon(item.cond.code_d)}
                                <Text style={styles.weather_future_item_text}>
                                    {moment(item.date).format('dddd')}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    };
}

function select(store) {
    return {
        ...store.home
    };
}

module.exports = connect(select)(Weather);
