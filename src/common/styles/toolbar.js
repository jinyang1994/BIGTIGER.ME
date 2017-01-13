import { StyleSheet, Dimensions, Platform } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const i4 = {
    toolbar_view: {
        height: HEIGHT,
        width: WIDTH,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex: 15
    },
    toolbar: {
        backgroundColor: '#241f27',
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.4
    },
    search_view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: STATUS_BAR_HEIGHT + 5
    },
    search: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_content: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14
    },
    search_icon: {
        justifyContent: 'center'
    },
    toolbar_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar_title_english: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    toolbar_title_chinese: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 15
    },
    menu: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    menu_text: {
        color: '#ffffff',
        lineHeight: 18,
        fontSize: 14
    },
    menu_hide_button: {
        width: 50
    },
    menu_icon: {
        textAlign: 'right',
        flex: 1
    },
    contact: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339'
    },
    contact_mail: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#2e3339',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    contact_phone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    }
};

const i5 = {
    toolbar_view: {
        height: HEIGHT,
        width: WIDTH,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex: 15
    },
    toolbar: {
        backgroundColor: '#241f27',
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.4
    },
    search_view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: STATUS_BAR_HEIGHT + 5
    },
    search: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_content: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14
    },
    search_icon: {
        justifyContent: 'center'
    },
    toolbar_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar_title_english: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    toolbar_title_chinese: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 15
    },
    menu: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    menu_text: {
        color: '#ffffff',
        lineHeight: 20,
        fontSize: 16
    },
    menu_hide_button: {
        width: 50
    },
    menu_icon: {
        textAlign: 'right',
        flex: 1
    },
    contact: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339'
    },
    contact_mail: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#2e3339',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    contact_phone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    }
};

const i6 = {
    toolbar_view: {
        height: HEIGHT,
        width: WIDTH,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex: 15
    },
    toolbar: {
        backgroundColor: '#241f27',
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.4
    },
    search_view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: STATUS_BAR_HEIGHT + 5
    },
    search: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_content: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14
    },
    search_icon: {
        justifyContent: 'center'
    },
    toolbar_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar_title_english: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 35
    },
    toolbar_title_chinese: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    menu: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    menu_text: {
        color: '#ffffff',
        lineHeight: 20,
        fontSize: 16
    },
    menu_hide_button: {
        width: 60
    },
    menu_icon: {
        textAlign: 'right',
        flex: 1
    },
    contact: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339'
    },
    contact_mail: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#2e3339',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    contact_phone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
};

const i6p = {
    toolbar_view: {
        height: HEIGHT,
        width: WIDTH,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex: 15
    },
    toolbar: {
        backgroundColor: '#241f27',
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.4
    },
    search_view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: STATUS_BAR_HEIGHT + 5
    },
    search: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_content: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14
    },
    search_icon: {
        justifyContent: 'center'
    },
    toolbar_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar_title_english: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 40
    },
    toolbar_title_chinese: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 20
    },
    menu: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    menu_text: {
        color: '#ffffff',
        lineHeight: 20,
        fontSize: 18
    },
    menu_hide_button: {
        width: 60
    },
    menu_icon: {
        textAlign: 'right',
        flex: 1
    },
    contact: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#2e3339'
    },
    contact_mail: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#2e3339',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    contact_phone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
};

const styles = StyleSheet.create(
    WIDTH == 320 && HEIGHT == 568 ? i5 :
    WIDTH == 375 && HEIGHT == 667 ? i6 :
    WIDTH == 414 && HEIGHT == 736 ? i6p:
    i4
);

const icon_size =
    WIDTH == 320 && HEIGHT == 568 ? 23 :
    WIDTH == 375 && HEIGHT == 667 ? 25 :
    WIDTH == 414 && HEIGHT == 736 ? 27 :
    20;

const icon_size_big =
    WIDTH == 320 && HEIGHT == 568 ? 35 :
    WIDTH == 375 && HEIGHT == 667 ? 45 :
    WIDTH == 414 && HEIGHT == 736 ? 48 :
    30;

module.exports = { styles, icon_size, icon_size_big };
