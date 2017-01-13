import { StyleSheet, Platform, Dimensions } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;
const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        paddingTop: STATUS_BAR_HEIGHT,
        flexDirection: 'row'
    },
    back: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 5,
        paddingRight: Dimensions.get('window').width / 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    }
});

module.exports = styles;
