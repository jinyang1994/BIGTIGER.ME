//
//  AliyunPush.m
//  client
//
//  Created by Jinyang on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//


#import "AliyunPush.h"
@implementation AliyunPush
RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (id) init
{
  if(self = [super init])
  {
    //注册通知中心
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(reciveNotice:)
                                                 name:@"notice" object:nil];
   
  }
  return self;
}

- (void) reciveNotice:(NSNotification *)notification
{
  if ([UIApplication sharedApplication].applicationState == UIApplicationStateActive) {
    return;
  }
  RCT_IF_DEV(NSLog(@"收到推送消息:%@",notification.userInfo[@"message"]));
  NSDictionary *d =notification.userInfo[@"message"];
  NSMutableDictionary *dic =[[NSMutableDictionary alloc] initWithDictionary:d];
  [self.bridge.eventDispatcher sendAppEventWithName:@"AliyunPushMessage"
                                               body:@{@"message": dic}];
}

RCT_EXPORT_METHOD(push) {
  NSUserDefaults *user = [NSUserDefaults standardUserDefaults];
  NSMutableDictionary *dictionary = [[NSMutableDictionary alloc] init];
  if ([user objectForKey:@"summary"]) {
    dictionary = [user objectForKey:@"summary"];
    [user removeObjectForKey:@"summary"];
    [self.bridge.eventDispatcher sendAppEventWithName:@"AliyunPushMessage"
                                                 body:@{@"message": dictionary}];

  }
  
  }


@end