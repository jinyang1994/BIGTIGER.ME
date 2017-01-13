import React from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import styles from '../styles/thanks';

class Thanks extends React.Component {
    render () {
        return (
            <ScrollView style={styles.list}>
                <Text style={styles.content}>
                    项目在7月31日启动，主要技术是使用React Native，不算其中生病休息的一个星期，
                    总共3个星期的日夜奋战（其实也是只有晚上），这款个人的博客客户端终于上架App Store，在
                    这背后不只是我个人的努力，更多的是大家提供的帮助，从小妈妈就教导我"知恩图报"，所以
                    我将这个页面用来鸣谢给予我支持的人，以下人员名单不分先后顺序。
                </Text>
                <Text style={styles.name}>
                    · 感谢公司iOS开发工程师 -- 鼎天（外号）
                </Text>
                <Text style={styles.technology}>
                    -- [提供原生iOS的技术支持]
                </Text>
                <Text style={styles.name}>
                    · 感谢公司Android开发工程师 -- 亮哥
                </Text>
                <Text style={styles.technology}>
                    -- [提供一些组件的最佳实践方案]
                </Text>
                <Text style={styles.name}>
                    · 感谢公司全栈架构师 -- 贤哥
                </Text>
                <Text style={styles.technology}>
                    -- [提供服务器相关的技术支持]
                </Text>
                <Text style={styles.name}>
                    · 感谢React Native中文网6群 -- 圈圈的灯
                </Text>
                <Text style={styles.technology}>
                    -- [提供的ListView列表加载消失的解决方案]
                </Text>
                <Text style={styles.name}>
                    · 还有此时此刻正在阅读BIGTIGER.ME的你们
                </Text>
                <Text style={[styles.name, styles.bottom]}>
                    · 以及未来会帮助我的人...
                </Text>

            </ScrollView>
        )
    }
}

module.exports = Thanks;
