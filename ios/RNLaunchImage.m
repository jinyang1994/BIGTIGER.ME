//
//  RNLaunchImage.m
//  client
//
//  Created by Jinyang on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//


#import "RNLaunchImage.h"
static bool waiting = true;

@implementation RNLaunchImage

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

+ (void)wait {
  while (waiting) {
    NSDate* later = [NSDate dateWithTimeIntervalSinceNow:0.1];
    [[NSRunLoop mainRunLoop] runUntilDate:later];
  }
}

RCT_EXPORT_METHOD(hide) {
  NSLog(@"隐藏");
  dispatch_async(dispatch_get_main_queue(),
                 ^{
                   waiting = false;
                 });
}
@end
