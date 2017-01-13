//
//  Call.m
//  client
//
//  Created by Jinyang on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "Call.h"

@implementation Call
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(open:(NSString *)customerTel)
{
  
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"tel://%@",customerTel]]];
  
}
@end
