import { unref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchLogin, fetchUserInfo } from '@/service';
import { useRouterPush } from '@/composables';
import { localStg } from '@/utils';
import { $t } from '@/locales';
import { useTabStore } from '../tab';
import { useRouteStore } from '../route';
import { getFakeCookie, getUser, clearAuthStorage } from './helpers';

interface AuthState {
  /** 用户信息 */
  user: BIT101.User;
  /** 用户fake_cookie */
  fake_cookie: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
  /** 用户角色 */
  role: Auth.RoleType;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    user: getUser(),
    role: 'admin',
    fake_cookie: getFakeCookie(),
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.fake_cookie);
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      const { resetTabStore } = useTabStore();
      const { resetRouteStore } = useRouteStore();
      const route = unref(router.currentRoute);

      clearAuthStorage();
      this.$reset();

      if (route.meta.requiresAuth) {
        toLogin();
      }

      nextTick(() => {
        resetTabStore();
        resetRouteStore();
      });
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
     */
    async handleActionAfterLogin(backendToken: ApiAuth.Login) {
      const route = useRouteStore();
      const { toLoginRedirect } = useRouterPush(false);

      const loginSuccess = await this.loginByToken(backendToken);

      if (loginSuccess) {
        await route.initAuthRoute();

        // 跳转登录后的地址
        toLoginRedirect();

        // 登录成功弹出欢迎提示
        if (route.isInitAuthRoute) {
          window.$notification?.success({
            title: $t('page.login.common.loginSuccess'),
            content: $t('page.login.common.welcomeBack', { userName: this.user.nickname }),
            duration: 3000
          });
        }

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
     */
    async loginByToken(backendToken: ApiAuth.Login) {
      let successFlag = false;

      // 先把token存储到缓存中(后面接口的请求头需要token)
      const { fake_cookie } = backendToken;
      localStg.set('fake_cookie', fake_cookie);

      // 获取用户信息
      const { data } = await fetchUserInfo();
      if (data) {
        // 成功后把用户信息存储到缓存中
        localStg.set('user', data.user);

        // 更新状态
        this.user = data.user;
        this.fake_cookie = fake_cookie;

        successFlag = true;
      }

      return successFlag;
    },
    /**
     * 登录
     * @param userName - 用户名
     * @param password - 密码
     */
    async login(userName: string, password: string) {
      this.loginLoading = true;
      const { data } = await fetchLogin(userName, password);
      if (data) {
        await this.handleActionAfterLogin(data);
      }
      this.loginLoading = false;
    }
  }
});
