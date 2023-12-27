/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-26 23:26:25
 * @Description:
 * _(:з」∠)_
 */
import { localStg } from '@/utils';

/** 获取token */
export function getFakeCookie() {
  return localStg.get('fake_cookie') || '';
}

/** 获取用户信息 */
export function getUser() {
  const emptyUser: BIT101.User = {
    id: 0,
    nickname: '',
    motto: '',
    create_time: '',
    avatar: {
      low_url: '',
      mid: '',
      url: ''
    },
    identity: {
      id: 0,
      color: '',
      text: ''
    }
  };
  const user: BIT101.User = localStg.get('user') || emptyUser;

  return user;
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  localStg.remove('fake_cookie');
  localStg.remove('user');
}
