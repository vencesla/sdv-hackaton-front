import axios from 'axios';
import TokenManager from './TokenManager';

const instance = axios.create();

instance.defaults.baseURL = 'http://localhost:8080';

instance.interceptors.request.use(function (config) {
    const token = TokenManager.getToken();
    if(token) {
        config.headers.common['Authorization'] = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(async function (response) {
    await TokenManager.setToken(response.headers.authorization)
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;