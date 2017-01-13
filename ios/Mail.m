//
//  Mail.m
//  client
//
//  Created by Jinyang on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "Mail.h"

@implementation Mail
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(open)
{
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"mailto:liujinyang@bitiger.me"]];
}
@end
