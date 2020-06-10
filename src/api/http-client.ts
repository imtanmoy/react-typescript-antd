import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosTransformer,
} from 'axios';
import _ from 'lodash';
import CamelcaseKeys from 'camelcase-keys';
import { AnonymousEndpoints, BASE_URL } from './config';

/* https://github.com/axios/axios/blob/master/test/typescript/axios.ts */

const transformResponse: AxiosTransformer = (data: any): any => {
  if (_.isObject(data)) {
    return CamelcaseKeys(data, { deep: true });
  }
  return data;
};

const authInterceptor = async (
  request: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  let isAnonymous: boolean = false;
  if (request.url != null) {
    isAnonymous = AnonymousEndpoints.includes(request.url);
  }
  if (isAnonymous) {
    return request;
  }
  // Log out if the accessToken is undefined
  // Add the access token to the header
  // Check if the access token has expired
  return request;
};

const errorInterceptor = (axiosError: AxiosError) => {
  return Promise.reject(axiosError);
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 2000, // 20s
  headers: {
    //ADD your customs headers here
  },
  transformResponse: [].concat(
    // @ts-ignore
    axios.defaults.transformResponse,
    transformResponse
  ),
};

export const httpClient: AxiosInstance = axios.create(axiosConfig);
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(res => res, errorInterceptor);
