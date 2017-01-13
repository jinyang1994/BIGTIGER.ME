/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "CodePush.h"
#import "RCTRootView.h"
#import "RNLaunchImage.h"
#import "../Libraries/LinkingIOS/RCTLinkingManager.h"
#import <CloudPushSDK/CloudPushSDK.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  [self initCloudPush];
  [self registerAPNS: application];
  #ifdef DEBUG
    jsCodeLocation = [NSURL URLWithString:@"http://192.168.199.103:8081/index.ios.bundle?platform=ios&dev=true"];
    //  jsCodeLocation = [CodePush bundleURL];
  #else
    jsCodeLocation = [CodePush bundleURL];
  #endif
  // 点击通知将App从关闭状态启动时，将通知打开回执上报
  [CloudPushSDK handleLaunching:launchOptions];
  if (launchOptions != nil) {
    NSDictionary *dictionary = [launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
    if (dictionary != nil) {
      // 这个字典就是推送消息的userInfo
      NSUserDefaults *user = [NSUserDefaults standardUserDefaults];
      NSLog(@"dictionary=%@",dictionary);
      [user setObject:dictionary forKey:@"summary"];
    }
  }
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"client"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [RNLaunchImage wait];
  return YES;
}

- (void)initCloudPush {
  // SDK初始化
  [CloudPushSDK asyncInit:@"23441685" appSecret:@"8ee45f8f954a47c827ecfd1ef0d308ce" callback:^(CloudPushCallbackResult *res) {
    if (res.success) {
      NSLog(@"Push SDK init success, deviceId: %@", [CloudPushSDK getDeviceId]);
    } else {
      NSLog(@"Push SDK init failed, error: %@", res.error);
    }
  }];
}

/**
 *    注册苹果推送，获取deviceToken用于推送
 *
 *    @param     application
 */
- (void)registerAPNS:(UIApplication *)application {
  if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 8.0) {
    // iOS 8 Notifications
    [application registerUserNotificationSettings:
     [UIUserNotificationSettings settingsForTypes:
      (UIUserNotificationTypeSound | UIUserNotificationTypeAlert | UIUserNotificationTypeBadge)
                                       categories:nil]];
    [application registerForRemoteNotifications];
  }
  else {
    // iOS < 8 Notifications
    [[UIApplication sharedApplication] registerForRemoteNotificationTypes:
     (UIRemoteNotificationTypeAlert | UIRemoteNotificationTypeBadge | UIRemoteNotificationTypeSound)];
  }
}

/*
 *  苹果推送注册成功回调，将苹果返回的deviceToken上传到CloudPush服务器
 */
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [CloudPushSDK registerDevice:deviceToken withCallback:^(CloudPushCallbackResult *res) {
    if (res.success) {
      NSLog(@"Register deviceToken success.");
    } else {
      NSLog(@"Register deviceToken failed, error: %@", res.error);
    }
  }];
}
/*
 *  苹果推送注册失败回调
 */
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  NSLog(@"didFailToRegisterForRemoteNotificationsWithError %@", error);
}

/*
 *  App处于启动状态时，通知打开回调
 */
- (void)application:(UIApplication*)application didReceiveRemoteNotification:(NSDictionary*)userInfo {
  NSLog(@"Receive one notification.");
  // 取得APNS通知内容
  NSDictionary *aps = [userInfo valueForKey:@"aps"];
  // 内容
  NSString *content = [aps valueForKey:@"alert"];
  // badge数量
  NSInteger badge = [[aps valueForKey:@"badge"] integerValue];
  // 播放声音
  NSString *sound = [aps valueForKey:@"sound"];
  // 取得Extras字段内容
  NSString *Extras = [userInfo valueForKey:@"Extras"]; //服务端中Extras字段，key是自己定义的
  NSLog(@"content = [%@], badge = [%ld], sound = [%@], Extras = [%@]", content, (long)badge, sound, Extras);
  // iOS badge 清0
  application.applicationIconBadgeNumber = 0;
  //通知中心通知内容
  [[NSNotificationCenter defaultCenter] postNotificationName:@"notice" object:nil userInfo:@{@"message":userInfo}];
  // 通知打开回执上报
  [CloudPushSDK handleReceiveRemoteNotification:userInfo];
}


//微信分享
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

//禁止横屏
- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  return UIInterfaceOrientationMaskPortrait;
}

@end
