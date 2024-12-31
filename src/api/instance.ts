import axios from 'axios';
import { API_AUTH, API_ACADEMY, API_EMAIL } from '@/constants/API';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const noAuthRequiredEndpoints: string[] = [
  API_AUTH.SIGNUP,
  API_AUTH.LOGIN,
  API_ACADEMY.INVITE,
  API_ACADEMY.CREATE,
  API_ACADEMY.CODE,
  API_EMAIL.SEND,
  API_EMAIL.VERIFY,
];

interface RefreshQueue {
  (token: string): void;
}

let isRefreshing = false;
let refreshQueue: RefreshQueue[] = [];

const reissueToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshQueue.push(resolve);
    });
  }

  try {
    isRefreshing = true;
    const response = await axios.post(
      'https://classfit.duckdns.org/api/v1/reissue',
      {},
      {
        withCredentials: true,
      }
    );

    const authHeader = response.headers['authorization'];
    const accessToken = authHeader.split(' ')[1];
    localStorage.setItem('accessToken', accessToken);

    refreshQueue.forEach((callback) => callback(accessToken));
    refreshQueue = [];

    return accessToken;
  } catch (error) {
    alert('다시한번 로그인해주세요');
    window.location.href = '/signin';
    return null;
  } finally {
    isRefreshing = false;
  }
};

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && !noAuthRequiredEndpoints.includes(config.url as string)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); // 추후 로그인 방식에 따라 수정 예정 jwt, session 등

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 408 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await reissueToken();
      if (newToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
