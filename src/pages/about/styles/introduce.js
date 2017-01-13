import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    introduce: {
        flex: 1
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    photo_view: {
        paddingTop: 30,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    figure: {
        paddingLeft: 20,
        paddingRight: 20
    },
    figure_name: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 27
    },
    figure_introduce: {
        color: '#ffffff',
        lineHeight: 26,
        textAlign: 'justify'
    },
    hobby: {
        paddingLeft: 20,
        paddingRight: 20
    },
    hobby_title: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 27,
        marginTop: 15
    },
    hobby_content: {
        paddingTop: 10,
        flexDirection: 'row',
        flex: 1
    },
    hobby_item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hobby_item_text: {
        color: '#ffffff',
        fontSize: 12
    },
    page_bottom: {
        marginBottom: 30
    }
});

module.exports = styles;
