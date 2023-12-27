/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 16:42:53
 * @Description:
 * _(:з」∠)_
 */
import { $t } from '@/locales';
import { transformObjectToOption } from './_shared';

export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
  'pwd-login': $t('page.login.pwdLogin.title'),
  'code-login': $t('page.login.codeLogin.title'),
  register: $t('page.login.register.title'),
  'reset-pwd': $t('page.login.resetPwd.title'),
  'bind-wechat': $t('page.login.bindWeChat.title')
};

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: $t('page.login.pwdLogin.superAdmin'),
  admin: $t('page.login.pwdLogin.admin'),
  user: $t('page.login.pwdLogin.user')
};
export const userRoleOptions = transformObjectToOption(userRoleLabels);

/** 用户性别 */
export const genderLabels: Record<UserManagement.GenderKey, string> = {
  0: '女',
  1: '男'
};
export const genderOptions = transformObjectToOption(genderLabels);

export enum ReportStatus {
  WAITING = 0,
  SUCCESS = 1,
  FAIL = 2
}

export const reportStatusLabels: Record<BIT101.ReportStatus, string> = {
  [ReportStatus.WAITING]: '未处理',
  [ReportStatus.SUCCESS]: '举报成功',
  [ReportStatus.FAIL]: '举报失败'
};
export const reportStatusOptions = [
  { value: ReportStatus.WAITING, label: reportStatusLabels[ReportStatus.WAITING] },
  { value: ReportStatus.SUCCESS, label: reportStatusLabels[ReportStatus.SUCCESS] },
  { value: ReportStatus.FAIL, label: reportStatusLabels[ReportStatus.FAIL] }
];
