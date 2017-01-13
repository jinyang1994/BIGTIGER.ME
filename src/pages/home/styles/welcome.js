import { StyleSheet, Dimensions } from 'react-native';

const i4 = {
    welcome: {
        flex: 1,
        alignItems: 'center'
    },
    welcome_logo: {
        width: 130,
        height: 130,
        marginTop: 20,
        marginBottom: 15
    },
    welcome_title: {
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    welcome_text: {
        color: '#ffffff',
        lineHeight: 20,
        fontSize: 12
    }
};

const i5 = {
    welcome: {
        flex: 1,
        alignItems: 'center'
    },
    welcome_logo: {
        width: 155,
        height: 155,
        marginTop: 31,
        marginBottom: 20
    },
    welcome_title: {
        fontSize: 25,
        color: '#ffffff',
        marginBottom: 13,
        fontWeight: 'bold'
    },
    welcome_text: {
        color: '#ffffff',
        lineHeight: 20,
        fontSize: 14
    }
};

const i6 = {
    welcome: {
        flex: 1,
        alignItems: 'center'
    },
    welcome_logo: {
        width: 170,
        height: 170,
        marginTop: 40,
        marginBottom: 30
    },
    welcome_title: {
        fontSize: 25,
        color: '#ffffff',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    welcome_text: {
        color: '#ffffff',
        lineHeight: 25
    }
};

const i6p = {
    welcome: {
        flex: 1,
        alignItems: 'center'
    },
    welcome_logo: {
        width: 210,
        height: 210,
        marginTop: 40,
        marginBottom: 30
    },
    welcome_title: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    welcome_text: {
        color: '#ffffff',
        lineHeight: 28,
        fontSize: 16
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

module.exports = styles;
