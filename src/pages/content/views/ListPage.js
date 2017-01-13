import React from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    InteractionManager,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import { goBack, push } from 'react-router-redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/list'
import Header from '../component/header';
import moment from 'moment';
import Loading from '../../../common/component/Loading';
import { getList } from '../../../redux/actions/content';

class List extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('zh-cn');
        this.onPressPostDetail = this.onPressPostDetail.bind(this);
        this.listItem = this.listItem.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.handleEndReached = this.handleEndReached.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.state = {
            data: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(props.data),
            isRefreshing: false,
            loading: true,
            more: false
        }
    }

    componentWillMount() {
        this.props.dispatch({type: 'DELETE_ALL'});
        InteractionManager.runAfterInteractions(() => {
            this.setState({loading: true});
            this.props.dispatch(getList(
                {
                    'categories[]': this.props.query.categories,
                    'search': this.props.query.search
                }, 10, 0, 'LOADED_CONTENT_LIST'))
                .then(res => this.setState({loading: false}))
                .catch(err =>this.setState({loading: false}));
        });
    }

    onPressPostDetail(url, title, description) {
        this.props.dispatch(push({
            pathname: '/content/detail',
            query: {
                url: url,
                title: title,
                description: description
            }
        }));
    }

    onRefresh() {
        this.setState({isRefreshing: true});
        this.props.dispatch(getList(
            {
                'categories[]': this.props.query.categories,
                'search': this.props.query.search
            }, 10, 0, 'LOADED_CONTENT_LIST'))
            .then(res => this.setState({isRefreshing: false}))
            .catch(err =>this.setState({isRefreshing: false}));
    }

    componentWillReceiveProps(nextProps:Props) {
        if (this.props.data !== nextProps.data) {
            this.setState({
                data: this.state.data.cloneWithRows(nextProps.data)
            });
        }
    }

    handleEndReached() {
        if (this.state.loading || this.state.more) return false;
        if (this.props.count != 0 && this.props.offset >= Math.ceil(this.props.count)) return false;

        InteractionManager.runAfterInteractions(() => {
            this.setState({more: true});
            this.props.dispatch(getList(
                {
                    'categories[]': this.props.query.categories,
                    'search': this.props.query.search
                }, 10, this.props.offset, 'LOADED_MORE'))
                .then(res => this.setState({more: false}))
                .catch(err => this.setState({more: false}));
        });
    }

    listItem(item) {
        const description = item.categories == 3 ? '小前端进化论' : item.categories == 6 ? '生活大爆炸' : '肥咪成长日记';
        return (
            <Image source={item.image ? {uri: item.image} : require('../images/test.jpg')}
                   style={styles.list_item_image}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.4)"
                                    onPress={() => this.onPressPostDetail(item.link, item.title.rendered, description)}
                                    style={styles.list_item_touch}>
                    <View style={styles.list_item_content}>
                        <View style={styles.list_item_content_title}>
                            <Text style={styles.list_item_content_title_text}>{item.title.rendered}</Text>
                        </View>
                        <View style={styles.list_item_content_footer}>
                            <Text style={styles.list_item_content_sort}>
                                栏目：{item.categories == 3 ? '小前端进化论' : item.categories == 6 ? '生活大爆炸' : '肥咪成长日记'}
                            </Text>
                            <Text
                                style={styles.list_item_content_time}>{moment(item.date_gmt + 'Z').format('YYYY年MM月DD日')}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </Image>
        )
    }

    renderFooter() {
        if (this.props.offset >= this.props.count && this.props.count != 0) {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                    <Text style={{fontSize: 12}}>就这么多了</Text>
                </View>
            )
        } else if (this.props.count == 0) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 100}}>
                    <Icon name="md-warning" size={60} color="#f0b431"/>
                    <Text style={{fontSize: 14, color: '#ffffff'}}>没有关于这个的文章</Text>
                </View>
            )
        } else {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, flexDirection: 'row'}}>
                    <ActivityIndicator color='#000000' size='small'/>
                    <Text style={{fontSize: 12, marginLeft: 10}}>加载更多...</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.background_color}>
                <Header title="文章列表"/>
                <Loading loading={this.state.loading}>
                    <ListView
                        ref="listview"
                        style={styles.list}
                        removeClippedSubviews={false}
                        dataSource={this.state.data}
                        renderRow={(one) => this.listItem(one)}
                        onEndReached={this.handleEndReached}
                        refreshControl={
                            <RefreshControl
                                style={{backgroundColor: 'transparent'}}
                                title="刷新中..."
                                tintColor="#000000"
                                onRefresh={this.onRefresh}
                                refreshing={this.state.isRefreshing}
                            />
                        }
                        onEndReachedThreshold={200}
                        renderFooter={this.renderFooter}
                    />
                </Loading>
            </View>
        )
    }
}

function select(store) {
    return {
        ...store.content
    }
}

module.exports = connect(select)(List);