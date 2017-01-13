import { StyleSheet, Dimensions, Image } from 'react-native';

const styles = StyleSheet.create({
    background_color: {
        backgroundColor: '#333333',
        flex: 1
    },
    list: {
        flex: 1,
        padding: 10,
        overflow: 'hidden'
    },
    list_item_image: {
        height: 100,
        width: Dimensions.get('window').width - 20,
        resizeMode: Image.resizeMode.cover,
        marginBottom: 10,
        borderRadius: 5

    },
    list_item_touch: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    list_item_content: {
        flex: 1,
        padding: 15
    },
    list_item_content_title: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list_item_content_title_text: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 18,
        fontWeight: 'bold'
    },
    list_item_content_footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    list_item_content_sort: {
        color: '#ffffff',
        fontSize: 12
    },
    list_item_content_time: {
        flex: 1,
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'right'
    }
});

module.exports = styles;
