/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 18:08:55
 * @Description:
 * _(:з」∠)_
 */
const document: AuthRoute.Route = {
  name: 'document',
  path: '/document',
  component: 'basic',
  children: [
    {
      name: 'document_api',
      path: '/document/api',
      component: 'self',
      meta: {
        title: 'BIT101-API',
        i18nTitle: 'routes.document.api',
        requiresAuth: true,
        icon: 'simple-icons:apifox'
      }
    },
    // {
    //   name: 'document_project',
    //   path: '/document/project',
    //   component: 'self',
    //   meta: {
    //     title: '项目文档',
    //     i18nTitle: 'routes.document.project',
    //     requiresAuth: true,
    //     localIcon: 'logo'
    //   }
    // },
    {
      name: 'document_feishu-link',
      path: '/document/feishu-link',
      meta: {
        title: '飞书',
        requiresAuth: true,
        icon: 'icon-park:new-lark',
        href: 'https://bit101-project.feishu.cn/'
      }
    }
    // {
    //   name: 'document_naive',
    //   path: '/document/naive',
    //   component: 'self',
    //   meta: {
    //     title: 'NaiveUI文档',
    //     i18nTitle: 'routes.document.naive',
    //     requiresAuth: true,
    //     icon: 'logos:naiveui'
    //   }
    // }
  ],
  meta: {
    title: '文档',
    i18nTitle: 'routes.document._value',
    icon: 'mdi:file-document-multiple-outline',
    order: 2
  }
};

export default document;
