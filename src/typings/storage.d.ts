declare namespace StorageInterface {
  /** localStorage的存储数据的类型 */
  interface Session {
    /** 主题颜色 */
    themeColor: string;
    /** 主题配置 */
    themeSettings: Theme.Setting;
  }

  /** localStorage的存储数据的类型 */
  interface Local {
    /** 用户fake_cookie */
    fake_cookie: string;
    /** 用户信息 */
    user: BIT101.User;
    /** 多页签路由信息 */
    multiTabRoutes: App.GlobalTabRoute[];
    /** 本地语言缓存 */
    lang: I18nType.LangType;
  }
}
