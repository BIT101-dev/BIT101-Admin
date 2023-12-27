/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 18:10:33
 * @Description:
 * _(:з」∠)_
 */
const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  children: [
    {
      name: 'management_report',
      path: '/management/report',
      component: 'self',
      meta: {
        title: '举报管理',
        i18nTitle: 'routes.management.report',
        requiresAuth: true,
        keepAlive: true,
        icon: 'mdi:report'
      }
    },
    {
      name: 'management_preview',
      path: '/management/preview',
      component: 'self',
      meta: {
        title: 'BIT101预览',
        i18nTitle: 'routes.management.preview',
        requiresAuth: true,
        hide: true,
        multiTab: true,
        keepAlive: true,
        icon: 'ic:round-tab'
      }
    }
  ],
  meta: {
    title: '系统管理',
    i18nTitle: 'routes.management._value',
    icon: 'carbon:cloud-service-management',
    order: 9
  }
};

export default management;
