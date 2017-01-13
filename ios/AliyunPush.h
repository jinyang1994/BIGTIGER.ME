//
//  AliyunPush.h
//  client
//
//  Created by Jinyang on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//


#import <UIKit/UIKit.h>
#import <CloudPushSDK/CloudPushSDK.h>
#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"
@interface AliyunPush : UIViewController<RCTBridgeModule>
@property NSDictionary *dic;
@end
