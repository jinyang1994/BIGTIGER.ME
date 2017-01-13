import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

class Loading extends React.Component {
    render() {
        if (this.props.loading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator color='#000000' size='large'/>
                </View>
            );
        }

        return this.props.children;
    }
}

module.exports = Loading;