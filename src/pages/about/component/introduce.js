import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import styles from '../styles/introduce';
import Icon from 'react-native-vector-icons/Ionicons';

class Introduce extends React.Component {
    render () {
        return (
            <ScrollView style={styles.introduce}>
                <View style={styles.photo_view}>
                    <Image source={require('../images/me.jpg')} style={styles.photo} />
                </View>
                <View style={styles.figure}>
                    <Text style={styles.figure_name}>自我介绍：</Text>
                    <Text style={styles.figure_introduce}>
                        我是一名90后。正了八经的东北人，但是我只有中等的个子，还偏瘦。爱好嘛？都写了，我就不在说一遍了。
                        15年10月入坑从事的工作是前端开发，所以经验还是蛮少的。
                    </Text>
                </View>
                <View style={styles.hobby}>
                    <Text style={styles.hobby_title}>我的爱好：</Text>
                    <View style={styles.hobby_content}>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-film" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>看电影</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-musical-notes" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>听音乐</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-chatbubbles" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>爱聊天</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-game-controller-b" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>玩游戏</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.photo_view}>
                    <Image source={require('../images/girlfriend.jpg')} style={styles.photo} />
                </View>
                <View style={styles.figure}>
                    <Text style={styles.figure_name}>涵姐介绍：</Text>
                    <Text style={styles.figure_introduce}>
                        涵姐，我的女朋友，大学的时候认识的。虽然身份证上的生日是92年的，
                        但是她坚持说只比我大几个月，所以我亲切称她为“大涵姐”。
                    </Text>
                </View>
                <View style={styles.hobby}>
                    <Text style={styles.hobby_title}>涵姐爱好：</Text>
                    <View style={styles.hobby_content}>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-cart" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>购物</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-camera" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>拍照</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-pizza" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>吃美食</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-phone-portrait" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>刷微博</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.photo_view}>
                    <Image source={require('../images/cat.jpg')} style={styles.photo} />
                </View>
                <View style={styles.figure}>
                    <Text style={styles.figure_name}>肥咪介绍：</Text>
                    <Text style={styles.figure_introduce}>
                        这个小家伙是我清明节买回来的，别人家的猫叫“端午”，我的总不能叫“清明”吧，
                        所以起名字的事情就放下了，一般叫它的时候就发mimi的声音，
                        但是现在才不到4个月就5.5斤了，不叫它“肥咪”还跑得了!
                    </Text>
                </View>
                <View style={[styles.hobby, styles.page_bottom]}>
                    <Text style={styles.hobby_title}>肥咪爱好：</Text>
                    <View style={styles.hobby_content}>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-paw" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>抓东西</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-moon" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>睡午觉</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-restaurant" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>吃猫粮</Text>
                        </View>
                        <View style={styles.hobby_item}>
                            <Icon name="ios-alarm" size={40} color={'#ffffff'} />
                            <Text style={styles.hobby_item_text}>当闹钟</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

module.exports = Introduce;

