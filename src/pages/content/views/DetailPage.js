import React from 'react';
import {
    View,
    WebView,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import styles from '../styles/detail'
import Header from '../component/header';
import Loading from '../../../common/component/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import Alert from '../../../common/component/Alert';
import * as WeChat from 'react-native-wechat';

class Detail extends React.Component {
    constructor () {
        super();
        this.share = this.share.bind(this);
        this.state = {
            loading: true
        }
    }

    share () {
        let cancel={text: '取消'};
        let shareFriend={
            text: '微信好友',
            onPress: () => {
                try {
                    let result = WeChat.shareToSession({
                        type: 'news',
                        title: this.props.query.title,
                        description: '一篇关于' + this.props.query.description +'文章',
                        thumbImage: 'http://www.bigtiger.me/wp-content/uploads/2016/08/180.png',
                        webpageUrl: this.props.query.url + '?client=1'
                    });
                    console.log('share text message to time line successful:', result);
                } catch (e) {
                    console.error('share text message to time line failed with:', e);
                }
            }
        };
        let shareCircle={
            text: '微信朋友圈',
            onPress: () => {
                try {
                    let result = WeChat.shareToTimeline({
                        type: 'news',
                        title: this.props.query.title,
                        description: '一篇关于' + this.props.query.description +'文章',
                        thumbImage: 'http://www.bigtiger.me/wp-content/uploads/2016/08/180.png',
                        webpageUrl: this.props.query.url + '?client=1'
                    });
                    console.log('share text message to time line successful:', result);
                } catch (e) {
                    console.error('share text message to time line failed with:', e);
                }
            }
        };
        Alert.show('将这篇文章分享到...',[shareFriend,shareCircle,cancel], '分享');
    }

    render () {
        return (
            <View style={styles.background_color}>
                <Header title="文章">
                    <TouchableHighlight underlayColor="transparent" onPress={this.share} style={styles.share}>
                        <Icon name='ios-more' size={30} color={'#ffffff'} />
                    </TouchableHighlight>
                </Header>
                <View style={{flex: 1}}>
                    <WebView style={styles.content}
                             source={{uri: this.props.query.url + '?client=1'}}
                             startInLoadingState={true}
                             onLoadEnd={() => {
                                console.log('完成');
                                this.setState({loading: false});
                             }}
                    />
                </View>
            </View>
        )
    }
}

function select(store) {
    return {}
}

module.exports = connect(select)(Detail);

