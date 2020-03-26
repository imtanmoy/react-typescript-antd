import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { AnonymousEndpoints, BASE_URL } from './config';

const authInterceptor = async (request: AxiosRequestConfig) => {
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

export const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000, // 20s
  headers: {
    //ADD your customs headers here
  },
});

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(res => res, errorInterceptor);
