/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-10-29 00:56:03
 * @Description:
 * _(:з」∠)_
 */
import UAParser from 'ua-parser-js';
import { useAuthStore } from '@/store';
import { isArray, isString } from '@/utils';

/** 获取设备信息 */
export function useDeviceInfo() {
  const parser = new UAParser();
  const result = parser.getResult();
  return result;
}

/** 权限判断 */
export function usePermission() {
  const auth = useAuthStore();

  function hasPermission(permission: Auth.RoleType | Auth.RoleType[]) {
    const userRole = auth.role;

    let has = userRole === 'super';
    if (!has) {
      if (isArray(permission)) {
        has = (permission as Auth.RoleType[]).includes(userRole);
      }
      if (isString(permission)) {
        has = (permission as Auth.RoleType) === userRole;
      }
    }
    return has;
  }

  return {
    hasPermission
  };
}
