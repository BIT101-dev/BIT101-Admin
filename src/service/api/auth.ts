import { MD5 } from 'crypto-js';
import { mockRequest, request } from '../request';

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  const md5 = MD5(password).toString();
  return request.post<ApiAuth.Login>('/user/login', { sid: userName, password: md5 });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/user/info/0');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutes', { userId });
}
