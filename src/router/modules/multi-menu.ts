/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 18:00:56
 * @Description:
 * _(:з」∠)_
 */
const multiMenu: AuthRoute.Route = {
  name: 'multi-menu',
  path: '/multi-menu',
  component: 'basic',
  children: [
    {
      name: 'multi-menu_first',
      path: '/multi-menu/first',
      component: 'multi',
      children: [
        {
          name: 'multi-menu_first_second',
          path: '/multi-menu/first/second',
          component: 'self',
          meta: {
            title: '二级菜单',
            i18nTitle: 'routes.multi-menu.first.second',
            requiresAuth: true,
            icon: 'mdi:menu'
          }
        },
        {
          name: 'multi-menu_first_second-new',
          path: '/multi-menu/first/second-new',
          component: 'multi',
          children: [
            {
              name: 'multi-menu_first_second-new_third',
              path: '/multi-menu/first/second-new/third',
              component: 'self',
              meta: {
                title: '三级菜单',
                i18nTitle: 'routes.multi-menu.first.second-new.third',
                requiresAuth: true,
                icon: 'mdi:menu'
              }
            }
          ],
          meta: {
            title: '二级菜单(有子菜单)',
            i18nTitle: 'routes.multi-menu.first.second-new._value',
            icon: 'mdi:menu'
          }
        }
      ],
      meta: {
        title: '一级菜单',
        i18nTitle: 'routes.multi-menu.first._value',
        icon: 'mdi:menu'
      }
    }
  ],
  meta: {
    title: '多级菜单',
    i18nTitle: 'routes.multi-menu._value',
    icon: 'carbon:menu',
    order: 8,
    hide: true
  }
};

export default multiMenu;
