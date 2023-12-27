/*
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-26 23:32:34
 * @Description:
 * _(:з」∠)_
 */
/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'https://dev.bit101.flwfdd.xyz'
  },
  test: {
    url: 'http://localhost:8080'
  },
  prod: {
    url: 'https://bit101.flwfdd.xyz'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config,
    proxyPattern: '/proxy-pattern'
  };
}
