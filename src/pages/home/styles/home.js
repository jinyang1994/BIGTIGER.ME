import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: 'relative'
    },
    background_image: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    background_color: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    home_content: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
});

module.exports = styles;
