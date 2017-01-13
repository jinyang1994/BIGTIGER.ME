import { StyleSheet, Dimensions } from 'react-native';

const i4 = {
    weather: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    weather_today: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather_today_temperature: {
        fontSize: 35,
        color: '#ffffff'
    },
    weather_today_temperature_unit: {
        fontSize: 20,
        color: '#ffffff'
    },
    weather_future: {
        flex: 5,
        flexDirection: 'row'
    },
    weather_future_item: {
        flex: 1,
        alignItems: 'center'
    },
    weather_future_item_text: {
        color: '#ffffff',
        fontSize: 10
    }
};

const i5 = {
    weather: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    weather_today: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather_today_temperature: {
        fontSize: 42,
        color: '#ffffff'
    },
    weather_today_temperature_unit: {
        fontSize: 22,
        color: '#ffffff'
    },
    weather_future: {
        flex: 5,
        flexDirection: 'row'
    },
    weather_future_item: {
        flex: 1,
        alignItems: 'center'
    },
    weather_future_item_text: {
        color: '#ffffff',
        fontSize: 12
    }
};

const i6 = {
    weather: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 8
    },
    weather_today: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather_today_temperature: {
        fontSize: 40,
        color: '#ffffff'
    },
    weather_today_temperature_unit: {
        fontSize: 25,
        color: '#ffffff'
    },
    weather_future: {
        flex: 5,
        flexDirection: 'row'
    },
    weather_future_item: {
        flex: 1,
        alignItems: 'center'
    },
    weather_future_item_text: {
        color: '#ffffff',
        fontSize: 12
    }
};

const i6p = {
    weather: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 8
    },
    weather_today: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather_today_temperature: {
        fontSize: 45,
        color: '#ffffff'
    },
    weather_today_temperature_unit: {
        fontSize: 25,
        color: '#ffffff'
    },
    weather_future: {
        flex: 5,
        flexDirection: 'row'
    },
    weather_future_item: {
        flex: 1,
        alignItems: 'center'
    },
    weather_future_item_text: {
        color: '#ffffff',
        fontSize: 14
    }
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create(
    WIDTH == 320 && HEIGHT == 568 ? i5 :
    WIDTH == 375 && HEIGHT == 667 ? i6 :
    WIDTH == 414 && HEIGHT == 736 ? i6p:
    i4
);

const icon_size =
    WIDTH == 320 && HEIGHT == 568 ? 30 :
    WIDTH == 375 && HEIGHT == 667 ? 30 :
    WIDTH == 414 && HEIGHT == 736 ? 35 :
    25;


module.exports = { styles, icon_size };
