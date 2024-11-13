import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const noAuthRequiredEndpoints: string[] = [API_AUTH.SIGNUP, API_AUTH.LOGIN];

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken');
//     if (token && !noAuthRequiredEndpoints.includes(config.url as string)) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// ); // 추후 로그인 방식에 따라 수정 예정 jwt, session 등

export default instance;
