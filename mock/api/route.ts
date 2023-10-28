/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-10-29 01:50:55
 * @Description:
 * _(:з」∠)_
 */
import type { MockMethod } from 'vite-plugin-mock';
import { routeModel } from '../model';

const apis: MockMethod[] = [
  {
    url: '/mock/getUserRoutes',
    method: 'post',
    response: (): Service.MockServiceResult => {
      const routeHomeName: AuthRoute.LastDegreeRouteKey = 'dashboard_analysis';

      const role = 'user';

      const filterRoutes = routeModel[role];

      return {
        code: 200,
        message: 'ok',
        data: {
          routes: filterRoutes,
          home: routeHomeName
        }
      };
    }
  }
];

export default apis;
