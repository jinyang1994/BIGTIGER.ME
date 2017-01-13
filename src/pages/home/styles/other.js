import { StyleSheet, Dimensions } from 'react-native';

const i4 = {
    other: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 25
    },
    other_item: {
        flex: 1,
        paddingTop: 12,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    other_item_text: {
        color: '#ffffff',
        marginLeft: 25,
        fontSize: 14
    }
};

const i5 = {
    other: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 40
    },
    other_item: {
        flex: 1,
        paddingTop: 13,
        paddingBottom: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    other_item_text: {
        color: '#ffffff',
        marginLeft: 25,
        fontSize: 16
    }
};

const i6 = {
    other: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 65
    },
    other_item: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    other_item_text: {
        color: '#ffffff',
        marginLeft: 25,
        fontSize: 16
    }
};

const i6p = {
    other: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 55
    },
    other_item: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    other_item_text: {
        color: '#ffffff',
        marginLeft: 25,
        fontSize: 18
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
    WIDTH == 320 && HEIGHT == 568 ? 23 :
    WIDTH == 375 && HEIGHT == 667 ? 25 :
    WIDTH == 414 && HEIGHT == 736 ? 30 :
    21;

module.exports = { styles, icon_size };
