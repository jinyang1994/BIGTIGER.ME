# BIGTIGER.ME（基于React Native制作的博客客户端）

BIGTIGER.ME，根据英文直接的中文翻译是大老虎🐅，但是我更喜欢它的谐音，叫做”逼格太高的我“。目前是一个面向高逼格人群的博客✌️（如果有可能的话！后期会发展成一个组织）。

<!--more-->

## 关于这个项目

这个项目的底层是我上一家公司搭建的架构，所以底层的东西我是照搬过来的（大家如果有关于底层的问题，我可能解答不了，但是我会尽力的帮助大家）。我处理的更多是关于组件以及功能相关的。而且这个项目是去年的7 8月份做的，很久没有更新。😂所以有些东西可能是真的想不起来了。如果有问题可以通过下面的联系方式找我，我们一起回忆😁。

## 未来的计划

这个项目决定停止维护了。目前的主要工作在写这个项目[Chat](https://github.com/liujinyang1994/Chat)，等到项目结束后，我将使用[dvajs](https://github.com/dvajs/dva)重构这个项目。

## 实现的功能

* 消息推送
* 热更新
* 微信分享
* 抽屉
* 列表的加载和刷新
* 调用原生邮件
* 调用原生打电话

## 关于项目的结构

基础的目录我就不讲解了（例如`./ios`，`./android`，`index.ios.js`，`index.android.js`这些都是干什么的）。更多的是介绍`src`目录下的内容。

* common：各个页面共用的一些资源
    * component：组件
    * images：图片
    * styles：共用组件的样式
* pages：各个页面
    * page：页面模块
        * component：页面使用的组件
        * images：页面使用的图片
        * styles：页面组件使用的样式
        * views：具体页面
        * index.js：子路由配置文件b，可以理解为`a/b`
    * index.js：主路由配置文件a
* redux：redux相关
    * actions：action相关
    * reducers：reducer相关
    * store：redux底层配置
* support：原生应用相关
* App.js：路由
* config.js：配置文件
* Main.js：页面容器
* setup.js：初始化

## 加入BIGTIGER.ME

如果你喜欢折腾一些东西，BIGTIGER.ME欢迎你🎉🎉。

## 联系我

可以通过以下方式联系我😁。

Email：liujinyang@bigtiger.me
Wechat：jinyang1994





