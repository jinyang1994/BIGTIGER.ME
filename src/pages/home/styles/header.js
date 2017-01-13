import { StyleSheet, Platform } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;
const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        paddingTop: STATUS_BAR_HEIGHT
    },
    tab: {
        flex: 1,
        flexDirection: 'row'
    },
    tab_left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tab_content: {
        paddingTop: 6,
        paddingBottom: 6,
        flex: 4
    },
    tab_right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_content: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14
    }
});

module.exports = styles;