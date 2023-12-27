/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 18:01:19
 * @Description:
 * _(:з」∠)_
 */
const authDemo: AuthRoute.Route = {
  name: 'auth-demo',
  path: '/auth-demo',
  component: 'basic',
  children: [
    {
      name: 'auth-demo_permission',
      path: '/auth-demo/permission',
      component: 'self',
      meta: {
        title: '权限切换',
        i18nTitle: 'routes.auth-demo.permission',
        requiresAuth: true,
        icon: 'ic:round-construction'
      }
    },
    {
      name: 'auth-demo_super',
      path: '/auth-demo/super',
      component: 'self',
      meta: {
        title: '超级管理员可见',
        i18nTitle: 'routes.auth-demo.super',
        requiresAuth: true,
        permissions: ['super'],
        icon: 'ic:round-supervisor-account'
      }
    }
  ],
  meta: {
    title: '权限示例',
    i18nTitle: 'routes.auth-demo._value',
    icon: 'ic:baseline-security',
    order: 5,
    hide: true
  }
};

export default authDemo;
